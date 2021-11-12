//////////////////////// Required  ////////////////
const router = require('express').Router();

//Auth
const withAuth = require('../utils/auth');

// Model file
const Post = require('../models/Post');


//////////////////////// Post Route //////////////////
// Get all comments
router.get('/', withAuth, async (req, res) => {
  try {
    const NewPost = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });
    const posts = NewPost.map((post) => post.get({ plain: true }));

    // handlebar route for admin
    res.render('admin', { 
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    // handlebar route for login
    res.redirect('login');
  }
});

// Get comments from new
router.get('/new', withAuth, (req, res) => {
  res.render('newComments', {
    layout: 'dashboard',
  });
});

// Get Single comment
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const NewPost = await Post.findByPk(req.params.id);

    if (NewPost) {
      const post = NewPost.get({ plain: true });
      // handlebar route for editComment
      res.render('editComment', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    // handlebar route for login
    res.redirect('login');
  }
});

// Export to make available
module.exports = router;
