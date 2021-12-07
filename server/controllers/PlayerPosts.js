import mongoose from "mongoose";
import PlayersPostMessage from '../models/PlayersPostMessage.js';

export const getPlayersPosts = async (req, res) => {

    try {
        const playerPosts = await PlayersPostMessage.find().sort({ _id: -1 });
        res.status(200).json(playerPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPlayerPost = async (req, res) => {
    const { id } = req.params;

    try {
        const playerPost = await PlayersPostMessage.findById(id);

        res.status(200).json(playerPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPlayerPost = async (req, res) => {
    const playerPost = req.body;
    const newPlayerPost = new PlayersPostMessage({ ...playerPost, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPlayerPost.save();

        res.status(201).json(newPlayerPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePlayerPost = async (req, res) => {

    const { id } = req.params;
    const { creator, assists, points, age, skills, position, selectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPlayerPost = { creator, assists, points, age, skills, position, selectedFile, _id: id };

    await PlayersPostMessage.findByIdAndUpdate(id, updatedPlayerPost, { new: true });

    res.json(updatedPlayerPost);
}

export const deletePlayerPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PlayersPostMessage.findByIdAndRemove(id);

    res.json({ message: "Player Post deleted successfully." });
}

export const getPlayerPostsByPosition = async (req, res) => {
    const { position } = req.query;

    try {
        const playerPosts = await PlayersPostMessage.find({ position });

        res.json({ data: playerPosts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


