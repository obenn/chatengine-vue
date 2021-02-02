import Vue from 'vue'
import { VuePlugin } from 'vuera'
import App from './App.vue'

Vue.use(VuePlugin)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
