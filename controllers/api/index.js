//////////////////////// Required  /////////////
// Express
const router = require('express').Router();

//API Routes
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);


// Export to make available
module.exports = router;