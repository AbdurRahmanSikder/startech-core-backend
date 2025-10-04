import mongoose from "mongoose";

const { Schema } = mongoose;

const shippingSchema = new Schema(
  {
    name: String,
    description: String,
    rate: Number,
    estimateDays: Number,
    isActive: Boolean,
    minOrderValue: Number,
    maxOrderValue: Number,
    regions: [
      {
        type: String,
        enum: ["Dhaka", "Rajshahi", "Khulna", "Bogura"],
        require: true,
      },
    ],
  },
  { timestamps: true },
);

const Shipping = mongoose.model("Shipping", shippingSchema);

export default Shipping;
