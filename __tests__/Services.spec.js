import PostService from '../services/PostService';

it('should return an array of posts', async () => {
	await PostService.getPublishedPosts().then((posts) => {
		expect(posts.length).toBeGreaterThan(0);
	});
});
