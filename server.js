const express = require('express');
const bodyParser = require('body-parser');
const { MenuItem, UserCart } = require('./database');

const app = express();
app.use(bodyParser.json());

// Add menu items
async function addMenuItems() {
  try {
    // Add coffee
    await MenuItem.create({
      name: 'Coffee',
      description: 'A classic hot beverage made from roasted coffee beans, providing a rich and invigorating flavor to kickstart your day.',
      price: 2.00
    });

    // Add pan dulce
    await MenuItem.create({
      name: 'Pan Dulce',
      description: 'Pan Dulce, or "sweet bread", is a traditional Mexican pastry that comes in various shapes and sizes, often adorned with colorful toppings and fillings. It offers a delightful combination of sweetness and texture, perfect for enjoying with a cup of coffee or tea.',
      price: 3.00
    });

    // Add churro
    await MenuItem.create({
      name: 'Churro',
      description: 'A beloved treat in Spanish and Mexican cuisine, a churro is a fried dough pastry that is crispy on the outside and soft on the inside. It is often dusted with cinnamon sugar and served warm for a delightful indulgence.',
      price: 0.99
    });

    // Add tamales verdes
    await MenuItem.create({
      name: 'Tamales Verdes',
      description: 'Tamales Verdes are a traditional Mexican dish consisting of corn masa filled with savory ingredients such as chicken or pork, wrapped in corn husks, and steamed to perfection. They are typically accompanied by a tangy green salsa made from tomatillos and chilies.',
      price: 2.00
    });

    console.log('Menu items added successfully');
  } catch (err) {
    console.error('Error adding menu items:', err);
  }
}

// Add menu items to database
addMenuItems();

// Example API endpoints

// Get all menu items
app.get('/api/menu', async (req, res) => {
  try {
    const menuItems = await MenuItem.findAll();
    res.json(menuItems);
  } catch (err) {
    console.error('Error fetching menu items:', err);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Add item to user's cart
app.post('/api/cart/add', async (req, res) => {
  const { userId, itemId, quantity } = req.body;
  try {
    const existingCartItem = await UserCart.findOne({
      where: { userId, itemId }
    });
    if (existingCartItem) {
      // If item already exists in cart, update quantity
      existingCartItem.quantity += quantity;
      await existingCartItem.save();
    } else {
      // If item doesn't exist in cart, create new cart item
      await UserCart.create({ userId, itemId, quantity });
    }
    res.status(200).send('Item added to cart');
  } catch (err) {
    console.error('Error adding item to cart:', err);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Other API endpoints for managing cart items, etc.

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

