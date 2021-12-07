import mongoose from "mongoose";
import FootballPlayersPostMessage from "../models/FootballPlayersPostMessage.js";

export const getPlayersPosts = async (req, res) => {

    try {
        const footballPlayerPosts = await FootballPlayersPostMessage.find().sort({ _id: -1 });
        res.status(200).json(footballPlayerPosts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPlayerPost = async (req, res) => {
    const { id } = req.params;

    try {
        const footballPlayerPost = await FootballPlayersPostMessage.findById(id);

        res.status(200).json(footballPlayerPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPlayerPost = async (req, res) => {
    const footballPlayerPost = req.body;
    const newPlayerPost = new FootballPlayersPostMessage({ ...footballPlayerPost, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newPlayerPost.save();

        res.status(201).json(newPlayerPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePlayerPost = async (req, res) => {

    const { id } = req.params;
    const { creator, assists, goal, age, skills, footballPosition, selectedFile } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPlayerPost = { creator, assists, goal, age, skills, footballPosition, selectedFile, _id: id };

    await FootballPlayersPostMessage.findByIdAndUpdate(id, updatedPlayerPost, { new: true });

    res.json(updatedPlayerPost);
}

export const deletePlayerPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await FootballPlayersPostMessage.findByIdAndRemove(id);

    res.json({ message: "Player Post deleted successfully." });
}

export const getPlayerPostsByPosition = async (req, res) => {
    const { footballPosition } = req.query;

    try {
        const footballPlayerPosts = await FootballPlayersPostMessage.find({ footballPosition });

        res.json({ data: footballPlayerPosts });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


