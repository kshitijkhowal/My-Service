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

export interface SocialLink {
  platform?: string;
  url?: string;
}

export interface ResumeLink {
  title?: string;
  url?: string;
}

export interface Marksheet {
  title: string;
  url: string;
  description?: string;
}

// Personal profile interface
export interface IPersonal {
  _id?: string;
  name: string;
  bio: string;
  email: string;
  phone?: string;
  socials: SocialLink[];
  resumeLinks: ResumeLink[];
  createdAt?: Date;
  updatedAt?: Date;
}

// Education interface
export interface IEducation {
  _id?: string;
  degree: string;
  school: string;
  startDate: Date;
  endDate?: Date;
  percentage?: number;
  cgpa?: number;
  marksheets: Marksheet[];
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
  date: Date;
  description?: string;
  credentials?: string;
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
