<template>
  <div id="app" style="display: flex;justify-content: center;" >
    <!--设立一个div-->
    <div>
        <h2>注册表单</h2>
        <br>
        <!--input的应用-->
        <label>用户名称</label>
        <input v-model="username" placeholder="用户名称"><br><br>
        <label>密码</label>
        <input v-model="password" type="password" placeholder="输入密码"><br><br>
        <label>重复输入密码</label>
        <input type="password" v-model="rePassword" placeholder="重复输入密码"><br><br>
        <label>性别</label>
        <input type="radio" id="male" value="male" v-model="sex">
        <label for="male">male</label>
        <input type="radio" id="female" value="female" v-model="sex">
        <label for="female">female</label><br><br>
        <label>爱好</label>
        <input type="checkbox" id="basketball" value="蓝球" v-model="hobby">
        <label for="basketball">篮球</label>
        <input type="checkbox" id="football" value="足球" v-model="hobby">
        <label for="football">足球</label>
        <input type="checkbox" id="other" value="其他" v-model="hobby">
        <label for="other">其他</label><br><br>
        <label>职业</label>
        <select v-model="work">
            <option disabled value="">请选择</option>
            <option>学生</option>
            <option>工作</option>
            <option>其他</option>
        </select><br><br>
        <label>备注</label>
        <textarea v-model="note" placeholder="备注"></textarea><br><br>
        <input @keyup.enter="submit">
        <button v-on:click="submit" >提交</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'login',
  data() { 
    return {
        username: '',
        password: '',
        rePassword: '',
        sex: '',
        hobby: [],
        work: '',
        note: ''
    }
  },
  methods: {
    submit() {
    }
  }
}
</script>
<style>
  html {
    background-color: #B5DEF2;
  }
  /* .wrapper {
    margin: 0 0 0 auto;
    width: 884px;
  } */
  .loginBox {
      background-color: #F0F4F6;
      /*上divcolor*/
      border: 1px solid #BfD6E1;
      border-radius: 5px;
      color: #444;
      font: 14px 'Microsoft YaHei', '微软雅黑';
      margin: 0 auto;
      width: 388px
  }
  
  .loginBox .loginBoxCenter {
      border-bottom: 1px solid #DDE0E8;
      padding: 24px;
  }
  
  .loginBox .loginBoxCenter p {
      margin-bottom: 10px
  }
  
  .loginBox .loginBoxButtons {
      /*background-color: #F0F4F6;*/
      /*下divcolor*/
      border-top: 0px solid #FFF;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      line-height: 28px;
      overflow: hidden;
      padding: 20px 24px;
      vertical-align: center;
      filter: alpha(Opacity=80);
      -moz-opacity: 0.5;
      opacity: 0.5;
  }
  
  .loginBox .loginInput {
      border: 1px solid #D2D9dC;
      border-radius: 2px;
      color: #444;
      font: 12px 'Microsoft YaHei', '微软雅黑';
      padding: 8px 14px;
      margin-bottom: 8px;
      width: 310px;
  }
  
  .loginBox .loginInput:FOCUS {
      border: 1px solid #B7D4EA;
      box-shadow: 0 0 8px #B7D4EA;
  }
  
  .loginBox .loginBtn {
      background-image: -moz-linear-gradient(to bottom, blue, #85CFEE);
      border: 1px solid #98CCE7;
      border-radius: 20px;
      box-shadow: inset rgba(255, 255, 255, 0.6) 0 1px 1px, rgba(0, 0, 0, 0.1) 0 1px 1px;
      color: #444;
      /*登录*/
      cursor: pointer;
      float: right;
      font: bold 13px Arial;
      padding: 10px 50px;
  }
  
  .loginBox .loginBtn:HOVER {
      background-image: -moz-linear-gradient(to top, blue, #85CFEE);
  }
  
  .loginBox a.forgetLink {
      color: #ABABAB;
      cursor: pointer;
      float: right;
      font: 11px/20px Arial;
      text-decoration: none;
      vertical-align: middle;
      /*忘记密码*/
  }
  
  .loginBox a.forgetLink:HOVER {
      color: #000000;
      text-decoration: none;
      /*忘记密码*/
  }
  
  .loginBox input#remember {
      vertical-align: middle;
  }
  
  .loginBox label[for="remember"] {
      font: 11px Arial;
  }
</style>