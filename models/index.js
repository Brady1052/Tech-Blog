const Users = require('./Users.js');
const Comments = require('./Comments.js');
const Blog = require('./Blog.js');

Comments.belongsTo(Users, {
    foreignKey: 'user_id',
  
  });
  Blog.belongsTo(Users, {
    foreignKey: 'user_id',
  });
Users.hasMany(Blog, {
foreignKey: 'user_id',
onDelete: 'CASCADE',
});
Users.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE', 
});

module.exports = {Users, Comments, Blog}