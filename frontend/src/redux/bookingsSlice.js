import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock bookings data (normalized to { date, startTime, endTime })
const initialBookings = [
  {
    id: 1,
    spaceId: 1,
    spaceName: 'Downtown Office Suite',
    userId: 1,
    userName: 'John Client',
    userEmail: 'client@demo.com',
    date: '2024-12-01',
    startTime: '09:00',
    endTime: '17:00',
    totalPrice: 750,
    status: 'confirmed',
    createdAt: '2024-11-20T10:30:00Z',
    notes: 'Need parking pass for 3 vehicles',
  },
  {
    id: 2,
    spaceId: 2,
    spaceName: 'Creative Studio Loft',
    userId: 1,
    userName: 'John Client',
    userEmail: 'client@demo.com',
