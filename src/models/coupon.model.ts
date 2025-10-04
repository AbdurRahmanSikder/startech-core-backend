import mongoose from "mongoose";
const { Schema } = mongoose;

const couponSchema = new Schema(
  {
    code: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    discountType: {
      enum: {
        type: String,
        values: ["percentage", "fixed"],
      },
    },
    discountValue: {
      type: Number,
    },
    minOrderValue: Number,
    maxDiscountAmount: Number,
    usageLimit: Number,
    usedCount: Number,
    validFrom: Date,
    validTo: Date,
    isActive: Boolean,
    applicableProducts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    applicableCategories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  { timestamps: true },
);

const Coupon = mongoose.model("Coupon", couponSchema);

export default Coupon;
