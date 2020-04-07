<template>
  <div class="container">
    <h3>All Blog Articles</h3>
    <div v-if="blogs.length > 0 && loaded">
      <input type="text" v-model="search" placeholder="Search blogs" />
      <div class="row">
        <div v-for="blog in filteredBlogs" :key="blog.id" class="col s12 m6 l4">
          <image-card v-bind:card="blog"></image-card>
        </div>
      </div>
    </div>
    <div v-else-if="loaded">
      <p>No posts found.</p>
    </div>
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue';
import searchMixin from '../mixins/searchMixin';

export default {
  data() {
    return {
      blogs: [],
      loaded: false,
      search: ''
    };
  },
  methods: {
    dateCompare(a, b) {
      if (a.created == null) return -1;
      if (b.created == null) return 1;

      a = new Date(a.created);
      b = new Date(b.created);
      return a > b ? -1 : a < b ? 1 : 0;
    }
  },
  created() {
    this.$http
      .get(`${this.$baseUrl}/posts.json`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        var blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          if (data[key].published) {
            blogsArray.push(data[key]);
          }
        }
        document.title = 'Khalil Mansouri - Blog';
        this.blogs = blogsArray.sort(this.dateCompare);
        this.loaded = true;
      });
  },
  filters: {
    snippet: value => {
      return value.slice(0, 100).replace(/<\/?[^>]+>/gi, '') + '...';
    }
  },
  mixins: [searchMixin],
  components: {
    'image-card': ImageCard
  }
};
</script>

<style>
</style>
