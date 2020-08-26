import mongoose from 'mongoose';

const NotificationSchema = new mongoose.Schema(
  {
    header: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      required: true,
      default: false,
    },
    viewed: {
      type: Boolean,
      required: true,
      default: false,
    },
    viewedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: false,
  }
);

export default mongoose.model('Notification', NotificationSchema);