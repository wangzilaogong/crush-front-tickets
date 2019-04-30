import Vue from 'vue'
import App from './App'
import store from './store'  

import cards from './pages/cards/index.vue'
import orders from './pages/orders/index.vue'
import account from './pages/account/index.vue'

Vue.component('cards',cards)
Vue.component('orders',orders)
Vue.component('account',account)


Vue.prototype.$store = store  

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
