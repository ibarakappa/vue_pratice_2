<script>
export default {
   data() {
      return {
         sourceData: "",
      };
   },
   methods: {
      push() {
         console.log("push");
         this.$emit("emitPush", this.sourceData);
      },
   },
};
</script>

<template>
   <div class="form-area">
      <p>{{ sourceData }}</p>
      <form action="">
         <input type="text" v-model="sourceData" />
      </form>
      <button type="button" @click="push">Click</button>
   </div>
</template>

<style>
.form-area {
   border: 2px solid black;
   padding: 4rem;
}
</style>
