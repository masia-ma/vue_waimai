<template>
  <div>
    <footer class="footer_guide border-1px">
      <a href="javascript:;" class="guide_item" 
      :class="{on: $route.path == '/msite'}"
      @click="$router.replace('/msite')"
      >
        <span class="item_icon">
          <i class="iconfont icon-icon-waimai"></i>
        </span>
        <span>外卖</span>
      </a>
      <a href="javascript:;" class="guide_item" 
      :class="{on: $route.path == '/search'}"
      @click="$router.push('search')"
      >
        <span class="item_icon">
          <i class="iconfont icon-SearchIconCopyx"></i>
        </span>
        <span>搜索</span>
      </a>
      <a href="javascript:;" class="guide_item" 
      :class="{on: $route.path == '/order'}"
      @click="$router.push('order')"
      >
        <span class="item_icon">
          <i class="iconfont icon-icon_dingdan"></i>
        </span>
        <span>订单</span>
      </a>
      <a href="javascript:;" class="guide_item" 
      :class="{on: $route.path == '/profile'}"
      @click="$router.push('profile')">
        <span class="item_icon">
          <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntouxianxing"></i>
        </span>
        <span>我的</span>
      </a>
    </footer>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
      return {

      }
  },
  components: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../commons/stylus/mixins.styl'

  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #ffffff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on 
        color #02a774
      span 
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont 
          font-size 22px

 
</style>
