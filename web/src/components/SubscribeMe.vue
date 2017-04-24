<template>
  <div>
    <h3><slot></slot></h3>
    <div class="subcribe-me">
      <span class="addon" >✉</span><input type="text" v-model="email" class="smooth" placeholder="your email address"/>
      <a class="btn btn-b btn-sm smooth disabled" @click="subscribe">Subscribe Now</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscribeMe',
  props: {
    storyId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      email: '',
      isDisabled: true
    }
  },
  methods: {
    subscribe () {
      // TODO: SubscribeMe action
      console.log(`${this.email} will subscribe story id=${this.storyId}`)
    }
  }
}
</script>
