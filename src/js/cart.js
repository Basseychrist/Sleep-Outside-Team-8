import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function renderCartContents() {
  let cartItems = getLocalStorage("so-cart");

  // Ensure cartItems is an array
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    cartItems = [];
    document.querySelector(".product-list").innerHTML =
      "<p>Your cart is empty.</p>";
    document.querySelector(".cart-total").innerHTML = ""; // Clear total if cart is empty
    return;
  }

  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");

  // Calculate and display the total
  const total = calculateCartTotal(cartItems);
  document.querySelector(".cart-total").innerHTML =
    `<p>Total: $${total.toFixed(2)}</p>`;

  // Attach event listeners to quantity inputs
  const quantityInputs = document.querySelectorAll(".quantity-input");
  quantityInputs.forEach((input) => {
    input.addEventListener("change", handleQuantityChange);
  });
}

function calculateCartTotal(cartItems) {
  return cartItems.reduce(
    (total, item) => total + item.FinalPrice * item.Quantity,
    0,
  );
}

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
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <div class="cart-card__quantity">
    <label for="quantity-${item.Id}">Qty:</label>
    <input type="number" id="quantity-${item.Id}" class="quantity-input" data-id="${item.Id}" value="${item.Quantity}" min="1" />
  </div>
  <p class="cart-card__price">$${(item.FinalPrice * item.Quantity).toFixed(2)}</p>
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
