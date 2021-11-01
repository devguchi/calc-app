<template>
  <v-card flat class="pa-2">
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="price"
          label="元の金額（円）"
          placeholder="1000"
          clearable
          @change="$v.$touch"
          :error-messages="errMsgPrice"
        ></v-text-field>
        <v-text-field
          v-model="discountRate"
          label="割引率（％）"
          placeholder="20"
          clearable
          :error-messages="errMsgDiscountRate"
          @change="$v.$touch"
        ></v-text-field>
      </v-card-text>
    </v-card>

    <v-card class="mt-3" color="secondary" v-if="result !== ''">
      <v-card-subtitle>結果</v-card-subtitle>
      <v-card-text>
        <p class="text-h5 text-right pa-0 ma-0">{{ result }} 円</p>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { required, between, numeric, integer } from "vuelidate/lib/validators";

@Component({
  validations: {
    price: {
      required,
      integer,
      between: between(1, 1000000000),
    },
    discountRate: {
      required,
      numeric,
      between: between(0, 100),
    },
  },
})
export default class Discount extends Vue {
  price = "";
  discountRate = "";

  get result(): string {
    if (this.$v.$invalid) {
      return "";
    } else {
      return this.calc().toLocaleString();
    }
  }

  get errMsgPrice(): string {
    if (!this.$v.price.$error) return "";
    return "1～10億の整数を入力してください";
  }

  get errMsgDiscountRate(): string {
    if (!this.$v.discountRate.$error) return "";
    return "0～100の数字を入力してください";
  }

  calc(): number {
    const price = parseInt(this.price);
    const discountRate = parseFloat(this.discountRate);
    return (price * (100 - discountRate)) / 100;
  }
}
</script>
