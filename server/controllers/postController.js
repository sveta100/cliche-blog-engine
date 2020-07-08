import Post from '../models/postModel';

exports.list_all_published_posts = (req, res) => {
  Post.find({ isDraft: false }, (err, posts) => {
    if (err) console.log(err, posts);
    res.send(posts);
  })
    .sort({ createdAt: -1 })
    .limit(3 * 1)
    .skip((1 - 1) * 3)
    .populate('tags');
};

exports.list_all_posts = (req, res) => {
  Post.find((err, posts) => {
    if (err) console.error(err);
    return res.send(posts);
  })
    .sort({ createdAt: -1 })
    .skip((1 - 1) * 3)
    .limit(3 * 1)
    .populate('tags');
};

exports.add_or_update_post = (req, res) => {
  const postModel = new Post(req.body);
  // eslint-disable-next-line no-underscore-dangle
  Post.findOneAndUpdate(
    { _id: postModel._id },
    postModel,
    { new: true, upsert: true },
    (err, post) => {
      if (err) console.error(err);
      console.log(
        `${post.title} added your great post to the collection.`,
      );
      res.send(post);
    },
  );
};

exports.get_a_post = (req, res) => {
  const { id } = req.params;
  Post.findById({ _id: id }, (err, post) => {
    if (err) console.error(err);
    console.log(
      `${post.title} found your great post.`,
    );
    res.send(post);
  }).populate('tags');
};

exports.get_next_post = (req, res) => {
  const { date } = req.params;
  Post.find({ isDraft: false, createdAt: { $gt: date } }, (err, post) => {
    if (err) console.error(err);
    console.log(post);
    res.send(post);
  }).sort({ createdAt: 1 }).limit(1).populate('tags');
};

exports.get_prev_post = (req, res) => {
  const { date } = req.params;
  Post.find({ isDraft: false, createdAt: { $lt: date } }, (err, post) => {
    if (err) console.error(err);

    res.send(post);
  }).sort({ createdAt: -1 }).limit(1).populate('tags');
};

exports.delete_a_post = (req, res) => {
  const { id } = req.params;
  Post.deleteOne({ _id: id }, (err, post) => {
    if (err) console.error(err);
    res.send(post);
  });
};
