import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router';
import App from './App.vue';
import AppNavigationBar from './components/AppNavigationBar';

Vue.use(Vuetify);

Vue.component('app-navigation-bar', AppNavigationBar);

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
});
