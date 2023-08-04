let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
 
 
window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
});
 
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}


// ... (previous JavaScript code) ...

// Initialize cart items count and cart items array
let cartCount = 0;
let cartItems = [];

// Function to update the cart count in the UI
function updateCartCount() {
  cartCountElement.textContent = cartCount;
}

// Function to add an item to the cart
function addToCart(itemName, price) {
  cartItems.push({ name: itemName, price: price });
  cartCount++;
  updateCartCount();
}

// Set up click event for adding items to the cart
const addToCartButtons = document.querySelectorAll('.bxs-cart-add');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    const itemName = button.parentElement.querySelector('h3').textContent;
    const itemPrice = parseFloat(button.parentElement.querySelector('h2').textContent.replace('$', ''));
    addToCart(itemName, itemPrice);
  });
});

// ... (rest of the JavaScript code) ...

// ... (rest of the JavaScript code) ...
// ... (previous JavaScript code) ...

// Function to update the cart count and display cart items
function updateCartUI() {
    updateCartCount();
  
    // Get the cart items ul element
    const cartItemsList = document.querySelector('.cart-items');
  
    // Clear previous cart items
    cartItemsList.innerHTML = '';
  
    // Generate and append new cart items
    cartItems.forEach(item => {
      const cartItemElement = document.createElement('li');
      cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsList.appendChild(cartItemElement);
    });
  }
  
  // ... (rest of the JavaScript code) ...
  