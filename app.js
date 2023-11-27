import express from 'express';
import { join } from 'path';
import 'dotenv/config';
import connectDB from './db/connectiondb.js';
const app = express();
const port = process.env.PORT || '3000';
const DATABASE_URL = process.env.MONGO_URI;
import web from './routes/web.js';

// console.log(connectDB());

// Database Connection
connectDB();

// middleware
app.use(express.urlencoded({ extended: false }));

// static files
app.use('/student', express.static(join(process.cwd(), 'public')));
app.use('/student/edit', express.static(join(process.cwd(), 'public')));

//set template engine
app.set('view engine', 'ejs');

// local routes
app.use('/student', web);

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
