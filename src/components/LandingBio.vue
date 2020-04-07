<template>
  <div class="container">
    <div class="row">
      <div class="col s12">
        <h1 class="grey-text text-darken-3">Khalil</h1>
        <h1 class="grey-text text-darken-3">Mansouri</h1>
        <h4 class="orange-text text-darken-2">// Full Stack Developer</h4>
      </div>
    </div>
    <div class="divider"></div>
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <h5 class="center grey-text text-darken-3">In coding, I enjoy.</h5>
        <h6 class="center grey-text text-darken-3">JAVASCRIPT / TYPESCRIPT / VUE | ElasticSearch | MongoDB</h6>
      </div>
    </div>
    <div class="row">
      <p class="grey-text text-darken-3">
        Currently working as an Associate Dynamics 365 Developer at 
        <a class="orange-text text-darken-2" href="https://www.intergen.co.nz/" target="_blank">Intergen</a>.
        Before that I was a student at the 
        <a class="orange-text text-darken-2" href="https://www.auckland.ac.nz/" target="_blank">University of Auckland</a>,
        where I graduated with a Bachelor of Science in Computer Science and Information Systems. While I already have experience with a number
        of technologies and frameworks, the tinkering never ends.
      </p>
      <p>Feel free to contact me on social media, or check out my blog posts here or on Dev.to - <i>once I start writing them of course</i> ✍</p>
    </div>
    <div class="row center">
      <div class="col s3 m2">
        <a href="https://linkedin.com/" title="LinkedIn Profile - Khalil Mansouri" target="_blank" rel="noopener" class="waves-effect waves-light btn-large btn-floating icon-link">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="col s3 m2">
        <a href="https://github.com/khalilmansouri" target="_blank" title="Github Profile - Khalil Mansouri" rel="noopener" class="waves-effect waves-light btn-large btn-floating icon-link">
          <i class="fab fa-github"></i>
        </a>
      </div>
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
  created() {
    document.title = 'Khalil Mansouri';
  }
};
</script>

<style scoped>
h1 {
  font-family: 'Lobster', 'cursive';
}

h4,
h5,
h6,
p {
  font-family: 'Source Sans Pro', 'sans-serif';
}

h1 {
  margin-bottom: 0;
}
h1:last-of-type {
  margin-top: 0;
}

h4:last-of-type {
  margin-top: 0.5rem;
}

.icon-link i {
  font-size: 2rem;
}
.icon-link i.fa-dev {
  font-size: 2.5rem;
}

.icon-link:hover {
  opacity: 0.8;
  -webkit-transition: opacity 0.2s; /* Safari */
  transition: opacity 0.2s;
  color: white !important;
  text-decoration: none;
}

.fa-linkedin-in {
  background: #007bb5;
  color: white;
}

.fa-github {
  background: #24292e;
  color: white;
}
.fa-twitter {
  background: #55acee;
  color: white;
}
.fa-dev {
  background-color: white;
  color: black;
}
a {
  font-weight: 600;
}
a:hover {
  color: #ffa726 !important;
  text-decoration: underline;
  -webkit-transition: color 0.2s; /* Safari */
  transition: color 0.2s;
}
</style>
