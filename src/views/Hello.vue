<script>
import { RouterLink, RouterView } from "vue-router";
import Popup from "../components/Popup.vue";
export default {
   components: {
      Popup,
      RouterView,
   },
   data() {
      return {
         isShow: false,
         homeInfo: {
            title: "HelloWorld",
            content: "ASDADSASDASDASDADSASDASD",
         },
      };
   },
   methods: {
      changeShow() {
         this.isShow = !this.isShow;
      },
   },
};
</script>

<template>
   <h1>首頁</h1>
   <RouterLink to="/router-view">routerview</RouterLink>
   <button type="button" @click="changeShow">Click</button>
   <!-- v-show 等同v-if -->
   <!-- :title :content綁內層文字 -->
   <!-- @switch 使用emit觸發changeShow方法 -->
   <Popup
      v-show="isShow"
      :title="homeInfo.title"
      :content="homeInfo.content"
      @switch="changeShow"
   ></Popup>
</template>

<style></style>
