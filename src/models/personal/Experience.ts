import mongoose, { Document, Schema } from 'mongoose';
import { IExperience } from '../../types/global';

// Experience schema
const experienceSchema = new Schema<IExperience>({
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
  startDate: {
    type: Date,
    required: [true, 'Start date is required'],
    validate: {
      validator: function(value: Date) {
        return value <= new Date();
      },
      message: 'Start date cannot be in the future'
    }
  },
  endDate: {
    type: Date,
    validate: {
      validator: function(value: Date) {
        if (!value) return true; // Optional field
        return value <= new Date() && value >= this.startDate;
      },
      message: 'End date must be after start date and cannot be in the future'
    }
  },
  duration: {
    type: String,
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
export default mongoose.model('Experience', experienceSchema);
