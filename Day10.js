// Sample product data
const products = [
  {
    title: 'Smartphone one plus',
    description: 'A sleek, modern phone with all the features.',
    image: 'https://source.unsplash.com/400x300/?smartphone',
    price: '30000/-'
  },
  {
    title: 'Wireless Headphones',
    description: 'High-quality sound with noise cancellation.',
    image: 'https://source.unsplash.com/400x300/?headphones',
    price: '2000/-'
  },
  {
    title: 'Fitness Smartwatch',
    description: 'Track your health and fitness effortlessly.',
    image: 'https://source.unsplash.com/400x300/?smartwatch',
    price: '5000/-'
  }
];

// Render product cards
const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}" class="product-image" />
    <div class="product-content">
      <h2 class="product-title">${product.title}</h2>
      <p class="product-description">${product.description}</p>
      <div class="product-footer">
        <span class="product-price">${product.price}</span>
        <button class="product-button">Add</button>
      </div>
    </div>
  `;
  productList.appendChild(card);
});
