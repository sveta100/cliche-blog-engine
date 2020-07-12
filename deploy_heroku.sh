wget -qO- https://toolbelt.heroku.com/install-ubuntu.sh | sh
heroku plugins:install @heroku-cli/plugin-container-registry
docker login --username _ --password=$HEROKU_API_KEY registry.heroku.com
heroku container:push svetab/vue-blog-client --app $HEROKU_APP_NAME
heroku container:release svetab/vue-blog-client --app $HEROKU_APP_NAME
heroku container:push svetab/vue-blog-nginx --app $HEROKU_APP_NAME
heroku container:release svetab/vue-blog-nginx --app $HEROKU_APP_NAME