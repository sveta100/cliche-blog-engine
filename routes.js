import PostCtrl from './controllers/postController';

export default function routes(app) {
	app.route('/api/posts').post(PostCtrl.create_a_post);
	app.route('/api/posts/:id').get(PostCtrl.get_a_post);
	app.route('/api/posts').get(PostCtrl.list_all_posts);
	app.route('/api/posts?published=true').get(PostCtrl.list_all_published_posts);
	app.route('/api/posts/:id').delete(PostCtrl.delete_a_post);
}
