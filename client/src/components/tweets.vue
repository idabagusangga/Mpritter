<template lang="html">
  <div class="">
    <div class="card text-white bg-info mb-3">
    <div class="card-header">Tweet</div>
    <div class="card-body">
      <h4 class="card-title">{{twet.ownersId[0].username}}</h4>
      <img :src="twet.ownersId[0].profilePic" alt="">
      <p class="card-text">{{twet.post}}</p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ['twet']
}
</script>

<style lang="css">
</style>
