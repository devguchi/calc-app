<template>
  <v-card flat class="pa-2">
    <v-card>
      <v-card-text>
        <v-text-field
          v-model="returnRate"
          label="還元率（％）"
          placeholder="10"
          clearable
          @change="$v.$touch"
          :error-messages="errMsgReturnRate"
          type="number"
        ></v-text-field>
        <v-text-field
          v-model="maximumReturnAmount"
          label="還元額上限"
          placeholder="2000"
          clearable
          :error-messages="errMsgMaximumReturnAmount"
          @change="$v.$touch"
          type="number"
        ></v-text-field>
        <v-text-field
          v-model="usedAmount"
          label="利用済み金額"
          placeholder="1100"
          clearable
          :error-messages="errMsgUsedAmount"
          @change="$v.$touch"
          type="number"
        ></v-text-field>
      </v-card-text>
    </v-card>
    <CalcResult title="利用可能残高" :result="result" unit="円" />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { required, between, decimal, integer } from "vuelidate/lib/validators";
import CalcResult from "@/components/CalcResult.vue";

@Component({
  components: { CalcResult },
  validations: {
    returnRate: {
      required,
      decimal,
      between: between(0, 100),
    },
    maximumReturnAmount: {
      integer,
      between: between(0, 100000000),
    },
    usedAmount: {
      integer,
      between: between(0, 100000000),
    },
  },
})
export default class DiscountApplicationLimit extends Vue {
  returnRate = "";
  maximumReturnAmount = "";
  usedAmount = "";

  get result(): string {
    if (this.$v.$invalid || this.maximumReturnAmount === "") {
      return "";
    } else {
      return this.calc().toLocaleString();
    }
  }

  get errMsgReturnRate(): string {
    if (!this.$v.returnRate.$error) return "";
    return "1～100の数字を入力してください";
  }
  get errMsgMaximumReturnAmount(): string {
    if (!this.$v.maximumReturnAmount.$error) return "";
    return "0～1億の整数を入力してください";
  }
  get errMsgUsedAmount(): string {
    if (!this.$v.usedAmount.$error) return "";
    return "0～1億の整数を入力してください";
  }

  calc(): number {
    const returnRate = parseFloat(this.returnRate) / 100;
    const maximumReturnAmount = parseInt(this.maximumReturnAmount);
    const usedAmount = this.usedAmount ? parseInt(this.usedAmount) : 0;
    return Math.floor(maximumReturnAmount / returnRate - usedAmount);
  }
}
</script>
