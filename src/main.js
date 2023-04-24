import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
import PaulMariekeFestivalMegamix from '@/components/PaulMariekeFestivalMegamix.vue';
import home from '@/components/Home.vue';
Vue.use(VueYouTubeEmbed)
Vue.use(VueRouter)

require('./css/styles.css')

Vue.config.productionTip = false

const routes = [
  { path: '/', component: home },
  { path: '/megamix', component: PaulMariekeFestivalMegamix }
]

const router = new VueRouter({routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
