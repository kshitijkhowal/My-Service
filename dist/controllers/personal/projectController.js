"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjectById = exports.getAllProjects = void 0;
const Project_1 = __importDefault(require("../../models/Project"));
const apiResponse_1 = require("../../utils/apiResponse");
const logger_1 = __importDefault(require("../../config/logger"));
// Get all projects
const getAllProjects = async (req, res, next) => {
    try {
        const projects = await Project_1.default.find().sort({ createdAt: -1 });
        (0, apiResponse_1.sendSuccess)(res, projects, 'Projects retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting projects:', error);
        next(error);
    }
};
exports.getAllProjects = getAllProjects;
// Get project by ID
const getProjectById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const project = await Project_1.default.findById(id);
        if (!project) {
            (0, apiResponse_1.sendNotFound)(res, 'Project not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, project, 'Project retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting project:', error);
        next(error);
    }
};
exports.getProjectById = getProjectById;
// Create new project
const createProject = async (req, res, next) => {
    try {
        const projectData = req.body;
        const project = new Project_1.default(projectData);
        const savedProject = await project.save();
        (0, apiResponse_1.sendSuccess)(res, savedProject, 'Project created successfully', 201);
    }
    catch (error) {
        logger_1.default.error('Error creating project:', error);
        next(error);
    }
};
exports.createProject = createProject;
// Update project
const updateProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const project = await Project_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!project) {
            (0, apiResponse_1.sendNotFound)(res, 'Project not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, project, 'Project updated successfully');
    }
    catch (error) {
        logger_1.default.error('Error updating project:', error);
        next(error);
    }
};
exports.updateProject = updateProject;
// Delete project
const deleteProject = async (req, res, next) => {
    try {
        const { id } = req.params;
        const project = await Project_1.default.findByIdAndDelete(id);
        if (!project) {
            (0, apiResponse_1.sendNotFound)(res, 'Project not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, null, 'Project deleted successfully');
    }
    catch (error) {
        logger_1.default.error('Error deleting project:', error);
        next(error);
    }
};
exports.deleteProject = deleteProject;
