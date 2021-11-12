//////////////////////// Required  /////////////
// Express Route
const router = require('express').Router();

// With Auth
const withAuth = require('../../utils/auth');

// Model
const Post  = require('../../models/Post');


//////////////////////// POST Route ///////////////
// Create new Post
router.post('/', withAuth, async (req, res) => {
  const body = req.body;
  try {
    const newPost = await Post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [newUpdate] = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (newUpdate > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const [newDelete] = Post.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (newDelete > 0) {
      res.status(200).end();
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export to make available
module.exports = router;
