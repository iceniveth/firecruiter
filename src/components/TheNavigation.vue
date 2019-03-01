<template>
  <v-navigation-drawer v-model="drawer"
                       temporary
                       app>
    <v-toolbar dense flat>
      <!-- <v-avatar class="px-0 mx-0">
        <v-icon>add</v-icon>
      </v-avatar> -->
      <v-toolbar-title>Firecruiter</v-toolbar-title>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list class="py-0">
      <v-list-tile v-for="link in links"
                   :key="link.text"
                   @click="$router.push({ name: link.name })">
        <v-list-tile-avatar>
          <v-avatar>
            <v-icon>{{ link.icon }}</v-icon>
          </v-avatar>
        </v-list-tile-avatar>
        
        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex';
import routes from '../router/routes';

export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer;
      },
      set(val) {
        this.$store.commit('setDrawer', val);
      }
    },
    links() {
      return Object.keys(routes)
        .filter(key => routes[key].meta.navigation != null)
        .map(key => Object.assign({}, {
          ...routes[key].meta.navigation,
          name: routes[key].name
        }));
    }
  }
};
</script>

