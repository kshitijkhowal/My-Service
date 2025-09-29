import mongoose, { Document, Schema } from 'mongoose';
import { IPersonal, SocialLinks } from '../../types/global';

// Social links schema
const socialLinksSchema = new Schema<SocialLinks>({
  linkedin: { type: String },
  github: { type: String },
  twitter: { type: String },
  website: { type: String },
}, { _id: false });

// Personal schema
const personalSchema = new Schema<IPersonal>({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  bio: {
    type: String,
    required: [true, 'Bio is required'],
    trim: true,
    maxlength: [500, 'Bio cannot be more than 500 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  socials: {
    type: socialLinksSchema,
    default: {}
  }
}, {
  timestamps: true,
  versionKey: false
});

// Create and export the model
export default mongoose.model('Personal', personalSchema);
