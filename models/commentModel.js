import monggose from "mongoose";

const CommentSchema = new monggose.Schema(
  {
    comment: String,
    user: { name: String, email: String },
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post" }
  },
  { timestamps: true }
);

module.exports = monggose.model("comment", CommentSchema);
