import Vue from "vue/dist/vue.js";

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }

  },
  template: `
    <div class="product">
      <div class="product-image">
        <img v-bind:src="image" :alt="altText">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <h2 v-show="onSale">{{ promote }}</h2>
        <p>{{ description }}</p>
        <p v-if="inStock">In stock</p>
        <p v-else-if="inStock">Almost sold out</p>
        <p v-else v-bind:style="{textDecoration: !inStock ? 'line-through' : 'none'}">Out of stock</p>
        <product-details :details="details"></product-details>

        <div class="color-box">
          <p v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" v-bind:style="{backgroundColor: variant.variantColor}">{{variant.variantColor}}</p>
        </div>
        <ul>
          <li v-for="size in sizes" v-bind:key="size">{{size}}</li>
        </ul>
  
        <p>Shipping: {{shipping}}</p>
        <button v-on:click="updateQuantity(1)" :disabled="!inStock" :class="{disabledButton: !inStock}">+</button>
        <button v-on:click="updateQuantity(-1)">-</button>
      </div>
    </div>  `,
  data () {
    return {
      product: "Socks",
      brand: "Vue Mastery",
      description: "Dumbledore's favourite",
      altText: "A pair of socks",
      selected: 0,
      onSale: true,
      details: ["80% cotton", "20% polyester", "gender-neutral"],
      variants: [
        {
          id: 123456,
          variantColor: "blue",
          image: "./assets/socksBlue.jpg",
          quantity: 2,
        },
        {
          id: 654987,
          variantColor: "green",
          image: "./assets/socksGreen.jpg",
          quantity: 10,
        },
      ],
      sizes: ["S", "M", "L"]

    }

  },
  methods: {
    updateQuantity(num) {
      console.log(this.variants[this.selected].id)
      this.$emit('add-to-cart', this.variants[this.selected].id, num)
    },
    updateVariant(index) {
      this.selected = index;
    }
  },
  computed: {
    image() {
      return this.variants[this.selected].image;
    },
    inStock() {
      return this.variants[this.selected].quantity;
    },
    promote() {
      return this.onSale ? `Special promotion for ${this.brand} ${this.product}` : "" 
    },
    shipping() {
      return this.premium ? "Free" : "2.99"
    }
  },
})

Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
        <ul>
          <li v-for="detail in details">{{detail}}</li>
        </ul>
  `

})

new Vue({
  el: "#app",
  data: {
    premium: true,
    cart: []
  },
  methods: {
      updateCart(id, num) {
        num > 0 ? this.cart.push(id) : this.cart.splice(this.cart.indexOf(id), 1)
      }
    }
});


