import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/es5/util/colors';
import router from './router';
import store from './store';
import App from './App.vue';
import AppNavigationBar from './components/AppNavigationBar';

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.darken4,
    primaryText: colors.shades.white,
    accent: colors.orange.accent3,
    accentText: colors.shades.black
  }
});

Vue.component('app-navigation-bar', AppNavigationBar);

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
