<template>
  <v-toolbar dense>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="ml-2">{{ title }}</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

