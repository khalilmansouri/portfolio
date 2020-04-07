<template>
  <div class="container">
    <h3>Projects</h3>
    <div v-if="projects.length > 0 && loaded">
      <input type="text" v-model="search" placeholder="Search projects">
      <div class="row">
        <div v-for="project in filteredProjects" :key="project.id" class="col s12 m6 l4">
          <image-card v-bind:card="project"></image-card>
        </div>
      </div>
    </div>
    <div v-else-if="loaded">
      <!--<p>No projects found.</p>-->
      <p>Projects coming soon.</p>
    </div>
  </div>
</template>

<script>
import ImageCard from "./ImageCard.vue";
import searchMixin from "../mixins/searchMixin";

export default {
  data() {
    return {
      projects: [],
      loaded: false,
      search: ""
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
      .get(`${this.$baseUrl}/projects.json`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        var projectsArray = [];
        for (let key in data) {
          data[key].id = key;
          if (data[key].published) {
            projectsArray.push(data[key]);
          }
        }
        document.title = "Khalil Mansouri - Projects";
        this.projects = projectsArray.sort(this.dateCompare);
        this.loaded = true;
      });
  },
  mixins: [searchMixin],
  components: {
    "image-card": ImageCard
  }
};
</script>

<style>
</style>
