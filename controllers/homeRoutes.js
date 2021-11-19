// const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

// // Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', async (req, res) => {
//     try{
//       const userData = await User.create({
//         user_name: req.body.user_name,
//         email: req.body.email,
//         password: req.body.password
//       })
//       req.session.save(() => {
//         req.session.user_id = userData.id;
//         req.session.logged_in = true;
//         res.json({ user: userData, message: 'You are now logged in!' });
//       });
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });

// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;

const router = require('express').Router();
const { Blog } = require('../models');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll();
        const blogInfo = blogData.map(blog => blog.get({ plain: true }));

        res.render('homepage', { blogInfo, logged_in: req.session.logged_in})
    } catch (err) {
        res.status(500).json(err);
    }
});

// router.get('/login', (req, res) => {
//     res.render('login');
// })
router.get('/login', (req, res) => {
    // If a session exists, redirect the request to the homepage
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

// router.get('/signup', (req, res) => {
//     res.render('signup');
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup');
});

module.exports = router;
