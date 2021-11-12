//////////////////////// Required  /////////////
// Express Route
const router = require('express').Router();

//Auth
const withAuth = require('../../utils/auth');

// Model file
const  Comment  = require('../../models/Comment');



//////////////////////// Comment Route ///////////////
// Create New Comment
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      ...req.body,
      // Must be signed in
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export to make available
module.exports = router;
