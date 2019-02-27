import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';

Vue.use(Vuetify);

console.log('index.js');

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
});
