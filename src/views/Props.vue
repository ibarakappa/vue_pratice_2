<script>
import Child from "../components/Child.vue";
export default {
   components: {
      Child,
   },
   data() {
      return {
         // 新增一個屬性
         a: "Props 標題",
         allData: [
            {
               img: "../../public/Rectangle_d1.png",
               title: "甜點1",
            },
            {
               img: "../../public/Rectangle d2.png",
               title: "甜點2",
            },
         ],
      };
   },
};
</script>

<template>
   <div class="card-area">
      <!-- 用v-bind 綁定內層資料名稱等於外層資料名稱 -->
      <!-- v-bind:Childtitle="title" -->
      <!-- 等號前為內層資料名稱，等號後為此層在data定義的屬性名稱 -->
      <Child
         class="card"
         v-for="card in allData"
         :Childtitle="card.title"
         :imgData="card.img"
      />
   </div>
</template>

<style scoped>
.card-area {
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.card {
   margin: 0 1rem;
}
</style>
