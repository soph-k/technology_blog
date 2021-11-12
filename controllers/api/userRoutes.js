//////////////////////// Required  /////////////
// Express
const router = require('express').Router();

// Model 
const  User  = require('../../models/User');


//////////////////////// User Route ///////////////
// Create a new User
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new login session
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      res.status(400).json({ message: 'Wrong Username of Password' });
      return;
    }
    const password = user.checkPassword(req.body.password);
    if (!password) {
      res.status(400).json({ message: 'Wrong Username of Password' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are now successfully logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'Wrong Username of Password!' });
  }
});

// Create a new logout session
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Export to make available
module.exports = router;
