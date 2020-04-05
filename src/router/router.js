import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PostEditor from '../views/PostEditor.vue';
import About from '../views/About.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
	{
		path: '/addAmazingPost',
		name: 'New post',
		component: PostEditor,
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
