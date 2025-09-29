import { Request, Response, NextFunction } from 'express';
import { Project } from '../../models/personal';
import { IProject } from '../../types/global';
import { sendSuccess, sendError, sendNotFound } from '../../utils/apiResponse';
import logger from '../../config/logger';

// Get all projects
export const getAllProjects = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    sendSuccess(res, projects, 'Projects retrieved successfully');
  } catch (error) {
    logger.error('Error getting projects:', error);
    next(error);
  }
};

// Get project by ID
export const getProjectById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await Project.findById(id);
    
    if (!project) {
      sendNotFound(res, 'Project not found');
      return;
    }
    
    sendSuccess(res, project, 'Project retrieved successfully');
  } catch (error) {
    logger.error('Error getting project:', error);
    next(error);
  }
};

// Create new project
export const createProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const projectData: IProject = req.body;
    const project = new Project(projectData);
    const savedProject = await project.save();
    
    sendSuccess(res, savedProject, 'Project created successfully', 201);
  } catch (error) {
    logger.error('Error creating project:', error);
    next(error);
  }
};

// Update project
export const updateProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    const project = await Project.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      sendNotFound(res, 'Project not found');
      return;
    }
    
    sendSuccess(res, project, 'Project updated successfully');
  } catch (error) {
    logger.error('Error updating project:', error);
    next(error);
  }
};

// Delete project
export const deleteProject = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const project = await Project.findByIdAndDelete(id);
    
    if (!project) {
      sendNotFound(res, 'Project not found');
      return;
    }
    
    sendSuccess(res, null, 'Project deleted successfully');
  } catch (error) {
    logger.error('Error deleting project:', error);
    next(error);
  }
};
