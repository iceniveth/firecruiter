<template>
  <div>
    <v-toolbar
      dense
      color="primary"
      class="primaryText--text">
      <v-toolbar-title>Work Experience</v-toolbar-title>
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
            <v-textarea
              label="Company"
              rows="1"
              auto-grow
              v-model="company"></v-textarea>
          </v-flex>

          <v-flex>
            <v-text-field
              label="Position"
              v-model="position"></v-text-field>
          </v-flex>

          <v-flex>
            <v-btn
              color="primary"
              @click="$emit('saved', {
                from,
                to,
                company,
                position
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
    const { workExperience } = this;
    if (workExperience != null) {
      const { from, to, company, position } = workExperience;
      this.from = from;
      this.to = to;
      this.company = company;
      this.position = position;
    }
  },
  props: {
    workExperience: {
      type: Object
    }
  },
  data() {
    return {
      from: '',
      to: '',
      company: '',
      position: ''
    }
  }
};
</script>

