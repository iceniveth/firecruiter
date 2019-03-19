<template>
  <v-app>
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
    <!-- <v-bottom-nav absolute
                  app
                  :fixed="true"
                  :value="true">
      <v-btn>
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>
    </v-bottom-nav> -->
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
