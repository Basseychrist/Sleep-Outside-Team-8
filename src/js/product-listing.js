import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

const category = getParam("category");
const dataSource = new ProductData();
const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);

<<<<<<< HEAD
listing.init();
=======
listing.init();
>>>>>>> c1d774e83ce42de85ed86fd030dbedba12a0f026
