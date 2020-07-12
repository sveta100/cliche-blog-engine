wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
docker login --username=$HEROKU_USER --password=$HEROKU_APP_KEY registry.heroku.com
docker tag svetab/vue-blog-client registry.heroku.com/cliche-blog-app/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web
docker tag svetab/vue-blog-nginx registry.heroku.com/cliche-blog-app/nginx
docker push registry.heroku.com/$HEROKU_APP_NAME/nginx
docker tag svetab/vue-blog-server registry.heroku.com/cliche-blog-app/server
docker push registry.heroku.com/$HEROKU_APP_NAME/server
heroku container:release web nginx server -a $HEROKU_APP_NAME .
