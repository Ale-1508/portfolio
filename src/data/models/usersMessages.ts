import mongoose, { Schema, Document, Model } from 'mongoose'; 

interface UserDocument extends Document { 
  name: string; 
  email: string; 
  phoneNumber: string; 
  message: string;
} 

const UserSchema: Schema = new Schema({ 
  fullName: { type: String, required: true }, 
  email: { type: String, required: true, unique: true }, 
  phoneNumber: { type: String, required: true, unique: true }, 
  message: { type:String, required: true},
}); 

const UserMessage: Model<UserDocument> = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema); 

export default UserMessage;