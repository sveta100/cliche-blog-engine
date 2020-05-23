import axios from 'axios';

export default {
  async getPosts() {
    const res = await axios
      .get('http://localhost:4000/api/posts')
      .catch((error) => {
        console.log(`${error}error while getting posts`);
      });
    return res.data;
  },
  async getPost(postId) {
    const res = await axios
      .get(`http://localhost:4000/api/posts/${postId}`)
      .catch((error) => {
        console.log(`${error} error while getting a post`);
      });
    return res.data;
  },
  async getPublishedPosts() {
    const res = await axios
      .get('http://localhost:4000/api/posts?published=true')
      .catch((error) => {
        console.log(`${error} error while getting posts`);
      });
    return res.data;
  },
  async addOrUpdatePost(post) {
    const res = axios
      .post('http://localhost:4000/api/posts', post)
      .catch((error) => {
        console.log(`${error} error while updating a post`);
      });
    return res.data;
  },
  async deleteBlogPost(postId) {
    const res = axios
      .delete(`http://localhost:4000/api/posts/${postId}`)
      .catch((error) => {
        console.log(`${error} error while deleting a post`);
      });
    return res.data;
  },
};
