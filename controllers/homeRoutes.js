const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth')
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogInfo = blogData.map(blog => blog.get({ plain: true }));

        res.render('homepage', { blogInfo, logged_in: req.session.logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

router.get('/new/post', (req,res)=> {
    if (req.session.logged_in){
        res.render('post') 
    } else {
        res.redirect('/login')
    }
})
router.get('/dashboard',withAuth, async(req,res)=>{
try {
    var allBlogs = await Blog.findAll({
       where: {
           user_id: req.sessions.user_id
       } 
    })
const blog = allBlogs.map(blog => this.post.get({plain:true}))
res.render('dashboard',{blog})    
}catch (err) {
    res.status(400).json(err)
}
})

module.exports = router;
