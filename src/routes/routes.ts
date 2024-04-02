import express from 'express';
import { Router } from 'express';
import authenticateToken from '../middleware/authenticatetoken';
import authorizeRoles from '../middleware/authorizeroles';
import validateData from '../middleware/validatedata';
import authRoutes from './authRoutes'; // Import authentication routes
import * as RoomController from '../controllers/RoomController';
import * as UserController from '../controllers/UserController';

const router: Router = express.Router();

// Use authentication routes
router.use('/api/v1', authRoutes);

// Define other routes
router.get('/api/v1/rooms', authenticateToken, RoomController.getAllRooms);
router.post('/api/v1/rooms', authenticateToken, authorizeRoles(['admin']), validateData, RoomController.createRoom);
router.get('/api/v1/rooms/:id', authenticateToken, RoomController.getRoomById);
router.put('/api/v1/rooms/:id', authenticateToken, authorizeRoles(['admin']), validateData, RoomController.updateRoom);
router.delete('/api/v1/rooms/:id', authenticateToken, authorizeRoles(['admin']), RoomController.deleteRoom);

router.get('/api/v1/users', authenticateToken, UserController.getAllUsers);
router.get('/api/v1/users/:id', authenticateToken, UserController.getUserById);
router.put('/api/v1/users/:id', authenticateToken, UserController.updateUser);
router.delete('/api/v1/users/:id', authenticateToken, UserController.deleteUser);

export default router;
