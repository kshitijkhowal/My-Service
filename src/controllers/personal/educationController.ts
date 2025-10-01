import { Request, Response, NextFunction } from 'express';
import { Education } from '../../models/personal';
import { IEducation } from '../../types/global';
import { sendSuccess, sendError, sendNotFound } from '../../utils/apiResponse';
import logger from '../../config/logger';

// Get all education records
export const getAllEducation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const education = await Education.find().sort({ date: -1 });
    sendSuccess(res, education, 'Education records retrieved successfully');
  } catch (error) {
    logger.error('Error getting education records:', error);
    next(error);
  }
};

// Get education record by ID
export const getEducationById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const education = await Education.findById(id);
    
    if (!education) {
      sendNotFound(res, 'Education record not found');
      return;
    }
    
    sendSuccess(res, education, 'Education record retrieved successfully');
  } catch (error) {
    logger.error('Error getting education record:', error);
    next(error);
  }
};

// Create new education record
export const createEducation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const educationData: IEducation = req.body;
    const education = new Education(educationData);
    const savedEducation = await education.save();
    
    sendSuccess(res, savedEducation, 'Education record created successfully', 201);
  } catch (error) {
    logger.error('Error creating education record:', error);
    next(error);
  }
};

// Update education record
export const updateEducation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const education = await Education.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!education) {
      sendNotFound(res, 'Education record not found');
      return;
    }
    
    sendSuccess(res, education, 'Education record updated successfully');
  } catch (error) {
    logger.error('Error updating education record:', error);
    next(error);
  }
};

// Delete education record
export const deleteEducation = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const education = await Education.findByIdAndDelete(id);
    
    if (!education) {
      sendNotFound(res, 'Education record not found');
      return;
    }
    
    sendSuccess(res, null, 'Education record deleted successfully');
  } catch (error) {
    logger.error('Error deleting education record:', error);
    next(error);
  }
};
