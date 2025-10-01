import { Router } from 'express';
import {
  getAllExperience,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
} from '../../controllers/personal';
import { authenticateApiKey } from '../../middlewares/auth';

const router = Router();

// Experience routes
router.route('/')
  .get(getAllExperience)
  .post(authenticateApiKey, createExperience);

router.route('/:id')
  .get(getExperienceById)
  .put(authenticateApiKey, updateExperience)
  .delete(authenticateApiKey, deleteExperience);

export default router;
