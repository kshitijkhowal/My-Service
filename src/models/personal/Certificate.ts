import mongoose, { Document, Schema } from 'mongoose';
import { ICertificate } from '../../types/global';

// Certificate schema
const certificateSchema = new Schema<ICertificate>({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  issuer: {
    type: String,
    required: [true, 'Issuer is required'],
    trim: true,
    maxlength: [200, 'Issuer name cannot be more than 200 characters']
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1900, 'Year must be after 1900'],
    max: [new Date().getFullYear(), 'Year cannot be in the future']
  },
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
export default mongoose.model('Certificate', certificateSchema);
