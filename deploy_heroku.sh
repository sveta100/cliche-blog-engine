wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
docker login --username=$HEROKU_USER --password=$HEROKU_APP_KEY registry.heroku.com
docker tag svetab/vue-blog-client registry.heroku.com/cliche-blog-app/web
docker push registry.heroku.com/$HEROKU_APP_NAME/web
