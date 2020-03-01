export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: [{ title: "first post" }, { title: "second post" }]
    })
  )
};
