import { HTTP } from "../api/apiBase";
import axios from "axios";

export default {
  async getPosts() {
    let res = await axios.get(`http://localhost:4000/api/posts`);
    return res.data;
  },
  async createBlogPost(post) {
    console.log(post);
    let res = axios.post("http://localhost:4000/api/post", post);
    return res.data;
  }
};
