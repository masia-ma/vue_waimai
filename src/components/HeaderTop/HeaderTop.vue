<template>
  <header class="header">
    <slot name="left"></slot>
    <!-- <span class="header_search">
      <i class="iconfont icon-SearchIconCopyx"></i>
    </span> -->
    <span class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </span>
    <slot name="right"></slot>
    <!-- <span class="header_login">
      <span class="header_login_text">登录|注册</span>
    </span> -->
  </header>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
      return {

      }
  },
  components: {

  },
  props: {
    title: String
  }
}
</script>

<style lang="stylus" stylesheet="stylus">
@import '../../commons/stylus/mixins.styl'

.header
  bottom-border-1px(#ffffff)
  background-color #02a774
  position fixed
  z-index 500
  left 0
  top 0
  width 100%
  height 45px
  .header_search
    position absolute
    left 15px
    top 50%
    transform translateY(-50%)
    width 10%
    height 50%
    display flex
    .iconfont
      font-size 17px
      color #ffffff
  .header_title
    position absolute
    top 50%
    left 50%
    transform translate(-50%, -50%)
    width 50%
    color #fff
    text-align center
    .header_title_text
      font-size 20px
      color #fff
      display block
  .header_login
    font-size 14px
    color #fff
    position absolute
    right 15px
    top 50%
    transform translateY(-50%)
    .header_login_text
      color #fff

 
</style>
