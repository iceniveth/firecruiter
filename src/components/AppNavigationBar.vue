<template>
  <v-toolbar dense>
    <v-toolbar-side-icon @click="$store.commit('setDrawer', true)"></v-toolbar-side-icon>
    <v-toolbar-title class="ml-2">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <v-btn icon
             slot="activator">
        <v-icon>search</v-icon>
      </v-btn>
      <span>Search</span>
    </v-tooltip>
    
    <v-tooltip bottom>
      <v-btn icon
             slot="activator">
        <v-icon>filter_list</v-icon>
      </v-btn>
      <span>Filter</span>
    </v-tooltip>
    
    <v-tooltip bottom>
      <v-btn icon
             slot="activator">
        <v-icon>delete</v-icon>
      </v-btn>
      <span>Delete</span>
    </v-tooltip>

    <v-tooltip bottom>
      <v-btn icon
             slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <span>More</span>
    </v-tooltip>
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

