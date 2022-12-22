<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Thx",
  components: {Footer}
}
</script>

<template >
  <br>  <br>
  <br>

  <body id="bgr" class="hero is-fullheight is-centered" >
  <p class="title is-1 has-text-white">
    A great special To the most awesome teachers! Your help and support were invaluable!</p>
  <p class="title is-1 has-text-white">
    Especially to Helder whose help was pivotal these past two weeks!
  </p>

  </body>
  <Footer></Footer>
</template>



<style scoped>
#bgr {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("../../assets/1.jpg");
  opacity: 100%;
}
img {
  width: 800px;
  height:400px;
}
</style>