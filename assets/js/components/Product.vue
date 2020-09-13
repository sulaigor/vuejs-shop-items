<template>
  <div class="card product-card">
    <img :src="product.image" class="card-img-top product-image" :alt="product.name">
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p class="cart-text product-price" v-if="discont()">
        Price: <span class="cross-text">{{ product.price }} $</span> {{ getPrice() }} $
      </p>
      <p class="cart-text product-price" v-else>Price: {{ getPrice() }} $</p>
      <p class="card-text product-count">
        In stock: {{ product.quantity }}
        <span class="product-info" v-if="fewProducts()">Only a few of these...</span>
      </p>
      <a href="#" :class="`btn btn-success ${disabled()}`" v-on:click.prevent="decreaseQuantity">
        Add to cart
      </a>
      <a href="#" class="btn btn-primary float-right" v-on:click.prevent="likeButtonHandler()">Like product</a>
    </div>
    <p class="product-discount" v-if="discont()">Discount!</p>
    <product-star v-for="star in stars"
                  :name="star.name"
                  :image="star.image"
                  :value="star.value"
                  :right="star.right"
                  @hideStar="hideStar"
    ></product-star>
  </div>
</template>

<script>
  import ProductStar from "./ProductStar";

  export default {
    props: [ 'product', 'starImage' ],
    data: function () {
      return {
        stars: [],
      }
    },
    components: {
      ProductStar
    },
    methods: {
      decreaseQuantity() {
        if(this.product.quantity > 0) this.product.quantity--;
      },

      disabled() {
        if(this.product.quantity === 0) return 'disabled';
        else return '';
      },

      fewProducts() {
        return this.product.quantity <= 3;
      },

      discont() {
        return this.product.discount > 0;
      },

      getPrice() {
        return this.product.price - this.product.discount;
      },

      likeButtonHandler() {
        this.increaseLikes();
        this.showStar();
      },

      increaseLikes() {
        this.product.likes++;
      },

      showStar() {
        let newStar = {
          name: `star-${this.product.likes}`,
          image: this.starImage,
          value: this.product.likes,
          right: Math.round(Math.random() * 80) + "%",
        };

        this.stars.push(newStar);
      },

      hideStar(name) {
        this.stars = this.stars.filter(star => star.name !== name);
      }
    }
  }
</script>

<style scoped lang="scss">
  $discont-color: #FF2151;

  .product-card {
    position: relative;
    margin-bottom: 1em;
  }

  .product-discount {
    position: absolute;
    top: 10px;
    left: 10px;
    margin: 0;
    padding: .5em;
    color: #fff;
    background: $discont-color;
    border: 1px solid $discont-color;
    border-radius: 1em;
  }

  .product-image {
    max-width: 100%;
  }

  .product-price {
    margin-bottom: 0;

    .cross-text {
      margin-right: .5em;
      text-decoration: line-through $discont-color;
    }
  }

  .product-count {
    position: relative;

    .product-info {
      position: absolute;
      right: 0;
    }
  }
</style>