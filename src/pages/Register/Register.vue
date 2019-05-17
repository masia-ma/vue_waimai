<template>
  <div class="register-container">
    <HeaderTop title="注册">
      <span class="header_search" slot="left" @click="$router.back()">
        <i class="iconfont icon-Back"></i>
      </span>
    </HeaderTop>
    <mu-container v-show="show">
      <mu-form :model="form" ref="form">
        <mu-form-item prop="nickname" label="昵称" help-text="" :rules="nicknameRules">
          <mu-text-field v-model="form.nickname"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="email" label="邮箱" help-text="" :rules="emailRules">
          <mu-text-field v-model="form.email"></mu-text-field>
        </mu-form-item>
         <mu-form-item label="密码" prop="password" :rules="passwordRules">
            <mu-text-field type="password" v-model="form.password" prop="password"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="birthday" label="出生日期">
          <mu-date-input v-model="form.birthday" actions no-display></mu-date-input>
        </mu-form-item>
        <mu-form-item prop="gender" label="性别">
          <mu-radio v-model="form.gender" value="0" label="男"></mu-radio>
          <mu-radio v-model="form.gender" value="1" label="女"></mu-radio>
          <mu-radio v-model="form.gender" value="-1" label="保密"></mu-radio>
        </mu-form-item>
        <mu-form-item prop="bio" label="个人简介">
          <mu-text-field multi-line :rows="3" :rows-max="6" v-model="form.bio"></mu-text-field>
        </mu-form-item>
        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
        </mu-form-item>
      </mu-form>  
    </mu-container>
    <!-- 注册成功 -->
    <mu-slide-left-transition>
      <div class="register_success">
        <div class="mu-transition-box mu-inverse" v-show="!show">
          <h1 class="register-success-title">注册成功,{{time}}后自动登录</h1>
        </div>
      </div>
    </mu-slide-left-transition>

    
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import {reqRegister} from '@/api/index'

export default {
  data () {
    return {
      nicknameRules: [
        { validate: (val) => !!val, message: '必须填写昵称'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '昵称长度大于3小于10'}
      ],
      emailRules: [
        { validate: (val) => !!val, message: '必须填写邮箱地址'},
        { validate: (val) => (/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/).test(val), message: '输入的邮箱格式错误'},
        // { validate: (val) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val) => !!val, message: '必须填写密码'},
        { validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      form: {
        email: '',
        nickname: '',
        birthday: '',
        gender: '',
        bio: ''
      },  
      show: true,
      time: 3
    }
  },
  components: {
    HeaderTop
  },
  methods: {
    submit () {
      this.loading1 = !this.loading1
      this.$refs.form.validate().then((result) => { // 会执行我们绑定的验证规则，即:rules上面绑定的规则，规则全部通过，返回的result为true
        if (true) { // 验证通过
          // this.$http({
          //   method: 'post',
          //   url: '/users/register',
          //   data: this.form
          // })
          // .then(res => {
          //   console.log(res)
          // })
          // .catch(err => {
          //   console.log(err)
          // })
          reqRegister(this.form)
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })
        }
        this.show = !this.show
        var time = setInterval(() => {
          this.time -- 
          if (!this.time) {
            clearInterval(time)
            // 执行登录
            this.$router.push('/profile')
          }
        }, 1000)
        
      });
    },
    clear () {
      this.$refs.form.clear();
      this.form = {
        username: '',
        password: '',
        isAgree: false
      };
    }
  }
};
</script>
<style scope>

.register-container {
  width: 100%;
  padding: 50px 20px 20px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  overflow: hidden;
  position: relative;
}
.mu-option.is-selected .mu-item {
    color: #009688;
}
.register-success-title {
  margin-top: 50px;
  text-align: center;
  color: #333333;
}
</style>