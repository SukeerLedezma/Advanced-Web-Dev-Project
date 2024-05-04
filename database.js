const Sequelize = require('sequelize');

// Initialize Sequelize with SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite' // SQLite database file path
});

// Define Menu Item model
const MenuItem = sequelize.define('menu_item', {
  name: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.FLOAT
});

// Define User Cart model
const UserCart = sequelize.define('user_cart', {
  userId: Sequelize.INTEGER,
  itemId: Sequelize.INTEGER,
  quantity: Sequelize.INTEGER
});

// Sync models with database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = { MenuItem, UserCart };
