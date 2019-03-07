<template>
  <div>
    <app-navigation-bar title="New Applicant"></app-navigation-bar>

    <v-form>
      <v-container>
        <h2>Personal Information</h2>
        <v-layout :column="$vuetify.breakpoint.smAndDown">
          <v-flex>
            <v-text-field label="Last Name"
                          type="text"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field label="First Name"
                          type="text"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field label="Middle Name"
                          type="text"></v-text-field>
          </v-flex>
        </v-layout>
        
        <v-layout :column="$vuetify.breakpoint.smAndDown">
          <v-flex>
            <v-select label="Gender"
                      :items="genders"></v-select>
          </v-flex>
          <v-flex>
            <v-text-field label="Birth Date"></v-text-field>
          </v-flex>
          <v-flex>
            <v-select label="Civil Status"
                      :items="civilStatuses"></v-select>
          </v-flex>
        </v-layout>

        <v-layout :column="$vuetify.breakpoint.smAndDown">
          <v-flex>
            <v-text-field label="Contact Number"></v-text-field>
          </v-flex>
          <v-flex>
            <v-text-field label="Email Address"></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout column>
          <v-flex>
            <v-textarea label="City Address"
                        auto-grow
                        rows="1"></v-textarea>
          </v-flex>
          <v-flex>
            <v-textarea label="Provincial Address"
                        auto-grow
                        rows="1"></v-textarea>
          </v-flex>
        </v-layout>

        <h2>Education</h2>
        <applicant-edit-education></applicant-edit-education>

        <h2>Work Experience</h2>

      </v-container>
    </v-form>
  </div>
</template>

<script>
import ApplicantEditEducation from '../components/ApplicantEditEducation';

export default {
  data() {
    return {
      genders: [
        'Male',
        'Female'
      ],
      civilStatuses: [
        'Single',
        'Married',
        'Widowed',
        'Divorced'
      ]
    }
  },
  components: {
    'applicant-edit-education': ApplicantEditEducation
  }
};
</script>

