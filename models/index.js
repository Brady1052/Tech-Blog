const User = require('./User.js');
const Comments = require('./Comments.js');
const Blog = require('./Blog.js');

Comments.belongsTo(Blog, {
  foreignKey: 'blog_id',

});
Blog.belongsTo(User, {
  foreignKey: 'user_id',
});
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});
User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = { User, Comments, Blog };