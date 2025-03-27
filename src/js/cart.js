import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart") || [];

  // Ensure cartItems is an array
<<<<<<< HEAD
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
=======
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    cartItems = [];
    document.querySelector(".product-list").innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Attach event listeners to quantity inputs
  const quantityInputs = document.querySelectorAll(".quantity-input");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", handleQuantityChange);
  });
}


>>>>>>> c1d774e83ce42de85ed86fd030dbedba12a0f026

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
<<<<<<< HEAD
  <p class="cart-card__color">${item.Colors[0].ColorName || 'No color specified'}</p>
  <p class="cart-card__quantity">qty: ${item.quantity || 1}</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
=======
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <div class="cart-card__quantity">
    <label for="quantity-${item.Id}">Qty:</label>
    <input type="number" id="quantity-${item.Id}" class="quantity-input" data-id="${item.Id}" value="${item.Quantity}" min="1" />
  </div>
  <p class="cart-card__price">$${(item.FinalPrice * item.Quantity).toFixed(2)}</p>
>>>>>>> c1d774e83ce42de85ed86fd030dbedba12a0f026
</li>`;

  return newItem;
}

function handleQuantityChange(event) {
  const input = event.target;
  const itemId = input.dataset.id;
  const newQuantity = parseInt(input.value);

  if (newQuantity < 1) {
    alert("Quantity must be at least 1.");
    input.value = 1;
    return;
  }

  // Get the current cart from localStorage
  let cartItems = getLocalStorage("so-cart");

  // Update the quantity of the item
  const itemIndex = cartItems.findIndex((item) => item.Id === itemId);
  if (itemIndex !== -1) {
    cartItems[itemIndex].Quantity = newQuantity;
  }

  // Save the updated cart back to localStorage
  setLocalStorage("so-cart", cartItems);

  // Re-render the cart
  renderCartContents();
}

renderCartContents();
