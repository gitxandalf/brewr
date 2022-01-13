const express = require('express');
const asyncHandler = require('express-async-handler');

const { Album, User } = require("../../db/models")

const router = express.Router();

router.get('/', asyncHandler(async function (_req, res) {
    console.log("HELLO FROM API ROUTE FOR ALBUMS")
    const albums = await Album.findAll({
        order: [['updatedAt', 'DESC']],
        include: [{ model: User }],
    });
    return res.json(albums)
}))

module.exports = router;
