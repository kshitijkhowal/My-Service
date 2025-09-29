import { Router } from 'express';
import {
  getAllExperience,
  getExperienceById,
  createExperience,
  updateExperience,
  deleteExperience
} from '../../controllers/personal';

const router = Router();

// Experience routes
router.route('/')
  .get(getAllExperience)
  .post(createExperience);

router.route('/:id')
  .get(getExperienceById)
  .put(updateExperience)
  .delete(deleteExperience);

export default router;
