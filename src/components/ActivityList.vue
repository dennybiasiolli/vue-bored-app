<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="data"
      hide-actions
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.id }}</td>
        <td>{{ props.item.description }}</td>
        <td>{{ props.item.participants }}</td>
        <td>{{ props.item.budget }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ActivityList extends Vue {
  private headers = [
    {
      text: '#',
      align: 'left',
      sortable: false,
      value: 'id',
    },
    {
      text: 'Activity',
      align: 'left',
      value: 'description',
    },
    { text: 'Participants', value: 'participants' },
    { text: 'Budget', value: 'budget' },
  ];
  private data = [
    {
      id: 1,
      description: 'Go to a karaoke bar with some friends',
      participants: 4,
      budget: 0.2,
    },
    {
      id: 2,
      description: 'Start a blog',
      participants: 1,
      budget: 0.6,
    },
    {
      id: 3,
      description: 'Plain a trip',
      participants: 1,
      budget: 0.5,
    },
  ];

}
</script>

