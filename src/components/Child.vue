<script>
export default {
   // 自訂一個props資料名稱
   props: ["Childtitle", "imgData"],
};
</script>
<template>
   <div class="card">
      <img class="img" :src="imgData" alt="" />
      <h2>{{ Childtitle }}</h2>
      <p>Lorem ipsum dolor sit amet.</p>
   </div>
</template>
<style>
.card {
   width: 200px;
   height: 250px;
   background-color: aquamarine;
   border-style: solid;
   border-radius: 10px;
   display: flex;
   flex-direction: column;
   align-items: center;
}
h2,
p {
   margin: 0;
   text-align: center;
}

.img {
   width: 75%;
}
</style>
