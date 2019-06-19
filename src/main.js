import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Scroller from './components/Scroller'
import Loading from './components/Loading'

Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.component('Scroller', Scroller);

Vue.component('Loading', Loading);

Vue.filter('setWh', (url, arg) => {
    if (url == '' || url == null || url == undefined) {
        return url;
    }
    return url.replace(/w\.h/, arg);
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')