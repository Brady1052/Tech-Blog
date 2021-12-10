const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/post', withAuth, async (req, res) => {
    console.log(req.body)
    try {
        const postInfo = await Blog.create({
            title: req.body.title,
            blogContent: req.body.postContent,
            user_id: req.session.user_id,           
        }) 
        res.json(postInfo)
    }catch (err) {
        res.status(400).json(err)
    }
});

router.put('/:id', withAuth, (req, res) => {
    Blog.update({
            blog_title: req.body.blog_title,
            blog_body: req.body.blog_body,
        }, {
            where: {
                id: req.params.id
            }
        }).then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.delete('/:id', withAuth, (req, res) => {
    Blog.destroy({
        where: {
            id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;