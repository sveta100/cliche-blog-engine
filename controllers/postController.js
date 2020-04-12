import Post from '../models/postModel';

exports.list_all_published_posts = (req, res) => {
	Post.find({ isDraft: false }, (err, posts) => {
		if (err)console.log(err, posts);
		res.send(posts);
	}).sort({ createdAt: -1 });
};

exports.list_all_posts = (req, res) => {
	Post.find((err, posts) => {
		if (err)console.error(err);
		return res.send(posts);
	}).sort({ createdAt: -1 });
};

exports.create_a_post = (req, res) => {
	const newPost = new Post(req.body);
	newPost.save((err, post) => {
		if (err) console.error(err);
		console.log(`${post.title} added your great post to the collection.`);
		res.send(post);
	});
};

exports.get_a_post = (req, res) => {
	const { id } = req.params;
	Post.findById({ _id: id }, (err, post) => {
		if (err) console.error(err);
		console.log(`${post.title} found your great post.`);
		res.send(post);
	});
};

exports.delete_a_post = (req, res) => {
	const { id } = req.params;
	Post.deleteOne({ _id: id }, (err, post) => {
		if (err) console.error(err);
		res.send(post);
	});
};
