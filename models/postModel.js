import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: String,
    tags: [String],
    content: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
