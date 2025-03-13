import ProductData from './ProductData.mjs';
import ProductList from './productList.mjs';

const element = document.querySelector("#product-list");
const dataSource = new ProductData("tents");
const listing = new ProductList("Tents", dataSource, element);

productData.getData().then((data) => {
    console.log("Loaded Product Data:", data);
}).catch((error) => {
    console.error("Error fetching product data:", error);
});

listing.init();