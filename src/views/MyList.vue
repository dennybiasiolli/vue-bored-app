<template>
  <div>
    <ActivityList></ActivityList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import ActivityList from '@/components/ActivityList.vue';

@Component({
  components: {
    ActivityList,
  },
})
export default class MyList extends Vue {}
</script>
