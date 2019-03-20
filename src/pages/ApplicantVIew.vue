<template>
  <div>
    <app-navigation-bar title="Applicant"></app-navigation-bar>
    <v-container>
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
  </div>
</template>

<script>
import routes from '../router/routes';

export default {
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
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
