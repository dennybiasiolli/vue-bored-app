<template>
  <div>
      <Activity :value="randomActivity && randomActivity.activity"></Activity>
      <ActivityFilters @get-activity-click="getActivity"></ActivityFilters>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapActions } from 'vuex';

import Activity from '@/components/Activity.vue';
import ActivityFilters from '@/components/ActivityFilters.vue';

@Component({
  components: {
    Activity,
    ActivityFilters,
  },
  computed: mapState(['randomActivity']),
  methods: {
    ...mapActions(['getActivity']),
  },
})
export default class Activities extends Vue {
  private randomActivity?: Activity; // is assigned via mapState
  private getActivity!: () => void; // is assigned via mapActions
}
</script>
