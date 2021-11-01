<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center" @click="$router.push('/')">
        <v-icon>mdi-calculator</v-icon>
        <h2 class="ml-2 mt-1">Clac</h2>
      </div>
    </v-app-bar>

    <v-main>
      <keep-alive>
        <router-view />
      </keep-alive>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data: () => ({}),
});
</script>
