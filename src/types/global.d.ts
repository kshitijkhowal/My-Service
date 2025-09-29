import { Request } from 'express';

// Extend Express Request interface
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Social media links interface
export interface SocialLinks {
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
}

// Personal profile interface
export interface IPersonal {
  _id?: string;
  name: string;
  bio: string;
  email: string;
  socials: SocialLinks;
  createdAt?: Date;
  updatedAt?: Date;
}

// Education interface
export interface IEducation {
  _id?: string;
  degree: string;
  school: string;
  year: number;
  cgpa: number;
  createdAt?: Date;
  updatedAt?: Date;
}

// Experience interface
export interface IExperience {
  _id?: string;
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Project interface
export interface IProject {
  _id?: string;
  name: string;
  description: string;
  techStack: string[];
  link: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Certificate interface
export interface ICertificate {
  _id?: string;
  title: string;
  issuer: string;
  year: number;
  link: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Custom error interface
export interface CustomError extends Error {
  statusCode?: number;
  isOperational?: boolean;
}

export {};
