<template>
  <div>
    <app-navigation-bar title="Create Requisition"></app-navigation-bar>
    <v-container>
      <v-layout>
        <v-flex xs12 sm10 offset-sm1 md8 offset-md2>
          <v-card >

            <v-container grid-list-md>
              <v-layout column>
                <v-flex>
                  <div class="headline">Requisition</div>
                </v-flex>

                <v-flex>
                  <v-layout :column="$vuetify.breakpoint.xs">
                    <v-flex>
                      <v-text-field label="Requisition Number"></v-text-field>
                    </v-flex>

                    <v-flex>
                      <v-text-field label="Department"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex>
                  <v-layout :column="$vuetify.breakpoint.xs">
                    <v-flex>
                      <v-text-field label="Date"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="Due"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>
                
                <v-flex>
                  <v-layout :column="$vuetify.breakpoint.xs">
                    <v-flex>
                      <v-text-field label="Position"></v-text-field>
                    </v-flex>
                    <v-flex>
                      <v-text-field label="No. of Applicants"
                                    type="number"
                                    min="1"
                                    value="1"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-flex>

                <v-flex>
                  <v-btn color="primary">Save</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
