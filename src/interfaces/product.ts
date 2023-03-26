import { Document } from "mongoose";

export interface IProduct extends Document {
  user_id: String,
  category: String,
  title: String,
  like:Boolean,
  dislike:Boolean
}
