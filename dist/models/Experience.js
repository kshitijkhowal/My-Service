"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Experience schema
const experienceSchema = new mongoose_1.Schema({
    role: {
        type: String,
        required: [true, 'Role is required'],
        trim: true,
        maxlength: [100, 'Role cannot be more than 100 characters']
    },
    company: {
        type: String,
        required: [true, 'Company is required'],
        trim: true,
        maxlength: [200, 'Company name cannot be more than 200 characters']
    },
    duration: {
        type: String,
        required: [true, 'Duration is required'],
        trim: true,
        maxlength: [50, 'Duration cannot be more than 50 characters']
    },
    responsibilities: [{
            type: String,
            required: [true, 'Responsibility is required'],
            trim: true,
            maxlength: [500, 'Responsibility cannot be more than 500 characters']
        }]
}, {
    timestamps: true,
    versionKey: false
});
// Create and export the model
exports.default = mongoose_1.default.model('Experience', experienceSchema);
