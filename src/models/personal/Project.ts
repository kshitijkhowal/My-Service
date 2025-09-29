import mongoose, { Document, Schema } from 'mongoose';
import { IProject } from '../../types/global';

// Project schema
const projectSchema = new Schema<IProject>({
  name: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true,
    maxlength: [100, 'Project name cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  techStack: [{
    type: String,
    required: [true, 'Tech stack item is required'],
    trim: true,
    maxlength: [50, 'Tech stack item cannot be more than 50 characters']
  }],
  link: {
    type: String,
    required: [true, 'Link is required'],
    trim: true,
    match: [/^https?:\/\/.+/, 'Please enter a valid URL']
  }
}, {
  timestamps: true,
  versionKey: false
});

// Create and export the model
export default mongoose.model('Project', projectSchema);
