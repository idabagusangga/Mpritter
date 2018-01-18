<template lang="html">
  <div class="container">
    <div class="form-group">
      <label for="exampleTextarea">Post new Tweet Here</label>
      <textarea class="form-control" id="exampleTextarea" rows="2" maxlength="140" v-model="addTweet"></textarea>
    </div>
    <button type="button" class="btn btn-secondary" @click="addPost">Post</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      addTweet: ''
    }
  },
  methods: {
    addPost () {
      let token = localStorage.getItem('token')
      this.$http.post('/tweets', {
        token: token,
        post: this.addTweet
      })
        .then(resp => {
          this.$emit('newPost', resp)
          location.reload()
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="css">
</style>
