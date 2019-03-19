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

              <v-layout column>
                <v-flex>
                  <div class="subheading grey--text">Educations</div>
                </v-flex>

                <v-flex>
                  <v-list v-if="educations.some(e => e)">
                    <v-list-tile
                      v-for="(education, index) in educations"
                      :key="index"
                      @click="editEducation(education)">
                      <v-list-tile-content>
                        <v-list-tile-title>{{ education.from }} - {{ education.to }} <span class="grey--text"> | </span> {{ education.school }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ education.attainment }}</v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-tooltip bottom>
                          <v-btn
                            icon
                            slot="activator"
                            @click="educations.splice(index, 1)">
                            <v-icon color="grey">delete</v-icon>
                          </v-btn>
                          <span>Delete</span>
                        </v-tooltip>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-flex>

                <v-flex>
                  <v-btn 
                    block
                    color="primary"
                    outline
                    @click="addEducation">Add Education</v-btn>
                </v-flex>
              </v-layout>

              <v-layout column>
                <v-flex>
                  <div class="subheading grey--text">Work Experiences</div>
                </v-flex>

                <v-flex>
                  <v-list v-if="workExperiences.some(e => e)">
                    <v-list-tile
                      v-for="(workExperience, index) in workExperiences"
                      :key="index"
                      @click="editWorkExperience(workExperience)">
                      <v-list-tile-content>
                        <v-list-tile-title>{{ workExperience.from }} - {{ workExperience.to }} <span class="grey--text"> | </span> {{ workExperience.company }}</v-list-tile-title>
                        <v-list-tile-sub-title>{{ workExperience.position }}</v-list-tile-sub-title>
                      </v-list-tile-content>

                      <v-list-tile-action>
                        <v-tooltip bottom>
                          <v-btn
                            icon
                            slot="activator"
                            @click="workExperiences.splice(index, 1)">
                            <v-icon color="grey">delete</v-icon>
                          </v-btn>
                          <span>Delete</span>
                        </v-tooltip>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-flex>

                <v-flex>
                  <v-btn 
                    block
                    color="primary"
                    outline
                    @click="addWorkExperience">Add Work Experience</v-btn>
                </v-flex>
              </v-layout>

              <v-layout>
                <v-flex>
                  <v-btn
                    color="primary">Save</v-btn>
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
        <applicantEducationEdit
          :key="dialogEducation"
          :education="selectedEducation"
          @close="dialogEducation = false"
          @saved="onEducationSaved"></applicantEducationEdit>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="dialogWorkExperience"
      width="500">
      <v-card>
        <applicantWorkExperienceEdit
          :key="dialogWorkExperience"
          :workExperience="selectedWorkExperience"
          @close="dialogWorkExperience = false"
          @saved="onWorkExperienceSaved"></applicantWorkExperienceEdit>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import ApplicantEducationEdit from '../components/ApplicantEducationEdit';
import ApplicantWorkExperienceEdit from '../components/ApplicantWorkExperienceEdit';

export default {
  components: {
    ApplicantEducationEdit,
    ApplicantWorkExperienceEdit
  },
  data() {
    return {
      dialogEducation: false,
      dialogWorkExperience: false,
      genders: [
        'Male',
        'Female'
      ],
      civilStatuses: [
        'Single',
        'Married',
        'Widowed',
        'Divorced'
      ],
      educations: [
        { from: '03-10-2010', to: '04-11-2011', attainment: 'Elementary', school: 'Central Philippine University', course: '' }
      ],
      workExperiences: [],

      selectedEducation: null,
      selectedWorkExperience: null
    }
  },
  methods: {
    addEducation() {
      this.selectedEducation = null;
      this.dialogEducation = true;
    },
    editEducation(education) {
      this.selectedEducation = education;
      this.dialogEducation = true;
    },
    addWorkExperience() {
      this.selectedWorkExperience = null;
      this.dialogWorkExperience = true;
    },
    editWorkExperience(workExperience) {
      this.selectedWorkExperience = workExperience;
      this.dialogWorkExperience = true;
    },
    onEducationSaved(education) {
      this.educations.push(education);
      this.dialogEducation = false;
    },
    onWorkExperienceSaved(work) {
      this.workExperiences.push(work);
      this.dialogWorkExperience = false;
    }
  }
}
</script>

