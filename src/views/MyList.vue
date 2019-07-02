<template>
  <div>
    <ActivityList
      :value="savedActivities"
      @activity-ckeck="checkActivity"
      @activity-clear-click="handleActivityClear"
    ></ActivityList>

    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Clear all saved activities?</v-card-title>
        <v-card-text>You will lose all progress towards existent activities.</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="cancelClear">Cancel</v-btn>
          <v-btn color="red" flat @click="okClear">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';

import ActivityList from '@/components/ActivityList.vue';
import { Activity } from '@/models/Activity';

@Component({
  components: {
    ActivityList,
  },
  computed: {
    ...mapState(['savedActivities']),
  },
  methods: {
    ...mapMutations(['checkActivity', 'clearActivities']),
  },
})
export default class MyList extends Vue {
  private dialog = false;
  private savedActivities!: Activity[]; // is assigned via mapState
  private clearActivities!: () => void; // is assigned via mapMutations

  private handleActivityClear() {
    this.dialog = true;
  }
  private cancelClear() {
    this.dialog = false;
  }
  private okClear() {
    this.dialog = false;
    this.clearActivities();
  }
}
</script>
