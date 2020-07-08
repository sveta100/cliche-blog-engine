import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dbconfig from './config/db.config';
import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
routes(app);
const port = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
  // Select which directories or files under public can be served to users
  app.use('/dist', express.static(path.resolve(__dirname, '/public/')));

  // Handle SPA
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '/public/index.html'));
  });
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

mongoose.connect(dbconfig.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.on('open', () => {
  console.log('Connected to the db');
});
