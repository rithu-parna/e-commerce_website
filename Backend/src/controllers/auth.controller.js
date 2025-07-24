import fs from 'fs';
import path from 'path';
import bcrypt from 'bcryptjs';
import { fileURLToPath } from 'url';
import User from '../models/user.model.js';
import generateToken from '../lib/utils.js';

export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword
    });

    await newUser.save();

    generateToken(newUser._id, res);

    res.status(200).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      profilePic: newUser.profilePic
    });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    generateToken(user._id, res);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie('jwt', '', { maxAge: 0 });
    res.status(200).json({ message: 'logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateProfile = async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  try {
    const userId = req.user._id;

    if (!req.file) {
      return res.status(400).json({ message: 'Profile pic is required' });
    }

    const filename = req.file.filename;
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${filename}`;

    // Get current user to find old profile pic
    const currentUser = await User.findById(userId);

    if (currentUser && currentUser.profilePic) {
      const oldFilePath = path.join(__dirname, '..', 'images', path.basename(currentUser.profilePic));

      // Check if old file exists before deleting
      fs.access(oldFilePath, fs.constants.F_OK, (err) => {
        if (!err) {
          fs.unlink(oldFilePath, (unlinkErr) => {
            if (unlinkErr) {
              console.error('Failed to delete old profile picture:', unlinkErr);
            } else {
              console.log('Old profile picture deleted:', path.basename(currentUser.profilePic));
            }
          });
        } else {
          console.log('Old profile picture does not exist, no need to delete');
        }
      });
    }

    const updatedUser = await User.findByIdAndUpdate(userId, { profilePic: imageUrl }, { new: true }).select('-password');

    res.status(200).json({
      message: 'Profile updated successfully',
      profilePic: imageUrl,
      user: updatedUser
    });
  } catch (error) {
    console.error('Update Profile Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
