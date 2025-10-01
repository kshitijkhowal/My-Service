import { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../../controllers/personal';
import { authenticateApiKey } from '../../middlewares/auth';

const router = Router();

// Project routes
router.route('/')
  .get(getAllProjects)
  .post(authenticateApiKey, createProject);

router.route('/:id')
  .get(getProjectById)
  .put(authenticateApiKey, updateProject)
  .delete(authenticateApiKey, deleteProject);

export default router;
