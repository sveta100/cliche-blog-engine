import axios from 'axios';

export default {
  async getTags() {
    const res = await axios
      .get('http://localhost:4000/api/tags')
      .catch((error) => {
        console.log(`${error}error while getting tags`);
      });
    return res.data;
  },
  async addOrUpdateTag(tag) {
    const res = await axios
      .post('http://localhost:4000/api/tags', tag)
      .catch((error) => {
        console.log(`${error} error while updating a tag`);
      });
    return res.data;
  },
  async deleteTag(tagId) {
    const res = axios
      .delete(`http://localhost:4000/api/tags?=${tagId}`)
      .catch((error) => {
        console.log(`${error} error while deleting a tag`);
      });
    return res.data;
  },
};
