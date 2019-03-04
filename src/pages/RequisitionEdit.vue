<template>
  <div>
    <app-navigation-bar title="Create Requisition"></app-navigation-bar>
    <v-container fluid
                 grid-list-md>
      <v-layout column>
        <v-flex>
          <v-text-field label="Requisition Number"></v-text-field>
        </v-flex>

        <v-flex>
          <v-layout>
            <v-flex>
              <v-text-field label="Date"></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field label="Due"></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        
        <v-flex>
          <v-layout>
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
      </v-layout>
    </v-container>
  </div>
</template>
