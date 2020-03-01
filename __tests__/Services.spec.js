import PostService from "../services/PostService";

test("should return an array of posts", async () => {
  await PostService.getPublishedPosts().then(posts => {
    expect(posts.length).toBeGreaterThan(0);
  });
});
