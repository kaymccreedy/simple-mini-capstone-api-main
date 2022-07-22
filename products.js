/* global Vue, axios */

var App = {
  data: function () {
    return {
      message: "Products",
      products: [],
    };
  },
  created: function () {
    this.loadProducts();
  },
  methods: {
    loadProducts: function () {
      axios.get("http://localhost:3000/products.json").then((response) => {
        console.log(response.data);
        this.products = response.data;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
