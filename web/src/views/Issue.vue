<template>
  <div id="issue">
    <SubscribeMe :storyId="issue.id">Subscribe My List</SubscribeMe>
    <div class="issue-detail">
      <div class="issue-title">
        {{ issue.title }} - ISSUE #{{ issue.no }}
      </div>
      <div class="issue-header">
        <img :src="issue.logo" alt="logo"/>
        <div>
          {{ issue.date }} - ISSUE #{{ issue.no }}
        </div>
        <h3>{{ issue.author.name }}</h3>
        <div>
          {{ issue.description }}
        </div>
      </div>
      <div class="issue-items">
        <div class="issue-item" v-for="i in issue.items">
          <div class="item">
            <div class="item-title"><a :href="i.url">{{ i.title }}</a></div>
            <div class="item-slug">{{ i.url }} - <a :href="i.url_share">Share</a></div>
            <div class="item-content">
              {{ i.content }}
            </div>
            <div class="item-image" v-if="i.nav_img">
              <img :src="i.nav_img" />
            </div>
          </div>
        </div>
      </div>
      <div class="issue-footer">
        <p>Do you enjoy receiving this? Please share it:</p>
        <div>
          <span><a class="btn btn-b btn-sm smooth">Twitter</a></span>
          <span><a class="btn btn-b btn-sm smooth">Facebook</a></span>
        </div>
        <div>
          <p>Carefully curated by Water and Music with <a href="#">Reverie</a></p>
          <p>If you were forwarded this newsletter and you like it, you can subscibe <a href="#">here</a>.</p>
          <p>If you don't what these updates anymore, please unsubsribe <a href="#">here</a>.</p>
        </div>
      </div>
      <div class="issue-share">
        <div>
          <a class="btn btn-b btn-sm smooth">Facebook</a>
          <a class="btn btn-b btn-sm smooth">Twitter</a>
          <a class="btn btn-b btn-sm smooth">Weibo</a>
          <a class="btn btn-b btn-sm smooth">Wechat</a>
        </div>
      </div>
    </div>
    <SubscribeMe :storyId="issue.id">Subscribe My List</SubscribeMe>
  </div>
</template>

<script>
import SubscribeMe from '../components/SubscribeMe'

const seed = require('../store/seed.json')

export default {
  name: 'Issue',
  components: {
    SubscribeMe
  },
  data () {
    const issue = seed.issue
    issue.items = Array.from({ length: 10 }, () => issue.item)
    issue.author = seed.author
    return {
      issue
    }
  }
}
</script>

<style scoped>
#issue {
  text-align: center;
}

.issue-detail {
  margin: 2% 10%;
  border: 1px solid gray;
}

.issue-title {
  border-bottom: 1px solid gray;
  line-height: 5em;
}

.issue-header {
  margin-left:20px;
  margin-right:20px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
}

.issue-footer {
  margin-left:20px;
  margin-right:20px;
  border-top: 1px solid gray;
}

.issue-share {
  border-top: 1px solid gray;
  padding: 5px 0;
}

.item {
  margin: 20px 20px;
  text-align: justify;
}

.item-title {
  line-height: 2em;
}

.item-slug {
  margin-bottom: 5px;
}

</style>
