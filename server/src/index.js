import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import postsRoutes from './routes/posts.js';

/* Load server configs */
dotenv.config();

/* Determine port */
const PORT = process.env.PORT || 5000;

/* Creating Express app */
const app = express();

/* Applying middleware */
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

/* Using routes */
app.use('/posts', postsRoutes);

/* Connect to MongoDB */
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch(err => console.error(err.message));

mongoose.set('useFindAndModify', false);
