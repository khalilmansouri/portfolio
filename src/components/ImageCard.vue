<template>
  <div class="card medium">
    <div v-if="card.img != null" class="card-image">
      <img v-bind:src="card.img.src" v-bind:alt="card.img.alt">
    </div>
    <div class="card-content blue-grey darken-4 white-text">
      <router-link v-bind:to="'/' + this.$route.path.slice(1) +  '/' + card.id">
        <span class="card-title orange-text text-darken-2">{{card.title}}</span>
      </router-link>
      <p>{{card.content | snippet}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  props: ["card"],
  filters: {
    snippet: value => {
      return value.replace(/<\/?[^>]+>/gi, "").slice(0, 100) + "...";
    }
  }
};
</script>

<style scoped>
</style>
