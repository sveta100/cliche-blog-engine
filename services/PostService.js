import { HTTP } from "../api/apiBase";
import axios from "axios";

export default {
  getPosts() {
    axios
      .get("http://localhost:4000/api/posts")
      .then(res => {
        return "server data";
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  createBlogPost(post) {
    axios.post("http://localhost:4000/api/post", post).then(res => {
      console.log("posted");
      return res.data;
    });
  }
};
