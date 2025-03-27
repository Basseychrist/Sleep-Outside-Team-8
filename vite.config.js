import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        cart: resolve(__dirname, "src/cart/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
<<<<<<< HEAD
        productPages: resolve(__dirname, "src/product_pages/index.html"),
        productListings: resolve(__dirname, "src/product_listings/index.html"),
=======
        product: resolve(__dirname, "src/product_pages/index.html"),
        product_listing: resolve(__dirname, "src/product_listing/index.html"),
>>>>>>> c1d774e83ce42de85ed86fd030dbedba12a0f026
      },
    },
  },
});
