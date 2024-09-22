import Vue from 'vue/dist/vue.js'
console.log("hello from main")

var app = new Vue({
  el:'#app',
  data: {
    product: "Socks",
    description: "Dumbledore's favourite",
    image: "./assets/socksGreen.jpg",
    altText: "A pair of socks",
    inventory: 4,
    onSale: false

  }


})

console.log("hello from main", app)
