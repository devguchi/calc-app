<template>
    <v-card class="mt-3" color="secondary" v-if="result !== ''">
      <v-card-subtitle>結果</v-card-subtitle>
      <v-card-text>
        <p class="text-h5 text-right pa-0 ma-0">{{ result }} {{unit}}</p>
      </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class CalcResult extends Vue {
  @Prop({ default: '' })
  result!: string;

  @Prop({ default: '' })
  unit!: string;
}
</script>