import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';
import history from 'connect-history-api-fallback';
import dbconfig from './config/db.config';
import devServer from './build/dev-server';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
const indexHTML = (() => fs.readFileSync(path.resolve(__dirname, './public/index.html'), 'utf-8'))();

// Select which directories or files under public can be served to users
app.use('/dist', express.static(path.resolve(__dirname, './dist')));

routes(app);
devServer(app);

const port = process.env.PORT || 4000;

app.get('*', (req, res) => {
  res.write(indexHTML);
  res.end();
});

app.use(
  history({
    verbose: true,
  }),
);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

mongoose.connect(dbconfig.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', () => {
  console.log('Connected to the db');
});
