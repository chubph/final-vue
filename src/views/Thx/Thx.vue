<script>
import Footer from "@/components/Footer/Footer.vue";
export default {
  name: "Thx",
  components: {Footer}
}
</script>

<template >
<!--  <br>  <br>-->
<!--  <br>-->


  <body id="bgr" class="hero is-fullheight is-centered" >
  <h1>A great special Thank You To the most awesome teachers! Your help and support were invaluable!</h1>
  <h2>Especially to Helder whose help was pivotal these past two weeks!</h2>

  </body>


</template>



<style scoped>
#bgr {
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-image: url("../../../public/background/14.jpg");
  opacity: 100%;
}
img {
  width: 700px;
  height:350px;
}
@import url("https://fonts.googleapis.com/css?family=Helvetica&display=swap");

h1 {
  font-size: calc(9px + 9vh);
  line-height: calc(9px + 9vh);
   /*text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,*/
   /*   0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #4477ff, 0 0 80px #4477ff;*/
   /* color: #fccaff; */
  text-shadow: 0 0 5px #0022ff, 0 0 15px #0022ff, 0 0 20px #0022ff, 0 0 40px #0022ff, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: "Helvetica", cursive;
  text-align: center;
  animation: blink 12s infinite;
  -webkit-animation: blink 12s infinite;
}
h2 {
  font-size: calc(9px + 9vh);
  line-height: calc(10px + 10vh);
  /*   text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
      0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092;
    color: #fccaff; */
  text-shadow: 0 0 5px #0022ff, 0 0 15px #0022ff, 0 0 20px #0022ff, 0 0 40px #0022ff, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
  color: #fff6a9;
  font-family: "Sacramento", cursive;
  text-align: center;
  animation: blink 12s infinite;
  -webkit-animation: blink 12s infinite;
}
body {
  padding: 2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /*background: #222;*/
  /*background-image: repeating-linear-gradient(*/
  /*  to bottom,*/
  /*  transparent 7px,*/
  /*  rgba(0, 0, 0, 0.8) 9px,*/
  /*  rgba(0, 0, 0, 0.8) 13px,*/
  /*  transparent 13px*/
  /*);*/
}

@-webkit-keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    /*     color: #fccaff;
        text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
          0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
    text-shadow: 0 0 5px #0022ff, 0 0 15px #0022ff, 0 0 20px #0022ff, 0 0 40px #0022ff, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}

@keyframes blink {
  20%,
  24%,
  55% {
    color: #111;
    text-shadow: none;
  }

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    /*     color: #fccaff;
        text-shadow: 0 0 5px #f562ff, 0 0 15px #f562ff, 0 0 25px #f562ff,
          0 0 20px #f562ff, 0 0 30px #890092, 0 0 80px #890092, 0 0 80px #890092; */
    text-shadow: 0 0 5px #0022ff, 0 0 15px #0022ff, 0 0 20px #0022ff, 0 0 40px #0022ff, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
  }
}


</style>