const express = require('express');
const auth = require('../middleware/auth.middleware');
const Review = require('../models/Reviews')
const router = express.Router({ mergeParams: true });

router
    .route('/')
    .get(auth, async (req, res) => {
        try {
            const {orderBy, equalTo} = req.query
            const list = await Review.find({ [orderBy]: equalTo })
            res.send(list)
        } catch (e) {
            res.status(500).json({
                message: 'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    })
    .post(auth, async (req, res) => {
        try {
           const newReview =  await Review.create({
                ...req.body,
                userId: req.user._id
            })
            res.status(201).send(newReview)
        } catch (e) {
            res.status(500).json({
                message: 'На сервере произошла ошибка. Попробуйте позже'
            })
        }
    })

router.delete('/:reviewId', auth, async (req, res) => {
    try {
        const { reviewId } = req.params
        const remoovedReview = await Review.findById(reviewId)
if (remoovedReview.userId.toString() === req.user._id) {
    await remoovedReview.remove()
    return res.send(null)
} else {
    res.status(401).json({message: 'Unauthorized'})
}

    } catch (e) {
        res.status(500).json({
            message: 'На сервере произошла ошибка. Попробуйте позже'
        })
    }
})

module.exports  = router