<script>
export default {
   data() {
      return {
         isShow: true,
      };
   },
   methods: {
      change() {
         this.isShow = !this.isShow;
      },
   },
};
</script>

<template>
   <div class="area">
      <h1>V-show</h1>
      <div class="boxes">
         <div v-show="isShow" class="box box1"></div>
         <div v-if="isShow" class="box box2"></div>
      </div>
      {{ isShow }} <button type="button" @click="change">Click</button>
   </div>
</template>

<style scoped>
.boxes {
   position: relative;
}
.box {
   width: 3rem;
   height: 3rem;
   /* position: absolute; */
}
.box1 {
   background-color: aqua;

   /* left: 0;
   top: 0; */
}
.box2 {
   background-color: coral;
   /* left: 100px;
   top: 0; */
}
</style>
