<template>
  <div>
    <app-navigation-bar title="Applicant"></app-navigation-bar>
    
    <v-tabs
      v-model="tab"
      centered
      color="grey lighten-5">
      <v-tab
        href="#Detail"
        active-class="accent--text">Detail</v-tab>
      <v-tab
        href="#Applications"
        active-class="accent--text">Applications</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        value="Detail"
        py-0>
        <v-container
          py-0>
          <v-layout column>
            <v-flex>
              <v-subheader>Personal Information</v-subheader>

              <v-card>
                <v-list>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>Applicant Number</v-list-tile-sub-title>
                      <v-list-tile-title>{{ applicantNumber }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>Full Name</v-list-tile-sub-title>
                      <v-list-tile-title>{{ fullName }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>Gender</v-list-tile-sub-title>
                      <v-list-tile-title>{{ gender }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>Birth Date</v-list-tile-sub-title>
                      <v-list-tile-title>{{ birthDate }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>Civil Status</v-list-tile-sub-title>
                      <v-list-tile-title>{{ civilStatus }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>City Address</v-list-tile-sub-title>
                      <v-list-tile-title>{{ cityAddress }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>

                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-sub-title>Provincial Address</v-list-tile-sub-title>
                      <v-list-tile-title>{{ provincialAddress }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>

            <v-flex v-if="educations.some(e => e)">
              <v-subheader>Education</v-subheader>

              <v-card>
                <v-list>
                  <v-list-tile
                    v-for="(education, index) in educations"
                    :key="index">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ education.from }} - {{ education.to }} <span class="grey--text"> | </span> {{ education.school }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ education.attainment }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>

            <v-flex v-if="workExperiences.some(e => e)">
              <v-subheader>Work Experience</v-subheader>
              
              <v-card>
                <v-list>
                  <v-list-tile
                    v-for="(workExperience, index) in workExperiences"
                    :key="index">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ workExperience.from }} - {{ workExperience.to }} <span class="grey--text"> | </span> {{ workExperience.company }}</v-list-tile-title>
                      <v-list-tile-sub-title>{{ workExperience.position }}</v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
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
             @click="editApplicant">
        <v-icon color="accentText">edit</v-icon>
      </v-btn>
      <span>Edit Applicant</span>
    </v-tooltip>
      </v-tab-item>

      <v-tab-item value="Applications" py-0>
        <v-container py-0>
          <v-layout column>
            <v-flex>
              <v-subheader>Applications</v-subheader>
              <applicant-applications
                :applications="applications"></applicant-applications>           
            </v-flex>
          </v-layout>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import routes from '../router/routes';
import ApplicantApplications from '../components/ApplicantApplications';

export default {
  components: {
    ApplicantApplications
  },
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      tab: 'Detail',
      applicantNumber: '123',
      fullName: 'Tan, Kenneth Ken L.',
      gender: 'Male',
      birthDate: '08-07-2010',
      civilStatus: 'Single',
      cityAddress: 'Iloilo City',
      provincialAddress: 'Iloilo City',
      educations: [
        { from: '03-10-2010', to: '04-11-2011', attainment: 'Elementary', school: 'Central Philippine University', course: '' }
      ],
      workExperiences: [
        { from: '05-21-2005', to: '01-24-2010', company: 'Life Bank Foundation', position: 'Accountant' }
      ],
      applications: [
        {
          requisitionId: '1',
          number: '19-0001',
          position: 'Accountant',
          source: 'Walk-In',
          sourceFrom: '',
          processes: [
            { id: '1', process: 'Screening', date: '01-03-2019', status: 'Recommended', remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { id: '2', process: 'Initial Interview', date: '01-05-2019', status: 'Not Recommended', remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
          ]
        },
        {
          requisitionId: '2',
          number: '19-0002',
          position: 'Support',
          source: 'Walk-In',
          sourceFrom: '',
          processes: [
            { id: '1', process: 'Screening', date: '01-03-2019', status: 'Recommended', remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
            { id: '2', process: 'Initial Interview', date: '01-05-2019', status: 'Not Recommended', remarks: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
          ]
        }
      ]
    }
  },
  methods: {
    editApplicant() {
      this.$router.push({
        name: routes.applicantEdit.name,
        params: {
          id: this.$route.params.id
        }
      });
    }
  }
};
</script>
