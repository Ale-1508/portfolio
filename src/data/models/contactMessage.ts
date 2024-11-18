import mongoose, { Schema, Document, Model } from 'mongoose'; 

interface ContactMessageDocument extends Document { 
  name: string; 
  email: string; 
  phoneNumber: string; 
  message: string;
} 

const ContactMessageSchema: Schema = new Schema({ 
  fullName: { type: String, required: true }, 
  email: { type: String, required: true }, 
  phoneNumber: { type: String, required: true }, 
  message: { type:String, required: true},
}); 

const ContactMessage: Model<ContactMessageDocument> = 
  mongoose.models.ContactMessage || 
  mongoose.model<ContactMessageDocument>(
    'ContactMessage', 
    ContactMessageSchema, 
    'contactMessages'
  ); 

export default ContactMessage;