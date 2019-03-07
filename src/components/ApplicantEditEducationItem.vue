<template functional>
  <v-layout pa-0
            mx-0>
    <v-flex xs2 
            sm1>
      <v-btn color="grey--text"
             icon
             class="mt-3"
             @click="listeners.deleteEducation(props.education)">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-flex>
    <v-flex>
      <v-text-field label="From"
                    :value="props.from"
                    @change="(e) => listeners.changeEducation(Object.assign(props.education, { from: e }))"></v-text-field>
    </v-flex>
    <v-flex>
      <v-text-field label="To"
                    :value="props.to"
                    @change="(e) => listeners.changeEducation(Object.assign(props.education, { to: e }))"></v-text-field>
    </v-flex>
    <v-flex>
      <v-select label="Attainment"
                :items="props.educationAttainments"
                :value="props.education.attainment"
                @change="(e) => listeners.changeEducation(Object.assign(props.education, { 
                  attainment: e,
                  course: props.educationCourses.indexOf(props.education.attainment) > -1 ? props.education.course : null
                }))"></v-select>
    </v-flex>
    <v-flex v-show="props.educationCourses.indexOf(props.education.attainment) > -1">
      <v-text-field label="Course"
                    :value="props.education.course"
                    @change="(e) => listeners.changeEducation(Object.assign(props.education, { course: e }))"></v-text-field>
    </v-flex>
    <v-divider></v-divider>
  </v-layout>
</template>
