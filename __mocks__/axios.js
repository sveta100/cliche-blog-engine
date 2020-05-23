export default {
  get: () => {
    Promise.resolve({
      data: [{ title: 'first post' }, { title: 'second post' }],
    });
  },
  deleteOne: () => {
    Promise.resolve({
      data: [{ title: 'first post' }, { title: 'second post' }],
    });
  },
};
