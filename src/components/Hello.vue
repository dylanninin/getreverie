<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://github.com/dylanninin/getreverie" target="_blank">Github</a></li>
      <li><a href="https://github.com/dylanninin/getreverie/issues" target="_blank">Issues</a></li>
      <li><a href="https://twitter.com/dylanninin" target="_blank">Twitter</a></li>
      <li><a href="https://dylanninin.com" target="_blank">About</a></li>
      <br>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Reverie, get all your reveries here',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
