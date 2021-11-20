const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const postInfo = await Blog.create({
            blog_title: req.body.post_title,
            blog_body: req.body.post_body,
            username: req.session.username,
        })
        res.json(postInfo)
    }catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;