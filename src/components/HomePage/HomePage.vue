<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomePage"
})
</script>

<template>






  <div class="bg-img">
    <div class='container hero is-fullheight'>
      <header class="has-text-centered">
<br>
<br>
<br>
        <h1 class="title is-1">Not sure what to play next?</h1>
        <h1 class="title is-4">Here are some suggestions!</h1>

      </header>
    </div>
  </div>



</template>


<style scoped>

html, body {
  height: 100vh;
}



.bg-img {
  background-image: url(https://wallpapercave.com/dwp1x/wp3660128.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;

}

h1 {
  color: white;
}



</style>

