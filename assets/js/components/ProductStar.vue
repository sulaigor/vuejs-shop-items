<template>
  <div class="star-image-position" :style="`right: ${right}`">
    <transition name="drop" v-on:after-enter="emitEvent()">
      <div class="star-image-wrapper" v-show="visibility">
        <img :src="image.src" :alt="image.alt" class="star-image">
        <p class="image-value">{{ this.value }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    props: [ 'name', 'image', 'value', 'right' ],
    data: function () {
      return {
        visibility: false,
      }
    },
    methods: {
      emitEvent() {
        this.$emit('hideStar', this.name);
      }
    },
    created() {
      setTimeout(() => this.visibility = true, 1);
    }
  }
</script>

<style scoped lang="scss">
  .star-image-position {
    position: absolute;
    display: block;
    width: 50px;
    height: 50px;
    top: 10px;
  }

  .star-image-wrapper {
    display: none;
    width: 100%;
    height: 100%;
    background: #FF2151;
    border-radius: 50%;

    .star-image {
      width: calc(100% - 6px);
      height: auto;
      margin: 1px 3px;
      vertical-align: middle;
    }

    .image-value {
      font-size: .8em;
      position: absolute;
      display: block;
      width: 100%;
      top: 16px;
      margin: 0;
      text-align: center;
    }
  }

  .drop-enter {
    display: block;
    opacity: 1;
    transform: translate(0, 0);
  }

  .drop-enter-to {
    display: block;
    opacity: 0;
    transform: translate(-50px, 50px);
  }

  .drop-enter-active {
    transition: all 1s ease;
  }

</style>