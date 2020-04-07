<template>
  <div id="preview-container" class="grey lighten-4">
    <h5>Preview</h5>
    <h3>{{article.title}}</h3>
    <h5>{{article.created}}</h5>
    <article id="fetched-article" v-cloak v-html="article.content"></article>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  props: {
    article: {
      type: Object,
      default() {
        return {
          title: '',
          created: '',
          content: ''
        };
      }
    }
  }
};
</script>

<style scoped>
#preview-container {
  padding: 1rem;
}
</style>