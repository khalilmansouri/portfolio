import LandingBio from './components/LandingBio.vue';
import AboutMe from './components/AboutMe.vue';
import ProjectList from './components/ProjectList.vue';
import BlogList from './components/BlogList.vue';
import Article from './components/Article.vue';

export default [
  { name: 'home', path: '/', component: LandingBio },
  { name: 'about', path: '/about', component: AboutMe },
  { name: 'projects', path: '/projects', component: ProjectList },
  { name: 'blog', path: '/blog', component: BlogList },
  { name: 'singleProject', path: '/projects/:id', component: Article },
  { name: 'singlePost', path: '/blog/:id', component: Article }
];
