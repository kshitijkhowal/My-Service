import mongoose, { Document, Schema } from 'mongoose';
import { IEducation } from '../../types/global';

// Education schema
const educationSchema = new Schema<IEducation>({
  degree: {
    type: String,
    required: [true, 'Degree is required'],
    trim: true,
    maxlength: [100, 'Degree cannot be more than 100 characters']
  },
  school: {
    type: String,
    required: [true, 'School is required'],
    trim: true,
    maxlength: [200, 'School name cannot be more than 200 characters']
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1900, 'Year must be after 1900'],
    max: [new Date().getFullYear() + 10, 'Year cannot be more than 10 years in the future']
  },
  cgpa: {
    type: Number,
    required: [true, 'CGPA is required'],
    min: [0, 'CGPA cannot be negative'],
    max: [10, 'CGPA cannot be more than 10']
  }
}, {
  timestamps: true,
  versionKey: false
});

// Create and export the model
export default mongoose.model('Education', educationSchema);
