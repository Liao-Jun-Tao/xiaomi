import { defineStore } from "pinia";
import { getSwiperList,getSubnav,getHotSell,getGoods } from "@/service/home.js";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      swiperList: [],
      subnav:[],
      hotsell:[],
      goods:[],
      loading: true,
    };
  },
  actions: {
    async getSwiperList() {
      const { result } = await getSwiperList();
    //   console.log(result);
      this.swiperList = result;
    },

    async getSubnav() {
        const { result } = await getSubnav();
        // console.log(result);
        this.subnav = result;
      },

      async getHotSell() {
        const { result } = await getHotSell();
        // console.log(result);
        this.hotsell = result;
      },

      async getGoods() {
        const { result } = await getGoods();
        // console.log(result);
        this.goods = result;
      },


  },
});
