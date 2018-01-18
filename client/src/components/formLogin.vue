<template lang="html">
  <div class="container">
    <div class="form-group">
       <label for="exampleInputEmail1">username</label>
       <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" v-model="username">
       <small id="emailHelp" class="form-text text-muted"></small>
     </div>
     <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" @keyup.enter="login">
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$http.post('/users/login', {
        username: this.username,
        password: this.password
      })
        .then(resp => {
          localStorage.setItem('token', resp.data.token)
          alert(resp)
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
