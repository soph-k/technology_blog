///////////////////////// Packages /////////////////////////
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// create Post model
class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

// Export to make available
module.exports = Post;
