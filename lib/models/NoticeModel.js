import mongoose from "mongoose";

const NoticeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // <- sem ()
  },
});

// Evita recriar model em hot reload do Next.js
const NoticeModel = mongoose.models.Notice || mongoose.model("Notice", NoticeSchema);

export default NoticeModel;
