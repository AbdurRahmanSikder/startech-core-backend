import mongoose from "mongoose";

const { Schema } = mongoose;

const notificationSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      enum: ["order", "promotion", "system"],
    },
    title: {
      type: String,
    },
    message: {
      type: String,
    },
    isRead: Boolean,
    link: String,
  },
  { timestamps: true },
);

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
