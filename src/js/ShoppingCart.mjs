// ShoppingCart.mjs

export default class ShoppingCart {
  constructor(cartElementId) {
    this.cartElement = document.getElementById(cartElementId);
    this.cartItems = [];
  }

  addItem(product, quantity = 1) {
    const existingItem = this.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cartItems.push({ ...product, quantity });
    }
    this.renderCart();
  }

  removeItem(productId) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
    this.renderCart();
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }

  renderCart() {
    this.cartElement.innerHTML = "";
    if (this.cartItems.length === 0) {
      this.cartElement.innerHTML = "<p>Your cart is empty.</p>";
      return;
    }

    const template = document.createElement("template");
    this.cartItems.forEach(item => {
      template.innerHTML += `
        <li class="cart-item">
          <span>${item.name}</span>
          <span>Quantity: ${item.quantity}</span>
          <span>Price: $${(item.price * item.quantity).toFixed(2)}</span>
          <button class="remove-item" data-id="${item.id}">Remove</button>
        </li>
      `;
    });

    this.cartElement.appendChild(template.content);

    const totalElement = document.createElement("div");
    totalElement.classList.add("cart-total");
    totalElement.innerHTML = `<strong>Total: $${this.getTotal()}</strong>`;
    this.cartElement.appendChild(totalElement);

    this.cartElement.querySelectorAll(".remove-item").forEach(button => {
      button.addEventListener("click", (event) => {
        const productId = event.target.dataset.id;
        this.removeItem(productId);
      });
    });
  }
}
