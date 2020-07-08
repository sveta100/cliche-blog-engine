import axios from 'axios';
import handleAsyncResult from './asyncResHandler';
import * as config from './config';

export default {
  async getTags() {
    const [error, res] = await handleAsyncResult(
      axios.get(`${config.API_URL}/api/tags`),
    );
    if (res) {
      return res.data;
    }
    throw `${error}error while getting tags`();
  },
  async addOrUpdateTag(tag) {
    const [error, res] = await handleAsyncResult(
      axios.post(`${config.API_URL}/api/tags`, tag),
    );
    if (res) {
      return res.data;
    }
    throw `${error}error while updating tags`();
  },
  async deleteTag(tagId) {
    const [error, res] = await handleAsyncResult(
      axios.delete(`${config.API_URL}/api/tags?=${tagId}`),
    );
    if (res) {
      return res.data;
    }
    throw `${error}error while deleting a tag`();
  },
};
