import Tag from '../models/tagModel';

exports.get_all_tags = (req, res) => {
	Tag.find((err, tags) => {
		if (err)console.log(err, tags);
		return res.send(tags);
	}).sort({ name: -1 });
};


exports.add_or_update_a_tag = (req, res) => {
	const tagModel = new Tag(req.body);
	console.log(tagModel);
	// eslint-disable-next-line no-underscore-dangle
	Tag.findOneAndUpdate({ _id: tagModel._id }, tagModel, { new: true, upsert: true },
		(err, tag) => {
			if (err) console.error(err);
			console.log(`${tag.name} added your tag to the collection.`);
			res.send(tag);
		});
};
