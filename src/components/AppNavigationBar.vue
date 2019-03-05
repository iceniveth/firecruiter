<template>
  <v-toolbar app
             dense
             class="mx-0 px-0">
    <v-toolbar-side-icon v-if="!searchMode"
                         @click="$store.commit('setDrawer', true)"></v-toolbar-side-icon>
    <v-toolbar-title v-if="!searchMode"
                     class="ml-2">{{ title }}</v-toolbar-title>


    <v-tooltip bottom
               v-if="searchMode">
      <v-btn icon
             slot="activator"
             v-if="searchMode"
             @click="searchMode = false">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <span>Cancel Search</span>
    </v-tooltip>

    <v-text-field prepend-inner-icon="search"
                  solo
                  flat
                  clearable
                  placeholder="Search"
                  class="pt-2"
                  v-if="searchMode"></v-text-field>
    
    <v-spacer v-if="!searchMode"></v-spacer>

    <v-tooltip bottom
               v-if="!searchMode">
      <v-btn icon
             v-if="!searchMode"
             slot="activator"
             @click="searchMode = true">
        <v-icon>search</v-icon>
      </v-btn>
      <span>Search</span>
    </v-tooltip>
    
    <v-tooltip bottom
               v-if="!searchMode">
      <v-btn icon
             v-if="!searchMode"
             slot="activator">
        <v-icon>filter_list</v-icon>
      </v-btn>
      <span>Filter</span>
    </v-tooltip>
    
    <v-tooltip bottom
               v-if="!searchMode">
      <v-btn icon
             v-if="!searchMode"
             slot="activator">
        <v-icon>delete</v-icon>
      </v-btn>
      <span>Delete</span>
    </v-tooltip>

    <v-tooltip bottom
               v-if="!searchMode">
      <v-btn icon
             v-if="!searchMode"
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
  },
  data() {
    return {
      searchMode: false
    }
  }
}
</script>

