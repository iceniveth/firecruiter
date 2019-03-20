<template>
  <div>
    <v-toolbar
      dense
      color="primary">
      <v-toolbar-title class="primaryText--text">{{ process == null ? 'Add Process' : 'Edit Process' }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click="$emit('close')">
        <v-icon color="primaryText">close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex xs12>
            <v-select 
              label="Process"
              v-model="selectedProcess"
              :items="processes"
              item-text="text"></v-select>
          </v-flex>
          <v-flex xs6>
            <v-text-field
              v-model="date"
              label="Date"></v-text-field>
          </v-flex>
          <v-flex xs6>
            <v-select
              :items="statuses"
              v-model="status"
              label="Status"></v-select>
          </v-flex>
          <v-flex>
            <v-textarea
              v-model="remarks"
              rows="1"
              auto-grow
              label="Remarks"></v-textarea>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-btn
              color="primary">Save</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  mounted() {
    const { process } = this;
    if (process != null) {
      this.date = process.date;
      this.status = process.status;
      this.selectedProcess = process.process;
      this.remarks = process.remarks;
    }
  },
  props: {
    process: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      selectedProcess: null,
      date: '',
      status: '',
      remarks: '',
      statuses: [
        'Recommended',
        'Not Recommended'
      ],
      processes: [
        { order: 10, text: 'Screening' },
        { order: 20, text: 'Initial Interview' },
        { order: 30, text: 'Screening Test' },
        { order: 40, text: 'Preliminary Interview' },
        { order: 50, text: 'Final Interview' },
        { order: 60, text: 'Background Check' },
        { order: 70, text: 'Processing Requirements' },
        { order: 80, text: 'Waiting for Deployment' },
        { order: 90, text: 'Hired' }
      ]
    }
  }
}
</script>

