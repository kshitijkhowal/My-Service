import { Router } from 'express';
import {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation
} from '../../controllers/personal';
import { authenticateApiKey } from '../../middlewares/auth';

const router = Router();

// Education routes
router.route('/')
  .get(getAllEducation)
  .post(authenticateApiKey, createEducation);

router.route('/:id')
  .get(getEducationById)
  .put(authenticateApiKey, updateEducation)
  .delete(authenticateApiKey, deleteEducation);

export default router;
