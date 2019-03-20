<template>
  <v-expansion-panel expand>
    <v-expansion-panel-content
      v-for="application in applications"
      :key="application.id"
      popout>
      <template v-slot:header>
        <span>
          <span class="grey--text pr-2">{{ application.number }}</span> 
          <span>{{ application.position }}</span>  
        <span>
      </template>

      <v-container>
        <v-layout>
          <v-flex>
            <v-tooltip right>
              <v-btn
                icon
                color="accent"
                slot="activator"
                @click="newProcess">
                <v-icon>add</v-icon>
              </v-btn>
              <span>Add Process</span>
            </v-tooltip>
          </v-flex>
        </v-layout>

        <v-layout>
          <v-flex ml-2>

            <v-timeline dense>
              <v-timeline-item
                v-for="process in application.processes"
                :key="process.id"
                :color="process.status === 'Recommended' ? 'primary' : 'accent'"
                small
                fill-dot>
                <v-layout>
                  <v-flex
                    xs6
                    sm3
                    md3
                    v-show="$vuetify.breakpoint.smAndUp">
                    <strong>{{ process.date }}</strong>
                    <div>{{ process.status }}</div>
                  </v-flex>
                  <v-flex 
                    xs3
                    sm6
                    v-show="$vuetify.breakpoint.smAndUp">
                    <strong>{{ process.process }}</strong>
                    <div class="caption">{{ process.remarks }}</div>
                  </v-flex>
                  <v-flex v-show="$vuetify.breakpoint.xs">
                    <strong>{{ process.date }}</strong>
                    <div class="mb-2">{{ process.status }}</div>
                    <strong>{{ process.process }}</strong>
                    <div class="caption">{{ process.remarks }}</div>
                  </v-flex>
                  <v-flex
                    xs3
                    class="text-xs-right">
                    <v-tooltip bottom>
                      <v-btn
                        icon
                        slot="activator"
                        @click="editProcess(process)">
                        <v-icon color="grey">edit</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <v-btn
                        icon
                        slot="activator">
                        <v-icon color="grey">delete</v-icon>
                      </v-btn>
                      <span>Delete</span>
                    </v-tooltip>
                  </v-flex>
                </v-layout>
              </v-timeline-item>
            </v-timeline>

            <v-dialog
              v-model="dialogProcessEdit"
              width="500">
              <v-card>
                <application-process-edit 
                  :key="dialogProcessEdit"
                  :process="selectedProcess"
                  @close="dialogProcessEdit = false"></application-process-edit>
              </v-card>
            </v-dialog>

          </v-flex>
        </v-layout>
      </v-container>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import ApplicationProcessEdit from '../components/ApplicationProcessEdit';

export default {
  components: {
    ApplicationProcessEdit
  },
  props: {
    applications: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogProcessEdit: false,
      selectedProcess: null
    }
  },
  methods: {
    newProcess() {
      this.selectedProcess = null;
      this.dialogProcessEdit = true;
    },
    editProcess(process) {
      this.selectedProcess = process;
      this.dialogProcessEdit = true;
    }
  }
}
</script>

