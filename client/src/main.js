import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from './store'
import vuetify from './plugins/vuetify'
import 'animate.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/global/Panel'

Vue.config.productionTip = false
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
