<template>
  <div class="item-task d-flex align-items-start border-bottom pt-3 pb-4">
   
    <div class="d-flex flex-column">
      <nuxt-link
        id="artikel"
        class="title-task mb-1"
        :to="'artikel/detail/' + artikel.id"
        :key="artikel.id"
        >{{ artikel.title }}
      </nuxt-link>
      
      <div class="description-task small text-muted">
        {{ artikel.content }}
      </div>
      <div class="img">
        <img :src="artikel.img" class="img-thumbnail mx-auto d-block" width="300" height="300">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    artikel: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>