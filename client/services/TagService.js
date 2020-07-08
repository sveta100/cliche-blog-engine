import axios from 'axios';
import handleAsyncResult from './asyncResHandler';
import * as config from './config';

export default {
  async getTags() {
    const [error, res] = await handleAsyncResult(axios
      .get(`http://localhost:${config.PORT}/api/tags`));
    if (res) { return res.data; }
    throw `${error}error while getting tags`();
  },
  async addOrUpdateTag(tag) {
    const [error, res] = await handleAsyncResult(axios
      .post(`http://localhost:${config.PORT}/api/tags`, tag));
    if (res) { return res.data; }
    throw `${error}error while updating tags`();
  },
  async deleteTag(tagId) {
    const [error, res] = await handleAsyncResult(axios
      .delete(`http://localhost:${config.PORT}/api/tags?=${tagId}`));
    if (res) { return res.data; }
    throw `${error}error while deleting a tag`();
  },
};
