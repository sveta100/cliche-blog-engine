import mongoose from "mongoose";
import Post from "../models/postModel";
import postService from "../services/postService";

exports.list_all_posts = (req, res) => {
  res.send("listing posts");
};

exports.create_a_post = (req, res) => {
  const newPost = new Post(req.body);
  console.log("about to create a post");
  newPost
    .save()
    .then(post => {
      res.send("new post saved to database");
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
};
