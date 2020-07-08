import axios from 'axios';
import handleAsyncResult from './asyncResHandler';
import * as config from './config';

export default {
  async getPosts() {
    const [error, res] = await handleAsyncResult(
      axios.get(`${config.API_URL}/api/posts`),
    );
    if (res) {
      return res.data;
    }
    throw `${error} Error occurred while getting posts`();
  },
  async getPost(postId) {
    const [error, res] = await handleAsyncResult(
      axios.get(`${config.API_URL}/api/posts/${postId}`),
    );

    if (res) {
      return res.data;
    }
    throw `${error} Error occurred while getting post`();
  },
  async getPublishedPosts() {
    console.log(config.API_URL);
    const [error, res] = await handleAsyncResult(
      axios.get(`${config.API_URL}/api/posts?published=true`),
    );
    if (res) {
      return res.data;
    }
    throw `${error} Error occurred while getting post`();
  },
  async addOrUpdatePost(post) {
    const [error, res] = await handleAsyncResult(
      axios.post(`${config.API_URL}/api/posts`, post),
    );
    if (res) {
      return res.data;
    }
    throw `${error} error while updating a post`();
  },
  async deleteBlogPost(postId) {
    const [error, res] = await handleAsyncResult(
      axios.delete(`${config.API_URL}/api/posts/${postId}`),
    );
    if (res) {
      return res.data;
    }
    throw `${error} error while deleting a post`();
  },

  async getNextPost(date) {
    const [error, res] = await handleAsyncResult(
      axios.get(`${config.API_URL}/api/posts/sort=gt/${date}`),
    );
    if (res) {
      return res.data;
    }
    throw `${error} error while getting next post`();
  },
  async getPrevPost(date) {
    const [error, res] = await handleAsyncResult(
      axios.get(`${config.API_URL}/api/posts/sort=lt/${date}`),
    );
    if (res) {
      return res.data;
    }
    throw `${error} error while getting previous post`();
  },
};
