import sys
import uuid
import random
from datetime import datetime, timedelta
from decimal import Decimal
from faker import Faker
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.database.base import Base
from app.database.models import User, Space, Booking
import argparse

fake = Faker()

def seed_db(db_url, clear_only=False):
    print(f"Connecting to database at {db_url}...")
    engine = create_engine(db_url)
    
    # Always drop and recreate tables if we want a fresh start
    print("Dropping all existing tables...")
    Base.metadata.drop_all(bind=engine)
    
    if clear_only:
        print("Database cleared successfully (no data seeded).")
        return

    print("Creating tables...")
    Base.metadata.create_all(bind=engine)
    
    Session = sessionmaker(bind=engine)
    session = Session()

    try:
        # Create Users
        users = []
        admin = User(
            name="Admin User",
            email="admin@example.com",
            password_hash="hashed_password",
            role="ADMIN"
        )
        test_client = User(
            name="Test Client",
            email="client@example.com",
            password_hash="hashed_password",
            role="CLIENT"
        )
        users.extend([admin, test_client])
        
        for _ in range(8):
            user = User(
                name=fake.name(),
                email=fake.unique.email(),
                password_hash="hashed_password",
                role=random.choice(["CLIENT", "OWNER"])
            )
            users.append(user)
        
        session.add_all(users)
        session.commit()
        print(f"Created {len(users)} users.")

        # Create Spaces
        spaces = []
        space_types = ["Conference Room", "Co-working Desk", "Private Office", "Event Hall"]
        for _ in range(10):
            space = Space(
                title=f"{fake.company()} {random.choice(space_types)}",
                description=fake.paragraph(),
                location=fake.address(),
                price_per_hour=Decimal(random.uniform(10, 50)).quantize(Decimal("0.00")),
                price_per_day=Decimal(random.uniform(50, 200)).quantize(Decimal("0.00")),
                status="AVAILABLE"
            )
            spaces.append(space)
        
        session.add_all(spaces)
        session.commit()
        print(f"Created {len(spaces)} spaces.")

        # Create Bookings
        bookings = []
        client_users = [u for u in users if u.role == "CLIENT"]
        for _ in range(15):
            user = random.choice(client_users)
            space = random.choice(spaces)
            
            start_time = datetime.utcnow() + timedelta(days=random.randint(1, 30))
            end_time = start_time + timedelta(hours=random.randint(1, 8))
            
            booking = Booking(
                user_id=user.id,
                space_id=space.id,
                start_time=start_time,
                end_time=end_time,
                total_amount=Decimal(random.uniform(20, 500)).quantize(Decimal("0.00")),
                status=random.choice(["PENDING", "CONFIRMED", "CANCELLED"])
            )
            bookings.append(booking)
            
        session.add_all(bookings)
        session.commit()
        print(f"Created {len(bookings)} bookings.")
        
        print("Database seeded successfully!")
        
    except Exception as e:
        print(f"Error seeding database: {e}")
        session.rollback()
    finally:
        session.close()

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Manage mock databases (seed/clear).")
    parser.add_argument("--db", type=str, help="Database filename (e.g., spacer.db or test.db)")
    parser.add_argument("--clear", action="store_true", help="Clear the database instead of seeding")
    
    args = parser.parse_args()
    
    if args.db:
        db_url = f"sqlite:///./{args.db}"
        seed_db(db_url, clear_only=args.clear)
    else:
        seed_db("sqlite:///./spacer.db", clear_only=args.clear)
        seed_db("sqlite:///./test.db", clear_only=args.clear)
