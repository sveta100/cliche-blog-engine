import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		title: String,
		tags: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tag' }],
		content: String,
		summary: String,
		isDraft: Boolean,
		postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
