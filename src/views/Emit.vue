<script>
import FormView from "../components/Form.vue";
export default {
   components: {
      FormView,
   },
   data() {
      return {
         inputText: null,
      };
   },
   methods: {
      getPush(innerMsg) {
         this.inputText = innerMsg;
      },
   },
};
</script>

<template>
   <div class="emit">
      <h1>Emit</h1>
      <p>{{ inputText }}</p>
      <FormView :inputText="inputText" v-on:emitPush="getPush"></FormView>
      <!-- inputText 是input的屬性 -->
   </div>
</template>

<style scoped>
.emit {
   display: flex;
   flex-direction: column;
   align-items: center;
   /* height: 100vh; */
}
</style>
