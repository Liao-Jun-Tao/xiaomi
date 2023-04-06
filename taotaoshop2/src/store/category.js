import { defineStore } from "pinia";
import { getCategory } from "@/service/category.js";

export const useCategoryStore = defineStore("category", {
  state: () => {
    return {
        category:[]
    };
  },
  actions: {
    async getCategory() {
      const { result } = await getCategory();
      // console.log(result);
      this.category = result;
    },

   


  },
});
