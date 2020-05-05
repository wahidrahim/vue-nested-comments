import Vue from 'vue';
import App from './App.vue';

import { timeAgo } from './utils/filters';

Vue.config.productionTip = false;

Vue.filter('timeAgo', timeAgo);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
