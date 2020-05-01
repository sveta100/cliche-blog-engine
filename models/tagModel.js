import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema(
	{
		name: String,
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Tag', TagSchema);
