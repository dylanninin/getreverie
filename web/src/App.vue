<template>
  <div id="app">
    <LayoutHeader></LayoutHeader>
    <div class="container">
      <router-view class="view"></router-view>
    </div>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutHeader from './views/LayoutHeader'
import LayoutFooter from './views/LayoutFooter'

export default {
  name: 'app',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style>
#app {
  padding-left: 5%;
  padding-right: 5%;
}

.view {
  min-height: 400px;
  padding-bottom: 50px;
}
</style>
