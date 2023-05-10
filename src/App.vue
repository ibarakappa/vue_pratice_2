<script>
import { RouterLink, RouterView } from "vue-router";
export default {
   mounted() {
      localStorage.setItem("account", "abc123");
      localStorage.setItem("password", "aaaaaa");
   },
};
</script>

<template>
   <div class="view">
      <h1>HELLO</h1>
      <header>
         <RouterLink to="/VBind" class="link">VBind</RouterLink>
         <RouterLink to="/Hello" class="link">Hello</RouterLink>
         <RouterLink to="/Login" class="link">Login</RouterLink>
         <RouterLink to="/Props" class="link">Props</RouterLink>
         <RouterLink to="/Emit" class="link">Emit</RouterLink>
         <RouterLink to="/VShow" class="link">V-show</RouterLink>
         <RouterLink to="/modal" class="link">Modal</RouterLink>
      </header>
      <div class="box">
         <RouterView></RouterView>
      </div>
   </div>
</template>

<style scoped>
.link {
   margin: 0 1rem;
}
.view {
   width: 100%;
   height: 75vh;
}
.box {
   width: 100%;
   height: 100%;
   background-color: antiquewhite;
}
</style>
