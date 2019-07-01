<template>
  <div>
    <h2>You should:</h2>
    <v-textarea
      solo
      label="Activity will appear here..."
      :value="value"
      readonly
    ></v-textarea>
    <v-btn color="primary">Save for later</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Activity extends Vue {
  @Prop() private value?: string;
}
</script>

