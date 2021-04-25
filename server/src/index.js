import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js';
import { CONNECTION_URL } from './connection/index.js';

/* Determine port */
const PORT = process.env.PORT || 5000;

/* Creating Express app */
const app = express();

/* Applying middleware */
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

/* Using routes */
app.use('/posts', postRoutes);

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch(err => console.error(err.message));

mongoose.set('useFindAndModify', false);
