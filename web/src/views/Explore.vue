<template>
  <div id="explore">
    <h2>Explore awesome galleries here.</h2>
    <template v-for="c in categories">
      <section class="category">
        <h3 class="category-title">{{ c.title }}<i class="ico">{{ c.icon }}</i></h3>
        <div class="category-content row">
          <template v-for="s in c.stories">
            <Card class="col c3" :card="s"></Card>
          </template>
        </div>
      </section>
    </template>
    <h2>Create your own stories now</h2>
  </div>
</template>

<script>
import Card from '../components/Card'

const seed = require('../store/seed.json')

export default {
  name: 'Explore',
  components: {
    Card
  },
  data () {
    const category = seed.category
    category.stories = Array.from({ length: 4 }, () => seed.story)
    const categories = Array.from({ length: 10 }, () => category)
    return {
      categories
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}

.category-title {
  border-bottom: 1px solid gray;
}

.category-content {

}

</style>
