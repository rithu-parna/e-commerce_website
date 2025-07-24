import express from 'express';
import protectRoute from '../middleware/auth.middleware.js';
import * as authFun from '../controllers/auth.controller.js';
import upload from '../middleware/uploadImage.middleware.js';

const router = express.Router();

router.post('/signup', authFun.signup);
router.post('/login', authFun.login);
router.post('/logout', authFun.logout);

router.put('/update-profile', protectRoute, upload.single('image'), authFun.updateProfile);

router.get('/check', protectRoute, authFun.checkAuth);

export default router;
