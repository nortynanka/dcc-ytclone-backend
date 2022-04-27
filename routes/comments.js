const express = require("express");
const router = express.Router();
const { Comment, validateComment } = require("../models/comment");
const { Reply, validateReply } = require("../models/reply");

// ! GET ALL COMMENTS (10 min)
// http://localhost:3003/api/comments
router.get("/", async (req, res) => {
    try {
        let comments = await Comment.find();
        if (!comments)
            return res.status(400).send(`No comments in this collection.`);
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send(`Internal Server Error: ${error}`);
    }
});


// ! GET A COMMENT BY ID (10 min)
// http://localhost:3003/api/comments/:id

// ! POST NEW COMMENT TO COMMENTS (20-30 min)
// http://localhost:3003/api/comments/

// ! UPDATE AN EXISTING LIKES / DISLIKES FOR COMMENT BY ID (20-30 min)
// http://localhost:3003/api/comments/:id

// ! DELETE A COMMENT BY ID (10 min)
// http://localhost:3003/api/comments/:id

// ! POST NEW REPLY TO COMMENT BY COMMENT ID (30-40 min)
// http://localhost:3003/api/comments/:commentid

module.exports = router;
