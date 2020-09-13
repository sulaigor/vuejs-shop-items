// assets
import '../scss/base.scss';

// components
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import MainContent from "./components/MainContent";
import FooterContent from "./components/FooterContent";

// data
import links from "./data/links.js";
import products from "./data/products.js";
import starImage from "./data/starImage";

const app = new Vue({
  el: '#app',
  components: {
    Navigation,
    Product,
    MainContent,
    FooterContent
  },
  data: function () {
    return {
      links: links,
      products: products,
      starImage: starImage,
    }
  },

});