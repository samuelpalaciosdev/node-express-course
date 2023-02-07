const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
  res.send('<h1>Home page</h1><a href="/api/products">Products</a>');
});

// Get all items but with specific properties
app.get('/api/products', (req, res) => {
  const newProducts = products.map(product => {
    const { id, name, image } = product;
    return { id, name, image }; // Only send the id, name and image properties of each product
  });
  res.json(newProducts);
});
// Get product by id
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params; // Get the id that req.params captured, returns a string
  const singleProduct = products.find(product => product.id === Number(id)); // Find product by id

  // If product doesn't exist
  if (!singleProduct) {
    return res.status(404).send(`Product doesn't exist`);
  }
  return res.status(200).json(singleProduct);
});

app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query; // Getting search and limit queries
  let sortedProducts = [...products]; // Copying the products obj

  if (search) {
    sortedProducts = sortedProducts.filter(product => {
      return product.name.startsWith(search); // Return the product that starts with the search query value
    });
  } else if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit)); // Filtered search of products, from the first to the limit number
  }
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] }); // Product not found but successful request
  }
  res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
  console.log('hey from the server');
});
