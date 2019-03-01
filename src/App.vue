<template>
  <v-app>
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
    <the-navigation />
  </v-app>
</template>

<script>
import TheNavigation from './components/TheNavigation';

export default {
  components: {
    TheNavigation
  }
};
</script>
