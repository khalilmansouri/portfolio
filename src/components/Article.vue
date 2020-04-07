<template>
  <div id="article-wrapper">
    <div v-if="isLoaded" class="container white" id="article-container">
      <div class="col s12" v-if="this.id != null">
        <router-link v-bind:to="this.parent.route" class="breadcrumb">{{this.parent.name}}</router-link>
        <router-link v-bind:to="this.$route.path" class="breadcrumb">{{this.article.title}}</router-link>
      </div>
      <h3>{{article.title}}</h3>
      <h5>{{article.created}}</h5>
      <article id="fetched-article" v-cloak v-html="article.content"></article>
    </div>
    <div v-if="isLoaded" class="fixed-action-btn">
      <a
        v-on:click.prevent="scrollToTop"
        class="waves-effect waves-light btn-floating btn-large orange darken-2 pulse"
      >
        <i class="material-icons large">vertical_align_top</i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      article: null,
      isLoaded: false,
      parent: null,
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  components: {},
  methods: {
    createDate(input) {
      let date = new Date(input);
      return `${this.days[date.getDay()]}, ${date.getDate()} ${
        this.months[date.getMonth()]
      } ${date.getFullYear()}`;
    },
    getParent() {
      let childStartIndex = this.$route.path.lastIndexOf("/");
      let route = this.$route.path.slice(0, childStartIndex);
      let name = route != "/projects" ? "posts" : "projects";
      return {
        name: name,
        route: route
      };
    },
    scrollToTop() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    }
  },
  props: ["postId"],
  created() {
    const childStartIndex = this.$route.path.lastIndexOf("/"),
      route = this.$route.path.slice(0, childStartIndex),
      articleType = route != "/projects" ? "posts" : "projects";
    this.$http
      .get(`${this.$baseUrl}/${articleType}/${this.postId || this.id}.json`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.article = data;
        this.article.created = this.createDate(data.created);
        this.parent = this.getParent();
        this.isLoaded = true;
      })
      .then(() => {
        document.title = `Khalil Mansouri - ${this.article.title}`;
      });
  }
};
</script>

<style scoped>
#article-container {
  margin-bottom: 3rem;
  padding: 1.5rem;
}

#back-button:hover {
  color: #ffffff;
}
article {
  padding-bottom: 20px;
}
#article-wrapper {
  position: relative;
}
.fixed-action-btn {
  position: absolute;
  right: 2.5%;
  bottom: -72px;
}
@media only screen and (min-width: 601px) {
  .fixed-action-btn {
    right: 3.75%;
  }
}
@media only screen and (min-width: 993px) {
  .fixed-action-btn {
    right: 7.5%;
  }
}
a.breadcrumb {
  color: #039be5;
}
a.breadcrumb::before {
  color: unset;
  margin-top: -3px;
}
a.breadcrumb:hover {
  color: #01579b;
  -webkit-transition: color 0.2s; /* Safari */
  transition: color 0.2s;
}
</style>