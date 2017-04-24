<template>
  <div id="story">
    <h3></h3>
    <Card :showSubscribeMe="true" :showCardSummary="true" :card="story"></Card>
    <div class="issues">
      <h3>Previous Issues</h3>
      <div v-for="issue in story.issues">
        <div class="issue">
          <span class="issue-date">{{ issue.date }}</span>
          <router-link class="issue-link" :to="'/stories/' + issue.id + '/issues/' + issue.id">{{ issue.title }}</router-link>
          -
          <span class="issue-excerpt">{{ issue.excerpt }}</span>
          <span class="issue-no">#{{ issue.no }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card'

const seed = require('../store/seed.json')

export default {
  name: 'Story',
  props: {
    storyId: {
      type: Number,
      required: false
    }
  },
  data () {
    const story = seed.story
    story.issues = Array.from({ length: 16 }, () => seed.issue)
    return {
      story
    }
  },
  components: {
    Card
  }
}
</script>

<style scoped>
#story {
  text-align: center;
  margin-left: 5%;
  margin-right: 5%;
}

.issue {
  margin-top: 5px;
}

.issue-link {
  color: blue;
}

/* TODO: Responsive excerpt */
.issue-excerpt {
}

</style>
