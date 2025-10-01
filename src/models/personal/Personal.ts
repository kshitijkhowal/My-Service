import mongoose, { Document, Schema } from 'mongoose';
import { IPersonal, SocialLink, ResumeLink } from '../../types/global';

const socialLinkSchema = new Schema<SocialLink>({
  platform: {
    type: String,
    required: [true, 'Platform is required'],
    trim: true
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    trim: true
  }
}, { _id: false });

const resumeLinkSchema = new Schema<ResumeLink>({
  title: {
    type: String,
    required: [true, 'Resume title is required'],
    trim: true
  },
  url: {
    type: String,
    required: [true, 'Resume URL is required'],
    trim: true
  }
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
  phone: {
    type: String,
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  socials: {
    type: [socialLinkSchema],
    default: []
  },
  resumeLinks: {
    type: [resumeLinkSchema],
    default: []
  }
}, {
  timestamps: true,
  versionKey: false
});

// Create and export the model
export default mongoose.model('Personal', personalSchema);
