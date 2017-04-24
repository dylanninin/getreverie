<template>
  <div class="card" v-if="card">
    <div class="card-logo">
      <img :src="card.logo" alt="logo"/></i>
    </div>
    <div class="card-content">
      <h4><router-link :to="'/stories/' + card.id">{{ card.title }}</router-link></h4>
      <p>{{ card.description }}</p>
    </div>
    <div v-show="showCardSummary">
      <span>{{ card.statistics.subscribers_count }} Subscribers</span>
      <span>{{ card.statistics.issues_count }} Issues</span>
      <span>
        <a :href="s.url" v-for="s in card.socials">{{ s.name }} </a>
      </span>
    </div>
    <div class="card-subscribe">
      <div v-show="showSubscribeMe">
        <SubscribeMe :storyId="card.id"></SubscribeMe>
      </div>
    </div>
  </div>
</template>

<script>
import SubscribeMe from './SubscribeMe'

export default {
  name: 'Card',
  props: {
    showSubscribeMe: {
      type: Boolean,
      default: false
    },
    showCardSummary: {
      type: Boolean,
      default: false
    },
    card: {
      type: Object,
      required: true
    }
  },
  components: {
    SubscribeMe
  }
}
</script>

<style scoped>
.card {
  padding: 10px;
  box-sizing: border-box;
  box-shadow: 10px -7px 15px darkgray, lightgreen 0px 0px 3px inset;
}

.card-subscribe {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
