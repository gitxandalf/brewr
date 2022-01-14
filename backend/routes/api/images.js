const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator')
const { Image, User } = require("../../db/models")


const router = express.Router();

const checkPost = [
    check('imageUrl')
        .exists({ checkFalsy: true })
        .isURL()
        .withMessage('Please provide a valid URL.'),
    check('content')
        .exists({ checkFalsy: true })
        .isLength({ min: 2 })
        .withMessage('Tell the world about your beer by adding a valid description.'),
]

router.get('/', asyncHandler(async function (_req, res) {
    const images = await Image.findAll({
        order: [['userId', 'DESC']],
        include: [{ model: User }],
    });
    return res.json(images)
}))

router.get('/:id(\\d+)', asyncHandler(async function (req, res) {
    const image = await Image.findByPk(req.params.id);
    return res.json(image)
}))

router.post('/', checkPost, asyncHandler(async function (req, res) {
    const { userId, imageUrl, content } = req.body;
    const validationErrors = validationResult(req);
    if (validationErrors.isEmpty()) {
        const image = await Image.create({ userId, imageUrl, content });
        return res.status(201).json(image)

    } else res.json(validationErrors)
}))

router.put('/:id(\\d+)', asyncHandler(async function (req, res, next) {
    const { imageUrl, content } = req.body;
    const image = await Image.findByPk(req.params.id)
    if (image) {
        await image.update({ imageUrl, content })
        return res.json(image)
    } else next();
}))

router.delete('/:id(\\d+)', asyncHandler(async function (req, res) {
    const image = await Image.findByPk(req.params.id);
    if (image) {
        await image.destroy();
    }
    return res.json(image);
}))


module.exports = router;