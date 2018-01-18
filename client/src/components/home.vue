<template lang="html">
  <div class="content">
    <h1>Tweets</h1>
    <div class="container">
      <div class="form-group">
        <label for="exampleTextarea">Post new Tweet Here</label>
        <textarea class="form-control" id="exampleTextarea" rows="2" maxlength="140"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="">
        <h3>All Tweets</h3>
        <div class="card text-white bg-info mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Info card title</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
      <div class="">
        <h3>All Tweets</h3>
        <div class="card text-white bg-info mb-3">
        <div class="card-header">Header</div>
        <div class="card-body">
          <h4 class="card-title">Info card title</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.content {
  margin: auto;
}
.row {
  margin: auto;
}
</style>
