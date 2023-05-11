const sequelize = require('../config/connection');
const { User, Book, Recommend, Review } = require('../models');

const userData = require('../models');
const bookData = require('../models');
const recommendData = require('../models');
const reviewData = require('../models');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // const users = await User.bulkCreate(userData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  for (const book of bookData) {
    const createdBook = await Book.create({
      title: book.title,
      // Other properties from the bookData JSON file
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });

    // You can perform additional operations with the created book, if needed
    // For example, you can create related recommendations or reviews
    for (const recommend of recommendData) {
      if (recommend.book_id === book.id) {
        await Recommend.create({
          book_id: createdBook.id,
          // Other properties from the recommendData JSON file
        });
      }
    }

    for (const review of reviewData) {
      if (review.book_id === book.id) {
        await Review.create({
          book_id: createdBook.id,
          // Other properties from the reviewData JSON file
        });
      }
    }
  }

  process.exit(0);
};

seedDatabase();
