<template>
<div>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col c3">
          <h5>Explore</h5>
          <ul>
          <li><router-link to="/explore">Gallery</router-link></li>
          <li><router-link to="/features">Features</router-link></li>
          <li><router-link to="/pricing">Pricing</router-link></li>
          <li><router-link to="/faq">FAQ</router-link></li>
          </ul>
        </div>
        <div class="col c3">
          <h5>More</h5>
          <ul>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/privacy">Privacy</router-link></li>
          <li><router-link to="/terms">Terms</router-link></li>
          </ul>
        </div>
        <div class="col c3">
          <h5>Contact</h5>
          <p>
            If you have any questions or just want to say hi,
            contact us at <a href="mailto:support@getreverie.com">support@getreverie.com</a>.
          </p>
        </div>
        <div class="col c3">
          <h5>US</h5>
          <ul>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Wechat</a></li>
          <li><a href="#">Weibo</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'LayoutFooter'
}
</script>

<style scoped>
footer {
  border-top: 1px dashed gray;
}

ul {
  list-style: none;
}

li {
  margin-left: -20px;
}
</style>
