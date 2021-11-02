import { assert } from "chai";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Discount from "@/views/Discount.vue";
import Vuelidate from "vuelidate";

const localVue = createLocalVue();
localVue.use(Vuelidate);
const wrapper = shallowMount(Discount, { localVue });

describe("Discount.vue", () => {
  it("calc - If 'discountRate' is empty, it will be 0%", async () => {
    await wrapper.setData({
      price: 1000,
      discountRate: "",
    });
    assert.equal(wrapper.vm.calc(), 1000);
  });
  it("calc - 30% OFF of 1000 becomes 700", async () => {
    await wrapper.setData({
      price: 1000,
      discountRate: "30",
    });
    assert.equal(wrapper.vm.calc(), 700);
  });
});
