import PostCtrl from './controllers/postController';
import TagCtrl from './controllers/tagController';

export default function routes(app) {
  app.route('/api/posts').post(PostCtrl.add_or_update_post);
  app.route('/api/posts/sort=gt/:date').get(PostCtrl.get_next_post);
  app.route('/api/posts/sort=lt/:date').get(PostCtrl.get_prev_post);
  app.route('/api/posts/:id').get(PostCtrl.get_a_post);

  app.route('/api/posts').get(PostCtrl.list_all_posts);
  app.route('/api/posts?published=true').get(PostCtrl.list_all_published_posts);
  app.route('/api/posts/:id').delete(PostCtrl.delete_a_post);

  app.route('/api/tags').get(TagCtrl.get_all_tags);
  app.route('/api/tags').post(TagCtrl.add_or_update_a_tag);
}
