import mongoose from "mongoose";
const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    amount: {
      type: Number,
      require: true,
    },
    currency: {
      type: String,
    },
    paymentMethod: {
      enum: {
        type: String,
        values: ["card", "paypal", "cod"],
      },
    },
    transactionId: {
      type: String,
    },
    status: {
      enum: {
        type: String,
        values: ["pending", "completed", "failed"],
      },
    },
    paymentDetails: {
      cardLast4: String,
      paypalEmail: String,
      upiId: String,
      meta: {
        type: Schema.Types.Mixed,
      },
    },
  },
  { timestamps: true },
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
