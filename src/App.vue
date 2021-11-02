<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center" @click="goToHome">
        <v-icon>mdi-calculator</v-icon>
        <h2 class="ml-2 mt-1">Calc</h2>
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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  goToHome(): void {
    if (this.$route.path !== "/") {
      this.$router.push("/");
    }
  }
}
</script>
