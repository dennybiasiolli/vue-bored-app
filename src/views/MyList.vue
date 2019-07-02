<template>
  <div>
    <ActivityList :value="savedActivities"></ActivityList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

import ActivityList from '@/components/ActivityList.vue';

@Component({
  components: {
    ActivityList,
  },
  computed: {
    ...mapState(['savedActivities']),
  },
})
export default class MyList extends Vue {}
</script>
