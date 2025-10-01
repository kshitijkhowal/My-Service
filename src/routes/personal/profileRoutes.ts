import { Router } from 'express';
import {
  getAllPersonal,
  getPersonalById,
  createPersonal,
  updatePersonal,
  deletePersonal
} from '../../controllers/personal';
import { authenticateApiKey } from '../../middlewares/auth';

const router = Router();

// Profile routes
router.route('/')
  .get(getAllPersonal)
  .post(authenticateApiKey, createPersonal);

router.route('/:id')
  .get(getPersonalById)
  .put(authenticateApiKey, updatePersonal)
  .delete(authenticateApiKey, deletePersonal);

export default router;
