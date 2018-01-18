<template lang="html">
  <div class="content">
    <h1>Tweets</h1>
    <postTweet @newPost/>
    <div class="row">
      <div class="">
        <h3>All Tweets</h3>
        <AllTweets v-for="twit in tweets" :twet="twit" :key="twit._id"/>
      </div>
      <div class="search">
        <h3>Search HashTags</h3>
        <searchBar @searchResults="searchResultsFinal"/>
        <searchResult :resultSearch="searches"/>
      </div>
    </div>
  </div>
</template>

<script>
import postTweetButton from '@/components/addTweet'
import AllTweets from '@/components/tweets'
import searchResult from '@/components/searchResult'
import searchBar from '@/components/searchBar'
export default {
  data () {
    return {
      tweets: [],
      AllTweets: [],
      searches: []
    }
  },
  components: {
    postTweet: postTweetButton,
    AllTweets: AllTweets,
    searchResult: searchResult,
    searchBar: searchBar
  },
  methods: {
    getAllTweets () {
      this.$http.get('/tweets')
        .then(resp => {
          this.tweets = resp.data.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    pushPost (post) {
      this.tweets.unshift(post)
    },
    searchResultsFinal (result) {
      this.searches = result
    }
  },
  created () {
    this.getAllTweets()
  }
}
</script>

<style lang="css">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search {
  margin-left: 25px;
}
</style>
