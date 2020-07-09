import axios from 'axios';
import handleAsyncResult from './asyncResHandler';

export default {
  async getTags() {
    const [error, res] = await handleAsyncResult(axios.get('/api/tags'));
    if (res) {
      return res.data;
    }
    throw `${error}error while getting tags`();
  },
  async addOrUpdateTag(tag) {
    const [error, res] = await handleAsyncResult(axios.post('/api/tags', tag));
    if (res) {
      return res.data;
    }
    throw `${error}error while updating tags`();
  },
  async deleteTag(tagId) {
    const [error, res] = await handleAsyncResult(
      axios.delete(`/api/tags?=${tagId}`),
    );
    if (res) {
      return res.data;
    }
    throw `${error}error while deleting a tag`();
  },
};
