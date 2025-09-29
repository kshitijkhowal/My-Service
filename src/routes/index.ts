import { Router } from 'express';
import personalRoutes from './personal';

const router = Router();

// Mount routes
router.use('/api/personal', personalRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

export default router;
