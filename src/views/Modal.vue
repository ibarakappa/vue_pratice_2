<script>
import Popup from "../components/Popup.vue";
export default {
   components: {
      Popup,
   },
   data() {
      return {
         isShow: false,
         modalInfo: {
            title1: "標題1",
            content: "asdfasdfasfasdfasdfasfafsdfasfd",
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
   <div class="area">
      <h1>Modal</h1>
      <button type="button" @click="changeShow">Check</button>
   </div>
   <Popup
      v-show="isShow"
      @switch="changeShow"
      :title="modalInfo.title1"
      :content="modalInfo.content"
   />
</template>

<style lang="scss" scope>
.area {
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
}
</style>
