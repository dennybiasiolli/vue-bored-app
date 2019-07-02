<template>
  <div>
    <ActivityList :value="savedActivities" @activity-ckeck="checkActivity"></ActivityList>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapState, mapMutations } from 'vuex';

import ActivityList from '@/components/ActivityList.vue';

@Component({
  components: {
    ActivityList,
  },
  computed: {
    ...mapState(['savedActivities']),
  },
  methods: {
    ...mapMutations(['checkActivity']),
  },
})
export default class MyList extends Vue {}
</script>
