import { Router } from 'express';
import {
  getAllCertificates,
  getCertificateById,
  createCertificate,
  updateCertificate,
  deleteCertificate
} from '../../controllers/personal';

const router = Router();

// Certificate routes
router.route('/')
  .get(getAllCertificates)
  .post(createCertificate);

router.route('/:id')
  .get(getCertificateById)
  .put(updateCertificate)
  .delete(deleteCertificate);

export default router;
