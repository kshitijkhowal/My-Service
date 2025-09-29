import { Router } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
} from '../../controllers/personal';

const router = Router();

// Project routes
router.route('/')
  .get(getAllProjects)
  .post(createProject);

router.route('/:id')
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

export default router;
