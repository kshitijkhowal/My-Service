"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExperience = exports.updateExperience = exports.createExperience = exports.getExperienceById = exports.getAllExperience = void 0;
const Experience_1 = __importDefault(require("../../models/Experience"));
const apiResponse_1 = require("../../utils/apiResponse");
const logger_1 = __importDefault(require("../../config/logger"));
// Get all experience records
const getAllExperience = async (req, res, next) => {
    try {
        const experience = await Experience_1.default.find().sort({ createdAt: -1 });
        (0, apiResponse_1.sendSuccess)(res, experience, 'Experience records retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting experience records:', error);
        next(error);
    }
};
exports.getAllExperience = getAllExperience;
// Get experience record by ID
const getExperienceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const experience = await Experience_1.default.findById(id);
        if (!experience) {
            (0, apiResponse_1.sendNotFound)(res, 'Experience record not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, experience, 'Experience record retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting experience record:', error);
        next(error);
    }
};
exports.getExperienceById = getExperienceById;
// Create new experience record
const createExperience = async (req, res, next) => {
    try {
        const experienceData = req.body;
        const experience = new Experience_1.default(experienceData);
        const savedExperience = await experience.save();
        (0, apiResponse_1.sendSuccess)(res, savedExperience, 'Experience record created successfully', 201);
    }
    catch (error) {
        logger_1.default.error('Error creating experience record:', error);
        next(error);
    }
};
exports.createExperience = createExperience;
// Update experience record
const updateExperience = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const experience = await Experience_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!experience) {
            (0, apiResponse_1.sendNotFound)(res, 'Experience record not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, experience, 'Experience record updated successfully');
    }
    catch (error) {
        logger_1.default.error('Error updating experience record:', error);
        next(error);
    }
};
exports.updateExperience = updateExperience;
// Delete experience record
const deleteExperience = async (req, res, next) => {
    try {
        const { id } = req.params;
        const experience = await Experience_1.default.findByIdAndDelete(id);
        if (!experience) {
            (0, apiResponse_1.sendNotFound)(res, 'Experience record not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, null, 'Experience record deleted successfully');
    }
    catch (error) {
        logger_1.default.error('Error deleting experience record:', error);
        next(error);
    }
};
exports.deleteExperience = deleteExperience;
