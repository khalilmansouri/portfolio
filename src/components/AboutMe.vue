<template>
  <app-article v-bind:postId="'My-First-Post'"></app-article>
</template>

<script>
import Article from './Article.vue';

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    'app-article': Article
  }
};
</script>

<style scoped>
</style>