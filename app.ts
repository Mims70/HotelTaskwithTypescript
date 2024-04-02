import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import connectDB from './src/server/config/db';
import routes from './src/routes/routes';
import authRoutes from './src/routes/authRoutes';

// Initialize Express application
const app = express();
const PORT = process.env.PORT || 6000

// Connect to MongoDB database
connectDB();

app.use(express.static('public'));
app.use(express.json());
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

// Routes
app.use('/api/v1', routes);
app.use('/api/v1', authRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
