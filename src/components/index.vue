<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button large @click="doLogin">登陆</button>
    <span> {{loginData}} </span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() { 
    return {
      loginData: ''
    }
  },
  props: {
    msg: String
  },
  methods: {
    // 服务器通信
    doLogin() {
      APIHTTP.request('user/login', null, 0, (res)=> {
        console.log(res.data);
        this.loginData = res.data
        this.$router.push('/login/')
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
