// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MuseUI from 'muse-ui'
import Loading from 'muse-ui-loading';
import 'muse-ui/dist/muse-ui.css'
import theme from 'muse-ui/lib/theme'
import * as colors from 'muse-ui/lib/theme/colors'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(MuseUI)
Vue.use(Loading)  
theme.add('custom-theme', {
  primary: colors.teal500,
  secondary: colors.indigo900
})
theme.use('custom-theme')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
