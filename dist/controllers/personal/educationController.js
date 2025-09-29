"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEducation = exports.updateEducation = exports.createEducation = exports.getEducationById = exports.getAllEducation = void 0;
const Education_1 = __importDefault(require("../../models/Education"));
const apiResponse_1 = require("../../utils/apiResponse");
const logger_1 = __importDefault(require("../../config/logger"));
// Get all education records
const getAllEducation = async (req, res, next) => {
    try {
        const education = await Education_1.default.find().sort({ year: -1 });
        (0, apiResponse_1.sendSuccess)(res, education, 'Education records retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting education records:', error);
        next(error);
    }
};
exports.getAllEducation = getAllEducation;
// Get education record by ID
const getEducationById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const education = await Education_1.default.findById(id);
        if (!education) {
            (0, apiResponse_1.sendNotFound)(res, 'Education record not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, education, 'Education record retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting education record:', error);
        next(error);
    }
};
exports.getEducationById = getEducationById;
// Create new education record
const createEducation = async (req, res, next) => {
    try {
        const educationData = req.body;
        const education = new Education_1.default(educationData);
        const savedEducation = await education.save();
        (0, apiResponse_1.sendSuccess)(res, savedEducation, 'Education record created successfully', 201);
    }
    catch (error) {
        logger_1.default.error('Error creating education record:', error);
        next(error);
    }
};
exports.createEducation = createEducation;
// Update education record
const updateEducation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const education = await Education_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!education) {
            (0, apiResponse_1.sendNotFound)(res, 'Education record not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, education, 'Education record updated successfully');
    }
    catch (error) {
        logger_1.default.error('Error updating education record:', error);
        next(error);
    }
};
exports.updateEducation = updateEducation;
// Delete education record
const deleteEducation = async (req, res, next) => {
    try {
        const { id } = req.params;
        const education = await Education_1.default.findByIdAndDelete(id);
        if (!education) {
            (0, apiResponse_1.sendNotFound)(res, 'Education record not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, null, 'Education record deleted successfully');
    }
    catch (error) {
        logger_1.default.error('Error deleting education record:', error);
        next(error);
    }
};
exports.deleteEducation = deleteEducation;
