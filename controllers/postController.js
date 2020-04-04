import Post from "../models/postModel";
import mongoose from "mongoose";

exports.list_all_published_posts = (req, res) => {
  Post.find({ isDraft: false }, (err, posts) => {
    if (err) return console.log(err, posts);
    res.send(posts);
  });
};

exports.list_all_posts = (req, res) => {
  Post.find({ isDraft: false }, function(err, posts) {
    if (err) return console.error(err);
    res.send(posts);
  });
};

exports.create_a_post = (req, res) => {
  const newPost = new Post(req.body);
  newPost.save(function(err, post) {
    if (err) return console.error(err);
    console.log(post.title + " added your great post to the collection.");
    res.send(post);
  });
};
