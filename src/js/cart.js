import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart") || [];

  // Ensure cartItems is an array
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  if (cartItems.length === 0) {
    document.querySelector(".product-list").innerHTML = "<p>Your cart is empty.</p>";
  } else {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    document.querySelector(".product-list").innerHTML = htmlItems.join("");
  }
}

document.getElementById('add-to-cart').addEventListener('click', () => {
  let cart = document.getElementById('cart-icon');
  cart.classList.add('bounce');
  
  // Remove the bounce class after the animation is complete (0.5s)
  setTimeout(() => cart.classList.remove('bounce'), 500);
});

function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName || 'No color specified'}</p>
  <p class="cart-card__quantity">qty: ${item.quantity || 1}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}
renderCartContents();
