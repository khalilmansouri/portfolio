export default {
  computed: {
    filteredBlogs() {
      return this.blogs.filter(blog => {
        return (
          blog.title.toLowerCase().match(this.search.toLowerCase()) ||
          blog.content.toLowerCase().match(this.search.toLowerCase())
        );
      });
    },
    filteredProjects() {
      return this.projects.filter(project => {
        return (
          project.title.toLowerCase().match(this.search.toLowerCase()) ||
          project.content.toLowerCase().match(this.search.toLowerCase())
        );
      });
    }
  }
};
