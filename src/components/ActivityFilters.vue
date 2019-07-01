<template>
  <div>
    <h2>Activity details:</h2>
    <v-select
      :items="types"
      label="Type"
    ></v-select>
    <v-text-field
      label="Participants"
      type="number"
    ></v-text-field>
    <v-slider
      :tick-labels="['cheap', '', '', '', '', '', '', '', '', '', 'expensive']"
      always-dirty
      min="0"
      max="1"
      step="0.1"
      ticks
    ></v-slider>
    <v-btn color="primary" @click="getActivityClick">
      Hit me with a new one!
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ActivityFilters extends Vue {
  private types = [
    'busywork',
    'charity',
    'cooking',
    'diy',
    'education',
    'music',
    'recreational',
    'relaxation',
    'social',
  ];
  @Prop() private value?: string;
  @Emit() private getActivityClick() { };
}
</script>

