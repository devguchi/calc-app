<template>
  <v-card flat>
    <v-list>
      <template v-for="(menuItem, idx) in menuList">
        <v-list-item :key="menuItem.to" :to="menuItem.to">
          <v-list-item-content>
            <v-list-item-title>
              {{ menuItem.label }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>mdi-chevron-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-divider :key="idx"></v-divider>
      </template>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  menuList = [
    {
      label: "〇%引き",
      to: "/discount",
    },
    {
      label: "割引適用上限",
      to: "/discount-application-limit",
    },
  ];
}
</script>
