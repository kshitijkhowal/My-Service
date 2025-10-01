import { Request, Response, NextFunction } from 'express';
import { Experience } from '../../models/personal';
import { IExperience } from '../../types/global';
import { sendSuccess, sendError, sendNotFound } from '../../utils/apiResponse';
import logger from '../../config/logger';

// Get all experience records
export const getAllExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const experience = await Experience.find().sort({ startDate: -1 });
    sendSuccess(res, experience, 'Experience records retrieved successfully');
  } catch (error) {
    logger.error('Error getting experience records:', error);
    next(error);
  }
};

// Get experience record by ID
export const getExperienceById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const experience = await Experience.findById(id);
    
    if (!experience) {
      sendNotFound(res, 'Experience record not found');
      return;
    }
    
    sendSuccess(res, experience, 'Experience record retrieved successfully');
  } catch (error) {
    logger.error('Error getting experience record:', error);
    next(error);
  }
};

// Create new experience record
export const createExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const experienceData: IExperience = req.body;
    const experience = new Experience(experienceData);
    const savedExperience = await experience.save();
    
    sendSuccess(res, savedExperience, 'Experience record created successfully', 201);
  } catch (error) {
    logger.error('Error creating experience record:', error);
    next(error);
  }
};

// Update experience record
export const updateExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const experience = await Experience.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!experience) {
      sendNotFound(res, 'Experience record not found');
      return;
    }
    
    sendSuccess(res, experience, 'Experience record updated successfully');
  } catch (error) {
    logger.error('Error updating experience record:', error);
    next(error);
  }
};

// Delete experience record
export const deleteExperience = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const experience = await Experience.findByIdAndDelete(id);
    
    if (!experience) {
      sendNotFound(res, 'Experience record not found');
      return;
    }
    
    sendSuccess(res, null, 'Experience record deleted successfully');
  } catch (error) {
    logger.error('Error deleting experience record:', error);
    next(error);
  }
};
