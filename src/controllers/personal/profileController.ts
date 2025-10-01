import { Request, Response, NextFunction } from 'express';
import { Personal } from '../../models/personal';
import { IPersonal } from '../../types/global';
import { sendSuccess, sendError, sendNotFound } from '../../utils/apiResponse';
import logger from '../../config/logger';

// Get all personal profiles
export const getAllPersonal = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const personal = await Personal.find();
    
    sendSuccess(res, personal, 'Personal profiles retrieved successfully');
  } catch (error) {
    logger.error('Error getting personal profiles:', error);
    next(error);
  }
};

// Get personal profile by ID
export const getPersonalById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const personal = await Personal.findById(id);
    
    if (!personal) {
      sendNotFound(res, 'Personal profile not found');
      return;
    }
    
    sendSuccess(res, personal, 'Personal profile retrieved successfully');
  } catch (error) {
    logger.error('Error getting personal profile:', error);
    next(error);
  }
};

// Create new personal profile
export const createPersonal = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const personalData: IPersonal = req.body;
    const personal = new Personal(personalData);
    const savedPersonal = await personal.save();
    
    sendSuccess(res, savedPersonal, 'Personal profile created successfully', 201);
  } catch (error) {
    logger.error('Error creating personal profile:', error);
    next(error);
  }
};

// Update personal profile
export const updatePersonal = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const personal = await Personal.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!personal) {
      sendNotFound(res, 'Personal profile not found');
      return;
    }
    
    sendSuccess(res, personal, 'Personal profile updated successfully');
  } catch (error) {
    logger.error('Error updating personal profile:', error);
    next(error);
  }
};

// Delete personal profile
export const deletePersonal = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const personal = await Personal.findByIdAndDelete(id);
    
    if (!personal) {
      sendNotFound(res, 'Personal profile not found');
      return;
    }
    
    sendSuccess(res, null, 'Personal profile deleted successfully');
  } catch (error) {
    logger.error('Error deleting personal profile:', error);
    next(error);
  }
};
