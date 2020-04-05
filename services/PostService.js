import axios from 'axios';

export default {
	async getPosts() {
		console.log('coming here');
		const res = await axios.get('http://localhost:4000/api/posts');
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
};
