import { getParam, loadHeaderFooter, getLocalStorage, setLocalStorage} from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");
const productID = getParam("product");

const product = new ProductDetails(productID, dataSource);


async function initProductPage() {
  await product.init(); // Wait for the product to load

  // Now that the product details are in the DOM, add the event listener
  const addToCartButton = document.getElementById("addToCart");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", addToCartHandler);
  } else {
    console.error("Add to Cart button not found!");
  }
}

initProductPage(); // Initialize the product page and event listener

// Function to add product to cart
function addProductToCart(productcart) {
  let cartItems = getLocalStorage("so-cart");
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  } // Get cart array of items from local storage
  cartItems.push(productcart);
  setLocalStorage("so-cart", cartItems);
}

// Event handler for the Add to Cart button
async function addToCartHandler(e) {
  const productId = e.target.dataset.id;
  if (!productId) {
    console.error("Product ID missing!");
    return;
  }

  const productadd = await dataSource.findProductById(productId);
  if (!productadd) {
    console.log("Product not found!");
    return;
  }

  addProductToCart(product);
}
