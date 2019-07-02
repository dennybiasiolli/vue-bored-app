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
        <td>
          <v-btn flat icon
            :color="props.item.done ? 'green' : 'grey'"
            @click="activityCkeck(props.item)"
          >
            <v-icon>check_circle_outline</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
    <v-btn block color="error" width="100%" @click="activityClearClick">
      Clear all
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

import { Activity } from '@/models/Activity';

@Component
export default class ActivityList extends Vue {
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
    { text: '', value: '' },
  ];
  @Prop() private value!: Activity[];
  @Emit() private activityCkeck(activity: Activity) {
    return activity;
  }
  @Emit() private activityClearClick() { return null; }
}
</script>

