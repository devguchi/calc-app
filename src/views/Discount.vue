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
          type="number"
        ></v-text-field>
        <v-text-field
          v-model="discountRate"
          label="割引率（％）"
          placeholder="20"
          clearable
          :error-messages="errMsgDiscountRate"
          @change="$v.$touch"
          type="number"
        ></v-text-field>
      </v-card-text>
    </v-card>
    <CalcResult :result="result" unit="円"/>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { required, between, decimal, integer } from "vuelidate/lib/validators";
import CalcResult from '@/components/CalcResult.vue'

@Component({
  components: {CalcResult},
  validations: {
    price: {
      required,
      integer,
      between: between(1, 1000000000),
    },
    discountRate: {
      decimal,
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
    const discountRate = this.discountRate ? parseFloat(this.discountRate) : 0;
    return (price * (100 - discountRate)) / 100;
  }
}
</script>
