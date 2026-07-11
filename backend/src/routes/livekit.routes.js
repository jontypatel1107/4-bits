import { Router } from 'express';
import { generateToken } from '../services/livekit.service.js';
import AppError from '../utils/appError.js';

const router = Router();

router.post('/token', async (req, res, next) => {
  try {
    const { identity, roomName, name, metadata } = req.body;

    if (!identity || !roomName) {
      throw new AppError('identity and roomName are required', 400);
    }

    const token = await generateToken({ identity, roomName, name, metadata });

    res.json({
      token,
      url: process.env.LIVEKIT_URL || '',
    });
  } catch (err) {
    next(err);
  }
});

export default router;
