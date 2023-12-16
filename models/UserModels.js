import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      default: 0,
    },
  });
const Product =  mongoose.model("Product", ProductSchema);
export default Product