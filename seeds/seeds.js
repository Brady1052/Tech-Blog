const sequelize = require('../config/connection');
const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentsData = require('./commentsData.json');
const { Users, Comments, Blog } = require('../models');
const seeds = async() =>{
await sequelize.sync({force:true})
console.log("connected to database!")
await Users.bulkCreate(userData)
console.log("Seeded the users!")
await Blog.bulkCreate(blogData)
console.log("Seeded blog data!")
await Comments.bulkCreate(commentsData)
console.log("Seeded comment data!")
process.exit(0)
}
seeds()

