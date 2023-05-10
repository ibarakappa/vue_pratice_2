<script>
export default {
   data() {
      return {
         isRounded: false,
         imgArr: [
            "../../public/Rectangle_d1.png",
            "../../public/Rectangle d2.png",
         ],
      };
   },
   methods: {
      changeRounded() {
         this.isRounded = !this.isRounded;
      },
   },
};
</script>

<template>
   <h1>Login</h1>
   <button @click="changeRounded">change</button>

   <!--                                   :冒號後為條件判斷 -->
   <div
      class="box"
      v-bind:class="{
         rounded: isRounded,
         changeColor: isRounded,
      }"
   ></div>
   <img class="img" :src="imgArr[isRounded ? 0 : 1]" />
   <!-- <img src="../../public/Rectangle d2.png" alt=""> -->
</template>

<style scoped>
.box {
   width: 300px;
   height: 300px;
   background-color: aquamarine;
   position: absolute;
   left: 0;
   transition: 1s;
   display: flex;
   flex-direction: column;
}
.rounded {
   border-radius: 20px;
   left: 300px;
   transition: 1s;
}
.changeColor {
   background-color: red;
}
.img {
   height: 200px;
}
</style>
