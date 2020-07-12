wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
docker login --username=_ --password=$HEROKU_APP_KEY registry.heroku.com
docker tag svetab/vue-blog-client registry.heroku.com/cliche-blog-app/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web
docker tag svetab/vue-blog-nginx registry.heroku.com/cliche-blog-app/nginx
docker push registry.heroku.com/$HEROKU_APP_NAME/nginx
docker tag svetab/vue-blog-server registry.heroku.com/cliche-blog-app/server
docker push registry.heroku.com/$HEROKU_APP_NAME/server
docker heroku container:release web --app $HEROKU_APP_NAME .
