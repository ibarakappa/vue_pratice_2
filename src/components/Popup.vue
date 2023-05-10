<script>
export default {
   props: ["title", "content"],
   data() {
      return {};
   },
   methods: {
      changeShowOutside() {
         this.$emit("switch");
      },
   },
};
</script>

<template>
   <div id="modal" class="modal">
      <!-- modal card -->
      <div class="card">
         <h2>{{ title }}</h2>
         <p>
            {{ content }}
         </p>
         <button type="button" @click="changeShowOutside">close</button>
      </div>

      <!-- background -->
      <div class="bg"></div>
   </div>
</template>

<style lang="scss" scoped>
.modal {
   width: 100vw;
   height: 100vh;
   position: fixed;
   top: 0;
   left: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 1s;
   .card {
      width: 30vw;

      border-radius: 2rem;
      background-color: white;
      padding: 2rem;
      text-align: center;
      h2 {
         margin: 0;
      }
   }

   .bg {
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.65;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
   }
}
</style>
