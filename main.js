import Vue from 'vue/dist/vue.js'

var app = new Vue({
  el:'#app',
  data: {
    product: "Socks",
    description: "Dumbledore's favourite",
    image: "./assets/socksGreen.jpg",
    altText: "A pair of socks",
    inventory: 0,
    onSale: false,
    inStock: false,
    details: ["80% cotton", "20% polyester", "gender-neutral"],
    variants: [
      {id: 123456,
      variantColor: "blue",
      image: "./assets/socksBlue.jpg"
      },
      {
        id: 654987,
        variantColor: "green",
        image: "./assets/socksGreen.jpg",

      }
    ],
    sizes: ["S", "M", "L"],
    cart: 0

  },
  methods: {
    updateQuantity(num){
      console.log(num)
      this.cart += num;
      this.inventory -= num
    },
    updateImage(asset){
      this.image = asset;

    }
  }
})