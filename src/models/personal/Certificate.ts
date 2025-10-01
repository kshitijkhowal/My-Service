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
  date: {
    type: Date,
    required: [true, 'Date is required'],
    validate: {
      validator: function(value: Date) {
        return value <= new Date();
      },
      message: 'Date cannot be in the future'
    }
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  credentials: {
    type: String,
    trim: true,
    maxlength: [100, 'Credentials cannot be more than 100 characters']
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
