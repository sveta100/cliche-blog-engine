import axios from 'axios';

export default {
	async getPosts() {
		const res = await axios.get('http://localhost:4000/api/posts');
		return res.data;
	},
	async getPost(postId) {
		const res = await axios.get(`http://localhost:4000/api/posts/${postId}`);
		return res.data;
	},
	async getPublishedPosts() {
		const res = await axios.get('http://localhost:4000/api/posts?published=true');
		return res.data;
	},
	async createBlogPost(post) {
		console.log(post);
		const res = axios.post('http://localhost:4000/api/posts', post);
		return res.data;
	},
	async deleteBlogPost(postId) {
		const res = axios.delete(`http://localhost:4000/api/posts/${postId}`);
		return res.data;
	},
};
