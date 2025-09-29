import { Request, Response, NextFunction } from 'express';
import { Certificate } from '../../models/personal';
import { ICertificate } from '../../types/global';
import { sendSuccess, sendError, sendNotFound } from '../../utils/apiResponse';
import logger from '../../config/logger';

// Get all certificates
export const getAllCertificates = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const certificates = await Certificate.find().sort({ year: -1 });
    sendSuccess(res, certificates, 'Certificates retrieved successfully');
  } catch (error) {
    logger.error('Error getting certificates:', error);
    next(error);
  }
};

// Get certificate by ID
export const getCertificateById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const certificate = await Certificate.findById(id);
    
    if (!certificate) {
      sendNotFound(res, 'Certificate not found');
      return;
    }
    
    sendSuccess(res, certificate, 'Certificate retrieved successfully');
  } catch (error) {
    logger.error('Error getting certificate:', error);
    next(error);
  }
};

// Create new certificate
export const createCertificate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const certificateData: ICertificate = req.body;
    const certificate = new Certificate(certificateData);
    const savedCertificate = await certificate.save();
    
    sendSuccess(res, savedCertificate, 'Certificate created successfully', 201);
  } catch (error) {
    logger.error('Error creating certificate:', error);
    next(error);
  }
};

// Update certificate
export const updateCertificate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const certificate = await Certificate.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!certificate) {
      sendNotFound(res, 'Certificate not found');
      return;
    }
    
    sendSuccess(res, certificate, 'Certificate updated successfully');
  } catch (error) {
    logger.error('Error updating certificate:', error);
    next(error);
  }
};

// Delete certificate
export const deleteCertificate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const certificate = await Certificate.findByIdAndDelete(id);
    
    if (!certificate) {
      sendNotFound(res, 'Certificate not found');
      return;
    }
    
    sendSuccess(res, null, 'Certificate deleted successfully');
  } catch (error) {
    logger.error('Error deleting certificate:', error);
    next(error);
  }
};
