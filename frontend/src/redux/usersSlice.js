// Users Slice - Manages user records (Admin functionality)
import { createSlice } from '@reduxjs/toolkit';

// Extended mock users data with more detail
const initialUsers = [
  {
    id: 1,
    name: 'John Client',
    email: 'client@demo.com',
    password: 'client123',
    role: 'client',
    phone: '+1 555-0101',
    avatar: null,
    createdAt: '2024-01-15T10:00:00Z',
    totalBookings: 5,
    totalSpent: 2450,
  },
  {
    id: 2,
      name: 'Admin User',
    email: 'admin@demo.com',
    password: 'admin123',
    role: 'admin',
    phone: '+1 555
          avatar: null,
    createdAt: '2024-01-01T08:00:00Z',
    totalBookings: 0,
    totalSpent: 0,
  },
  {
    id: 3,
    name: 'Sarah Smith',
    email: 'sarah@demo.com',
    password: 'sarah123',
    role: 'client',
    phone: '+1 555-0102',
    avatar: null,
    createdAt: '2024-02-20T14:30:00Z',
    totalBookings: 3,
    totalSpent: 890,
  },
  {
    id: 4,
    name: 'Mike Johnson',
    email: 'mike@demo.com',
    password: 'mike123',
    role: 'client',
    phone: '+1 555-0103',
    avatar: null,
    createdAt: '2024-03-10T09:15:00Z',
    totalBookings: 8,
    totalSpent: 4120,
  },
  {
    id: 5,
    name: 'Emily Davis',
    email: 'emily@demo.com',
    password: 'emily123',
    role: 'client',
    phone: '+1 555-0104',
    avatar: null,
    createdAt: '2024-04-05T16:45:00Z',
    totalBookings: 2,
    totalSpent: 450,
  },
];

const initialState = {
  users: initialUsers,



