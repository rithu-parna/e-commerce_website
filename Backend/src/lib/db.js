import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB is connected ${conn.connection.host}`);
  } catch (error) {
    console.log('DB connection error : ', error);
  }
};
