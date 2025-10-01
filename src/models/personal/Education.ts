import mongoose, { Document, Schema } from 'mongoose';
import { IEducation, Marksheet } from '../../types/global';

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
  percentage: {
    type: Number,
    min: [0, 'Percentage cannot be negative'],
    max: [100, 'Percentage cannot be more than 100']
  },
  cgpa: {
    type: Number,
    min: [0, 'CGPA cannot be negative'],
    max: [10, 'CGPA cannot be more than 10']
  },
  marksheets: {
    type: [{
      title: {
        type: String,
        required: [true, 'Marksheet title is required'],
        trim: true,
        maxlength: [200, 'Marksheet title cannot be more than 200 characters']
      },
      url: {
        type: String,
        required: [true, 'Marksheet URL is required'],
        trim: true,
        match: [/^https?:\/\/.+/, 'Please enter a valid URL']
      },
      description: {
        type: String,
        trim: true,
        maxlength: [500, 'Description cannot be more than 500 characters']
      }
    }],
    default: []
  }
}, {
  timestamps: true,
  versionKey: false
});

// Create and export the model
export default mongoose.model('Education', educationSchema);
