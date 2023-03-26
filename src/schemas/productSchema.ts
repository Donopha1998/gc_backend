import { Schema } from "mongoose";
import { dbConnect } from "./multiConnection";
var userDBConnection = dbConnect.getUserDBConnection();
var timestamps = require("mongoose-timestamp");

const productSchema: Schema = userDBConnection.Schema({
  user_id: String,
  category: String,
  title: String,
  like: Boolean,
  dislike: Boolean,
});
productSchema.plugin(timestamps);

const ProductModel = userDBConnection.model("product", productSchema);

export default ProductModel;
