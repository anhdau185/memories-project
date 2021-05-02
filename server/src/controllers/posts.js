import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const queriedPosts = await PostMessage.find();
        res.status(200).json(queriedPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body);

    try {
        await newPost.save();
        res.status(201).json({
            message: 'Successfully created the post!',
            createdPost: newPost
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'No post with the given ID' });
    }

    try {
        const queriedPost = await PostMessage.findById(id);
        res.status(200).json(queriedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const post = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'No post with the given ID' });
    }

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });
        res.status(200).json({
            message: 'Successfully updated the post!',
            updatedPost
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'No post with the given ID' });
    }

    try {
        await PostMessage.findByIdAndRemove(id);
        res.status(204).json({ message: 'Successfully deleted the post!' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'No post with the given ID' });
    }

    try {
        const post = await PostMessage.findById(id);
        const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });

        res.status(200).json({
            message: 'Successfully updated the post!',
            updatedPost
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
