<template lang="html">
  <div class="container">
    <div class="form-group">
      {{msgLogin}}
       <label for="exampleInputEmail1">username</label>
       <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" v-model="username">
       <small id="emailHelp" class="form-text text-muted"></small>
     </div>
     <div class="form-group" v-if="isRegistering">
        <label for="exampleInputEmail1">email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        <small id="emailHelp" class="form-text text-muted"></small>
      </div>
     <div class="form-group">
       <label for="exampleInputPassword1">Password</label>
       <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" @keyup.enter="login">
     </div>
     <button type="button" class="btn btn-primary" @click="login">Login</button><br><br>
     or
     <br>
     <button type="button" class="btn btn-secondary" @click="register">Register</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      isRegistering: false,
      msgLogin: ''
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
          this.$router.push('/home')
        })
        .catch(err => {
          console.log(err)
        })
    },
    register () {
      this.isRegistering = true
      this.$http.post('users/register', {
        username: this.username,
        password: this.password,
        email: this.email
      })
        .then(resp => {
          this.username = ''
          this.email = ''
          this.password = ''
          this.register = false
          this.msgLogin = 'User created! Please Log in with your username/password'
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
