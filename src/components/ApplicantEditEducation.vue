<template>
  <v-container fluid
               px-0
               mx-0>
    <v-layout column>
      <v-flex v-if="educations.some(e => e)">
        <v-form>
          <v-container pa-0
                       ma-0>
            <applicant-edit-education-item v-for="education in educations"
                                          :key="education.id"
                                          :education="education"
                                          :educationAttainments="educationAttainments"
                                          :educationCourses="educationCourses"
                                          @changeEducation="onchangeEducation"
                                          @deleteEducation="ondeleteEducation"></applicant-edit-education-item>
          </v-container>
        </v-form>
      </v-flex>
      <v-flex>
        <v-btn color="primary"
               outline
               block
               @click="addEducation">Add Education</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ApplicantEditEducationItem from './ApplicantEditEducationItem';
import randomGenerator from '../core/randomGenerator';

export default {
  data() {
    return {
      educationAttainments: [
        'Graduate School',
        'College',
        'Vocational',
        'High School',
        'Elementary'
      ],
      educationCourses: [
        'Graduate School',
        'College',
        'Vocational'
      ],
      educations: [
        {
          id: randomGenerator.getRandomNumber(),
          from: '2000',
          to: '2019',
          attainment: 'College',
          school: 'CPU',
          course: 'BSIT'
        }
      ]
    }
  },
  components: {
    ApplicantEditEducationItem
  },
  watch: {
    educations(e) {
      console.log(e);
    }
  },
  methods: {
    onchangeEducation({ value, id }) {
      const index = this.educations.findIndex(ed => ed.id === id);
      this.educations.splice(index, 1, Object.assign(this.educations[index], value));
    },
    ondeleteEducation(e) {
      const { id } = e;
      const index = this.educations.findIndex((education) => education.id === id);
      this.educations.splice(index, 1);
    },
    addEducation() {
      this.educations.push({
        id: randomGenerator.getRandomNumber(),
        from: null,
        to: null,
        attainment: null,
        school: null,
        course: null
      });
    }
  }
}
</script>

