import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import DiscountApplicationLimit from "@/views/DiscountApplicationLimit.vue";
import Vuelidate from "vuelidate";

const localVue = createLocalVue();
localVue.use(Vuelidate);
const wrapper = shallowMount(DiscountApplicationLimit, { localVue });

describe("DiscountApplicationLimit.vue", () => {
  it("calc - If 'usedAmount' is empty, it will be 0", async () => {
    await wrapper.setData({
      returnRate: 10,
      maximumReturnAmount: 1000,
      usedAmount: "",
    });
    assert.equal(wrapper.vm.calc(), 10000);
  });
  it("calc - Can the available balance be calculated correctly?", async () => {
    await wrapper.setData({
      returnRate: 20,
      maximumReturnAmount: 1000,
      usedAmount: 2500,
    });
    assert.equal(wrapper.vm.calc(), 2500);
  });
});
