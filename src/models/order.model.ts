import mongoose from "mongoose";
const { Schema } = mongoose;

const shippingAddressSchema = new Schema({
  name: String,
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
});

const orderSchema = new Schema(
  {
    orderNumber: {
      type: Number,
      require: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    items: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      variant: String,
      quantity: Number,
      price: Number,
      total: Number,
    },
    subtotal: Number,
    tax: Number,
    shippingCost: Number,
    discount: Number,
    total: Number,
    shippingAddress: shippingAddressSchema,
    billingAddressSchema: shippingAddressSchema,
    paymentMethod: {
      types: String,
      enum: {
        values: ["COD", "ONLINE", "OFFLINE"],
      },
    },
    paymentStatus: {
      types: String,
      enum: {
        values: ["pending", "processing", "shipping", "delivered", "cancelled"],
      },
    },
    trackingNumber: String,
    notes: String,
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
