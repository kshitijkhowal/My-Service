import { Router } from 'express';
import {
  getAllCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate
} from '../../controllers/personal';
import { authenticateApiKey } from '../../middlewares/auth';

const router = Router();

// Certificate routes
router.route('/')
  .get(getAllCertificates)
  .post(authenticateApiKey, createCertificate);

router.route('/:id')
  .get(getCertificateById)
  .put(authenticateApiKey, updateCertificate)
  .delete(authenticateApiKey, deleteCertificate);

export default router;
