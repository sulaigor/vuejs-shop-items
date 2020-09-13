<template>
  <nav class="navigation">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="headline">{{ pageName }}</h1>
        </div>
        <div class="col-md-6">
          <ul class="nav justify-content-end">
            <link-element v-for="link in links"
                          :key="link.id" :link-href="link.href" :active="link.active">
              {{ link.text }}
            </link-element>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import LinkElement from "./LinkElement";

  export default {
    props: [ 'pageName', 'links'],
    components: {
      LinkElement
    }
  }
</script>