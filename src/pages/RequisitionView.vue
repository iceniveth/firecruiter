<template>
  <div>
    <app-navigation-bar title="Requisition"></app-navigation-bar>
    <v-container pt-0>
      <v-layout column>
        <v-flex>
          <v-subheader>Detail</v-subheader>
          <v-card>
            <v-list>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>Requisition Number</v-list-tile-sub-title>
                  <v-list-tile-title>1234567</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>Position</v-list-tile-sub-title>
                  <v-list-tile-title>CEO</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>Date</v-list-tile-sub-title>
                  <v-list-tile-title>05-10-2019</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>Due</v-list-tile-sub-title>
                  <v-list-tile-title>06-15-2019</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-sub-title>Staff Needed</v-list-tile-sub-title>
                  <v-list-tile-title>5</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>

        <v-flex>
          <v-subheader>Recruitment Funnel</v-subheader>
          <v-card>
            <canvas id="recruitmentFunnel" width="100" height="30"></canvas>
          </v-card>
        </v-flex>

        <v-flex>
          <v-subheader>Applicants</v-subheader>
          <v-card>
            <v-list
              class="py-0 mt-1"
            >
              <template v-for="applicant in applicants">
                <v-list-tile @click="">
                  <v-list-tile-avatar color=""
                                      size="36">
                    <span class="headline">{{ applicant.name.charAt(0).toUpperCase() }}</span>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>{{ applicant.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ applicant.date }} - {{ applicant.process }}</v-list-tile-sub-title>
                  </v-list-tile-content>

                </v-list-tile>

                <v-divider></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-flex>

        
      </v-layout>
    </v-container>

    <v-tooltip left>
      <v-btn fab
             slot="activator"
             color="accent"
             bottom
             right
             fixed
             @click="gotoCreateRequisition">
        <v-icon color="accentText">edit</v-icon>
      </v-btn>
      <span>Edit Requisition</span>
    </v-tooltip>
  </div>
</template>

<script>
import Chart from 'chart.js';
import routes from '../router/routes';



export default {
  mounted() {
    const ctx = document.getElementById('recruitmentFunnel');
    const chart = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: [
          'Screening',
          'Initial Interview',
          'Screening Test',
          'Preliminary Interview',
          'Final Interview',
          'Background Check',
          'Processing Requirements',
          'Waiting for Deployment',
          'Hired'
        ],
        datasets: [{
          label: 'Recruitment Funnel',
          data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3],
          // backgroundColor: [
          //   'rgba(255, 99, 132, 0.2)',
          //   'rgba(54, 162, 235, 0.2)',
          //   'rgba(255, 206, 86, 0.2)',
          //   'rgba(75, 192, 192, 0.2)',
          //   'rgba(153, 102, 255, 0.2)',
          //   'rgba(255, 159, 64, 0.2)'
          // ],
          // borderColor: [
          //   'rgba(255, 99, 132, 1)',
          //   'rgba(54, 162, 235, 1)',
          //   'rgba(255, 206, 86, 1)',
          //   'rgba(75, 192, 192, 1)',
          //   'rgba(153, 102, 255, 1)',
          //   'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 0
        }]
      }
    })
  },
  data() {
    return {
      detail: {

      },
      applicants: [
        {
          name: 'Abbati, Angelica Willers',
          date: '2019-01-09',
          process: 'Initial Interview'
        },
        {
          name: 'Doe, John Macarter',
          date: '2019-02-13',
          process: 'Processing Requirements'
        },
        {
          name: 'Lambal, Lorelei Appleyard',
          date: '2019-03-07',
          process: 'Waiting for Deployment'
        }
      ]
    }
  },
  methods: {
    gotoCreateRequisition() {
      this.$router.push({
        name: routes.requisitionCreate.name
      });
    }
  }
}
</script>

