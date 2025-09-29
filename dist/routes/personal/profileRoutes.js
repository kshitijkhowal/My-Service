"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personal_1 = require("../../controllers/personal");
const router = (0, express_1.Router)();
// Profile routes
router.route('/')
    .get(personal_1.getAllPersonal)
    .post(personal_1.createPersonal);
router.route('/:id')
    .get(personal_1.getPersonalById)
    .put(personal_1.updatePersonal)
    .delete(personal_1.deletePersonal);
exports.default = router;
