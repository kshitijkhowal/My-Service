import { Router } from 'express';
import profileRoutes from './profileRoutes';
import educationRoutes from './educationRoutes';
import experienceRoutes from './experienceRoutes';
import projectRoutes from './projectRoutes';
import certificateRoutes from './certificateRoutes';

const router = Router();

// Mount all personal-related routes
router.use('/profile', profileRoutes);
router.use('/education', educationRoutes);
router.use('/experience', experienceRoutes);
router.use('/projects', projectRoutes);
router.use('/certificates', certificateRoutes);

export default router;
