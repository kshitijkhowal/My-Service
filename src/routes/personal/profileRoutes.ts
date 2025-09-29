import { Router } from 'express';
import {
  getAllPersonal,
  getPersonalById,
  createPersonal,
  updatePersonal,
  deletePersonal
} from '../../controllers/personal';

const router = Router();

// Profile routes
router.route('/')
  .get(getAllPersonal)
  .post(createPersonal);

router.route('/:id')
  .get(getPersonalById)
  .put(updatePersonal)
  .delete(deletePersonal);

export default router;
