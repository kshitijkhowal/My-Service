"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../../controllers/personal");
const router = (0, express_1.Router)();
// Certificate routes
router.route('/')
    .get(personal_1.getAllCertificates)
    .post(personal_1.createCertificate);
router.route('/:id')
    .get(personal_1.getCertificateById)
    .put(personal_1.updateCertificate)
    .delete(personal_1.deleteCertificate);
exports.default = router;
