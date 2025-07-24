import path from 'path';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './lib/db.js';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    // origin:'http://localhost:5173',
    origin: (origin, callback) => {
      callback(null, origin);
    },
    credentials: true
  })
);

dotenv.config();

const imageDir = path.join(process.cwd(), 'src', 'images');

app.use('/images', express.static(imageDir));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});
