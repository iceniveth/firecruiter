<template>
  <div>
    <app-navigation-bar title="Applicants"></app-navigation-bar>

    <v-list class="py-0 mt-1"
            two-line>
      <template v-for="applicant in applicants">
        <v-list-tile @click=""
                    ripple>
          <v-list-tile-avatar color="black"
                              size="36">
            <span class="white--text headline">{{ applicant.name.charAt(0).toUpperCase() }}</span>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{ applicant.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ applicant.date }}</v-list-tile-sub-title>
          </v-list-tile-content>
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
      <span>Add Applicant</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  data() {
    return {
      applicants: [
        {
          name: 'Abbati, Angelica Willers',
          date: '2019-01-09'
        },
        {
          name: 'Doe, John Macarter',
          date: '2019-02-13'
        },
        {
          name: 'Lambal, Lorelei Appleyard',
          date: '2019-03-07'
        }
      ]
    };
  }
}
</script>

