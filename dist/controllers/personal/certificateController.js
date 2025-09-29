"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCertificate = exports.updateCertificate = exports.createCertificate = exports.getCertificateById = exports.getAllCertificates = void 0;
const Certificate_1 = __importDefault(require("../../models/Certificate"));
const apiResponse_1 = require("../../utils/apiResponse");
const logger_1 = __importDefault(require("../../config/logger"));
// Get all certificates
const getAllCertificates = async (req, res, next) => {
    try {
        const certificates = await Certificate_1.default.find().sort({ year: -1 });
        (0, apiResponse_1.sendSuccess)(res, certificates, 'Certificates retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting certificates:', error);
        next(error);
    }
};
exports.getAllCertificates = getAllCertificates;
// Get certificate by ID
const getCertificateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const certificate = await Certificate_1.default.findById(id);
        if (!certificate) {
            (0, apiResponse_1.sendNotFound)(res, 'Certificate not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, certificate, 'Certificate retrieved successfully');
    }
    catch (error) {
        logger_1.default.error('Error getting certificate:', error);
        next(error);
    }
};
exports.getCertificateById = getCertificateById;
// Create new certificate
const createCertificate = async (req, res, next) => {
    try {
        const certificateData = req.body;
        const certificate = new Certificate_1.default(certificateData);
        const savedCertificate = await certificate.save();
        (0, apiResponse_1.sendSuccess)(res, savedCertificate, 'Certificate created successfully', 201);
    }
    catch (error) {
        logger_1.default.error('Error creating certificate:', error);
        next(error);
    }
};
exports.createCertificate = createCertificate;
// Update certificate
const updateCertificate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const certificate = await Certificate_1.default.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!certificate) {
            (0, apiResponse_1.sendNotFound)(res, 'Certificate not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, certificate, 'Certificate updated successfully');
    }
    catch (error) {
        logger_1.default.error('Error updating certificate:', error);
        next(error);
    }
};
exports.updateCertificate = updateCertificate;
// Delete certificate
const deleteCertificate = async (req, res, next) => {
    try {
        const { id } = req.params;
        const certificate = await Certificate_1.default.findByIdAndDelete(id);
        if (!certificate) {
            (0, apiResponse_1.sendNotFound)(res, 'Certificate not found');
            return;
        }
        (0, apiResponse_1.sendSuccess)(res, null, 'Certificate deleted successfully');
    }
    catch (error) {
        logger_1.default.error('Error deleting certificate:', error);
        next(error);
    }
};
exports.deleteCertificate = deleteCertificate;
