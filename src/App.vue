<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid>
        <v-layout align-center justify-center>
          <v-flex xs12 sm10 md8>
            <v-tabs color="cyan" dark slider-color="yellow">
              <v-tab v-for="t in tabs" :key="t.description" ripple :to="t.to">
                {{ t.description }}
              </v-tab>
            </v-tabs>
            <v-card flat>
              <v-container>
                <router-view></router-view>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import Activity from '@/components/Activity.vue';
import ActivityFilters from '@/components/ActivityFilters.vue';

@Component({
  components: {
    Activity,
    ActivityFilters,
  },
})
export default class Home extends Vue {
  private tabs = [{
    description: 'activities',
    to: '/activities',
  }, {
    description: 'my list',
    to: '/my-list',
  }];
}
</script>
