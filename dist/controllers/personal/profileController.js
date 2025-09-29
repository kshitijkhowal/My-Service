"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonal = exports.updatePersonal = exports.createPersonal = exports.getPersonalById = exports.getAllPersonal = void 0;
const Personal_1 = __importDefault(require("../../models/Personal"));
const apiResponse_1 = require("../../utils/apiResponse");
const logger_1 = __importDefault(require("../../config/logger"));
// Get all personal profiles
const getAllPersonal = async (req, res, next) => {
    try {
        const personal = await Personal_1.default.find();
        (0, apiResponse_1.sendSuccess)(res, personal, 'Personal profiles retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting personal profiles:', error);
        next(error);
    }
};
exports.getAllPersonal = getAllPersonal;
// Get personal profile by ID
const getPersonalById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const personal = await Personal_1.default.findById(id);
        if (!personal) {
            (0, apiResponse_1.sendNotFound)(res, 'Personal profile not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, personal, 'Personal profile retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting personal profile:', error);
        next(error);
    }
};
exports.getPersonalById = getPersonalById;
// Create new personal profile
const createPersonal = async (req, res, next) => {
    try {
        const personalData = req.body;
        const personal = new Personal_1.default(personalData);
        const savedPersonal = await personal.save();
        (0, apiResponse_1.sendSuccess)(res, savedPersonal, 'Personal profile created successfully', 201);
    }
    catch (error) {
        logger_1.default.error('Error creating personal profile:', error);
        next(error);
    }
};
exports.createPersonal = createPersonal;
// Update personal profile
const updatePersonal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const personal = await Personal_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!personal) {
            (0, apiResponse_1.sendNotFound)(res, 'Personal profile not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, personal, 'Personal profile updated successfully');
    }
    catch (error) {
        logger_1.default.error('Error updating personal profile:', error);
        next(error);
    }
};
exports.updatePersonal = updatePersonal;
// Delete personal profile
const deletePersonal = async (req, res, next) => {
    try {
        const { id } = req.params;
        const personal = await Personal_1.default.findByIdAndDelete(id);
        if (!personal) {
            (0, apiResponse_1.sendNotFound)(res, 'Personal profile not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, null, 'Personal profile deleted successfully');
    }
    catch (error) {
        logger_1.default.error('Error deleting personal profile:', error);
        next(error);
    }
};
exports.deletePersonal = deletePersonal;
