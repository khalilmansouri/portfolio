<template>
  <footer class="page-footer blue-grey darken-4">
    <div class="container">
      <div class="row">
        <div class="col s12 l6">
          <h5 class="white-text">Who am I?</h5>
          <p class="grey-text text-lighten-4">Just a Software Dev living the Dev life // Dynamics 365 Developer 
            <a href="https://www.intergen.co.nz" target="_blank" class="orange-text text-darken-2">@Intergen</a>
            // CompSci &amp; InfoSys graduate 
            <a href="https://www.auckland.ac.nz/" target="_blank" class="orange-text text-darken-2">@AucklandUni</a>
          </p>
        </div>
        <div class="row">
        <div class="col s12 l4 offset-l2">
          <h5 class="white-text">Links</h5>
          <ul>
            <li>
              <a href="https://linkedin.com/in/" target="_blank" rel="noopener" class="grey-text text-lighten-3">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/khalilmansouri" target="_blank" rel="noopener" class="grey-text text-lighten-3">GitHub</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright blue-grey darken-3">
      <div class="container">
        © 2017 - {{year}} Khalil Mansouri 🍁🥝
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {},
  props: ['year']
};
</script>

<style scoped>
a:hover {
  color: #ffa726 !important;
  -webkit-transition: color 0.2s; /* Safari */
  transition: color 0.2s;
}
</style>
