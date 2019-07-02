<template>
  <div>
    <Activity
      :value="randomActivity && randomActivity.activity"
      @save-activity-click="saveActivity"
    ></Activity>
    <ActivityFilters @get-activity-click="getActivity"></ActivityFilters>
    <v-snackbar
      :value="showSnackbar"
      @input="snackbarClose"
      color="error"
      :timeout="2000"
    >
      {{ randomActivity && randomActivity.error }}
      <v-btn
        dark
        flat
        @click="snackbarClose"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapMutations, mapActions } from 'vuex';

import Activity from '@/components/Activity.vue';
import ActivityFilters from '@/components/ActivityFilters.vue';
import { Activity as ActivityModel } from '@/models/Activity';
import { ActivityError } from '@/models/ActivityError';
import { State } from '@/store';

@Component({
  components: {
    Activity,
    ActivityFilters,
  },
  computed: {
    ...mapState({
      randomActivity: (state: State) => state.randomActivity,
      showSnackbar: (state: State) => {
        return state.randomActivity && 'error' in state.randomActivity;
      },
    }),
  },
  methods: {
    ...mapMutations(['updateRandomActivity', 'saveActivity']),
    ...mapActions(['getActivity']),
  },
})
export default class Activities extends Vue {
  private randomActivity?: ActivityModel | ActivityError; // is assigned via mapState
  private updateRandomActivity!: (_: undefined) => void; // is assigned via mapMutations
  private getActivity!: () => void; // is assigned via mapActions
  private showSnackbar!: boolean;

  private snackbarClose() {
    this.updateRandomActivity(undefined);
  }
}
</script>
