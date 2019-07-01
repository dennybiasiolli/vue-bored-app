<template>
  <div>
      <Activity></Activity>
      <ActivityFilters></ActivityFilters>
  </div>
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
export default class Activities extends Vue {}
</script>
