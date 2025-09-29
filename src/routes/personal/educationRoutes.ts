import { Router } from 'express';
import {
  getAllEducation,
  getEducationById,
  createEducation,
  updateEducation,
  deleteEducation
} from '../../controllers/personal';

const router = Router();

// Education routes
router.route('/')
  .get(getAllEducation)
  .post(createEducation);

router.route('/:id')
  .get(getEducationById)
  .put(updateEducation)
  .delete(deleteEducation);

export default router;
