<template lang="html">
  <div class="form-group">
    <label class="col-form-label col-form-label-sm" for="inputSmall">input your search then press enter</label>
    <input class="form-control form-control-sm" type="text" placeholder=".form-control-sm" id="inputSmall" v-model="newSearch" @keyup.enter="search">
  </div>
</template>

<script>
export default {
  methods: {
    data () {
      return {
        newSearch: ''
      }
    },
    search () {
      this.$http.post('/tweets/search', {
        post: this.newSearch
      })
        .then(result => {
          this.newSearch = ''
          this.$emit('searchResults', result)
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
