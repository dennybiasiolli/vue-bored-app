<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="value"
      hide-actions
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.index + 1 }}</td>
        <td>{{ props.item.activity }}</td>
        <td>{{ props.item.participants }}</td>
        <td>{{ props.item.price }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Activity } from '@/models/Activity';

@Component
export default class ActivityList extends Vue {
  @Prop() private value!: Activity[];
  private headers = [
    {
      text: '#',
      sortable: false,
      value: '',
    },
    {
      text: 'Activity',
      align: 'left',
      value: 'activity',
    },
    { text: 'Participants', value: 'participants' },
    { text: 'Budget', value: 'price' },
  ];
}
</script>

