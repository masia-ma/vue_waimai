<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from '@/components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  data () {
    return {

    }
  },
  components: {
    FooterGuide
  },
  watch: {
    $route: function () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
// #app {
//   font-family: 'Avenir', Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }


  #app
    width 100%
    height 100%
    background #f5f5f5
    position relative
</style>
