<template>
  <div class="navbar-fixed">
    <nav id="nav-wrapper" class="nav-wrapper blue-grey darken-4">
      <div class="container">
        <a class="sidenav-trigger" data-target="mobile-links">
          <i class="material-icons">menu</i>
        </a>
        <router-link class="brand-logo" v-bind:to="'/'" v-on:click.native="updateActivePage">{ ... }</router-link>
        <ul class="right hide-on-med-and-down">
          <li v-bind:class="{ active: activePage === 'about'}">
            <router-link v-bind:to="'/about'" v-on:click.native="updateActivePage"><i class="material-icons left">assignment_ind</i>About Me</router-link>
          </li>
          <li v-bind:class="{ active: activePage === 'projects'}">
            <router-link v-bind:to="'/projects'" v-on:click.native="updateActivePage"><i class="material-icons left">developer_board</i>Projects</router-link>
          </li>
          <li v-bind:class="{ active: activePage === 'blog'}">
            <router-link v-bind:to="'/blog'" v-on:click.native="updateActivePage"><i class="material-icons left">library_books</i>
              Blog
              <span v-if="blogNotifications.isNewBlog" class="badge blue lighten-4 black-text new">
                {{blogNotifications.count}}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <ul id="mobile-links" class="sidenav">
      <li v-bind:class="{ active: activePage === ''}">
        <router-link class="sidenav-close grey-text text-darken-3" v-bind:to="'/'" v-on:click.native="updateActivePage"><i class="material-icons right">home</i>Home</router-link>
      </li>
      <li v-bind:class="{ active: activePage === 'about'}">
        <router-link class="sidenav-close grey-text text-darken-3" v-bind:to="'/about'" v-on:click.native="updateActivePage"><i class="material-icons right">assignment_ind</i>About Me</router-link>
      </li>
      <li v-bind:class="{ active: activePage === 'projects'}">
        <router-link class="sidenav-close grey-text text-darken-3" v-bind:to="'/projects'" v-on:click.native="updateActivePage"><i class="material-icons right">developer_board</i>Projects</router-link>
      </li>
      <li v-bind:class="{ active: activePage === 'blog'}">
        <router-link class="sidenav-close grey-text text-darken-3" v-bind:to="'/blog'" v-on:click.native="updateActivePage"><i class="material-icons right">library_books</i>Blog</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogNotifications: {
        isNewBlog: false,
        count: 0
      },
      activePage: ''
    };
  },
  components: {},
  methods: {
    getPath() {
      return this.$route.path.slice(1);
    },
    updateActivePage() {
      this.scrollToTop();
      this.activePage = this.getPath();
    },
    scrollToTop() {
      setTimeout(() => {
        $(window).scrollTop(0);
      }, 300);
    }
  },
  beforeMount() {
    this.updateActivePage();
  },
  updated() {
    $('.dropdown-trigger').dropdown({ hover: true, coverTrigger: false });
  },
  mounted() {
    $('.sidenav').sidenav();
  }
};
</script>

<style scoped>
nav .container ul li a i {
  position: relative;
  top: 5px;
}
.brand-logo {
  font-family: 'Lobster', 'cursive';
}

ul li::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: #f57c00;
  transition: width 0.3s;
  margin-top: -15px;
}

#mobile-links li::after {
  margin-top: 0;
}

ul li:hover::after {
  width: 100%;
}

nav ul li.active {
  background: transparent;
}

nav ul li.active::after {
  width: 100%;
}

nav ul a:hover {
  background: transparent;
}

.sidenav li.active {
  background-color: transparent;
}
.sidenav li > a:hover {
  background-color: transparent;
}

.sidenav li.active::after {
  width: 100%;
}
</style>
