<template>
<div>
  <nav class="nav" tabindex="-1" onclick="this.focus()">
    <div class="container">
      <router-link to="/" class="pagename current">Reverie</router-link>
      <router-link to="/explore">Gallery</router-link>
      <router-link to="/features">Features</router-link>
      <router-link to="/pricing">Pricing</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">SignUp</router-link>
    </div>
  </nav>
  <button class="btn-close btn btn-sm">x</button>
</div>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style>
</style>
