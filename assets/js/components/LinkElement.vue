<template>
  <li class="nav-item">
    <a :class="linkClass(active)" :href="linkHref">
      <slot></slot>
    </a>
  </li>
</template>

<script>
  export default {
    props: [ 'linkHref', 'active' ],
    methods: {
      linkClass(active) {
        return active ? "nav-link active" : "nav-link";
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-item {
    .nav-link {
      
      &.active {
        border-bottom: 1px solid #6C757D;
      }
    }
  }
</style>