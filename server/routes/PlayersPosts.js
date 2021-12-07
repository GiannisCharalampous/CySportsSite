import {
    createPlayerPost,
    deletePlayerPost,
    getPlayerPost,
    getPlayerPostsByPosition,
    getPlayersPosts,
    updatePlayerPost
} from "../controllers/PlayerPosts.js";

import auth from "../middleware/auth.js";
import express from "express";

const router = express.Router();

router.get('/position', getPlayerPostsByPosition);
router.get('/', getPlayersPosts);
router.get('/:id', getPlayerPost);

router.post('/', auth, createPlayerPost);
router.patch('/:id', auth, updatePlayerPost);
router.delete('/:id', auth, deletePlayerPost);

export default router;