<template>
  <div>
    <app-navigation-bar title="Requisitions"></app-navigation-bar>
    
    <v-subheader px="0" mx="0">February</v-subheader>
    <v-list class="py-0 mt-1"
            two-line>
      <v-divider></v-divider>
      <template v-for="requisition in requisitions">
        <v-list-tile @click=""
                      ripple>
          <v-list-tile-avatar>
            <v-avatar color="black"
                      size="36">
              <span class="white--text headline">{{ requisition.position.charAt(0).toUpperCase() }}</span>
            </v-avatar>
          </v-list-tile-avatar>
          
          <v-list-tile-content>
            <v-list-tile-title>{{ requisition.position }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ requisition.number }}</v-list-tile-sub-title>
          </v-list-tile-content>
          
          <v-list-tile-action>
            <v-avatar>{{ requisition.count }} / {{ requisition.needed }}</v-avatar>
          </v-list-tile-action>
        </v-list-tile>
        
        <v-divider></v-divider>
      </template>
    </v-list>
    
    <v-tooltip left>
      <v-btn fab
             slot="activator"
             color="black"
             bottom
             right
             fixed>
        <v-icon color="white">add</v-icon>
      </v-btn>
      <span>Create Requisition</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      requisitions: [
        {
          date: '2019-02-25',
          dateDue: '2019-03-30',
          number: 'LBF-HDM-2001',
          position: 'Software Developer',
          count: 2,
          needed: 3
        },
        {
          date: '2019-02-25',
          dateDue: '2019-04-30',
          number: 'LBF-HDM-2002',
          position: 'Executive Assistant',
          count: 1,
          needed: 2
        }
      ]
    }
  }
};
</script>
