import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
	{
		comment: String,
		user: { name: String, email: String },
		postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
	},
	{ timestamps: true },
);

module.exports = mongoose.model('comment', CommentSchema);
