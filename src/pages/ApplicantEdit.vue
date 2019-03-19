<template>
  <div>
    <app-navigation-bar title="Requisition"></app-navigation-bar>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-card>
            <v-container grid-list-md>
              <v-layout column>
                <v-flex>
                  <div class="headline">Applicant</div>
                </v-flex>

                <v-flex>
                  <div class="subheading grey--text">Personal Information</div>
                </v-flex>

                <v-flex>
                  <v-text-field label="Application Number"></v-text-field>
                </v-flex>

                <v-flex>
                  <v-text-field label="Last Name"></v-text-field>
                </v-flex>

                <v-flex>
                  <v-text-field label="First Name"></v-text-field>
                </v-flex>

                <v-flex>
                  <v-text-field label="Middle Name"></v-text-field>
                </v-flex>

                <v-flex>
                  <v-layout :column="$vuetify.breakpoint.xs">
                    <v-flex>
                      <v-select
                        label="Gender"
                        :items="genders"></v-select>
                    </v-flex>

                    <v-flex>
                      <v-text-field label="Birth Date"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex>
                  <v-select
                    :items="civilStatuses"
                    label="Civil Status"></v-select>
                </v-flex>

                <v-flex>
                  <v-textarea 
                    label="City Address"
                    rows="1"
                    auto-grow></v-textarea>
                </v-flex>

                <v-flex>
                  <v-textarea 
                    label="Provincial Address"
                    rows="1"
                    auto-grow></v-textarea>
                </v-flex>

              </v-layout>

              <v-layout>
                <v-flex>
                  <div class="subheading grey--text">Educations</div>
                </v-flex>

              </v-layout>

              
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog
      v-model="dialogEducation"
      width="500">
      <v-card>
        <applicantEducationEdit @close="dialogEducation = false"></applicantEducationEdit>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ApplicantEducationEdit from '../components/ApplicantEducationEdit';

export default {
  components: {
    ApplicantEducationEdit
  },
  data() {
    return {
      dialogEducation: true,
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
  methods: {

  }
}
</script>

