const Post = require("../models/postModel");
const mongoose = require("mongoose");

var schema = new mongoose.Schema({ name: "string", size: "string" });
var Tank = mongoose.model("Tank", schema);

exports.list_all_posts = (req, res) => {
  console.log("about to get a post");
  Post.find({}, function(err, posts) {
    if (err) return console.error(err);
    console.log(posts);
    res.send(posts);
  });
};

exports.create_a_post = (req, res) => {
  const newPost = new Post(req.body);
  newPost.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post.title + " added your great post to the collection.");
  });
};
