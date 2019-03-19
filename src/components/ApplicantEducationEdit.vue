<template>
  <div>
    <v-toolbar
      dense
      color="primary"
      class="primaryText--text">
      <v-toolbar-title>Education</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="$emit('close')">
        <v-icon color="primaryText">close</v-icon>
      </v-btn>
    </v-toolbar>
    
    <v-form>
      <v-container>
        <v-layout>
          <v-flex>
            <v-text-field
              label="From"
              v-model="from"></v-text-field>
          </v-flex>
          
          <v-flex>
            <v-text-field
              label="To"
              v-model="to"></v-text-field>
          </v-flex>
        </v-layout>

        <v-layout column>
          <v-flex>
            <v-select
              :items="attainments"
              label="Attainment"
              v-model="attainment"></v-select>
          </v-flex>

          <v-flex>
            <v-textarea
              label="School"
              rows="1"
              auto-grow
              v-model="school"></v-textarea>
          </v-flex>

          <v-flex v-if="attainmentWithCourse.indexOf(attainment) > -1">
            <v-text-field
              label="Course"
              v-model="course"></v-text-field>
          </v-flex>

          <v-flex>
            <v-btn
              color="primary"
              @click="$emit('saved', {
                from,
                to,
                attainment,
                school,
                course
              })">Save</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  mounted() {
    const { education } = this;
    if (education != null) {
      const { from, to, school, course, attainment } = education;
      this.from = from;
      this.to = to;
      this.school = school;
      this.course = course;
      this.attainment = attainment;
    }
  },
  props: {
    education: {
      type: Object
    }
  },
  data() {
    return {
      from: '',
      to: '',
      school: '',
      course: '',
      attainment: null,
      attainments: [
        'Elementary',
        'High School',
        'Vocational',
        'College',
        'Graduate'
      ],
      attainmentWithCourse: [
        'Vocational',
        'College',
        'Graduate'
      ]
    }
  }
}
</script>

