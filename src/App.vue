<template>
  <v-app>
    <v-content>
      <router-view :key="$route.fullPath" />
    </v-content>
  </v-app>
</template>

<script>
export default {
  
};
</script>
