import PostCtrl from "./controllers/postController";

export function routes(app) {
  app.route("/api/post").post(PostCtrl.create_a_post);
  app.route("/api/posts").get(PostCtrl.list_all_posts);
}
