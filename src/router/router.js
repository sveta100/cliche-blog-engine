import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PostEditor from '../views/PostEditor.vue';
import About from '../views/About.vue';
import BlogPost from '../views/BlogPost.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Articles',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/post-editor',
		name: 'Post Editor',
		component: PostEditor,
	},
	{
		path: '/edit-post/:postId',
		name: 'Edit post',
		component: PostEditor,
	},
	{
		path: '/post/:postId',
		name: 'Blog post',
		component: BlogPost,
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
