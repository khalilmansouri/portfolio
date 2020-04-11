<template>
  <div class="Main">
    <h1>{{ msg }}</h1>
    <p>
    Coming soon ...
    </p>
    <h3></h3>

    <h3>About me</h3>
    <ul>
    </ul>
    <h3>Projects and contributions</h3>
    <ul>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
