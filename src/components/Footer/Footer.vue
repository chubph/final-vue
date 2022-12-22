<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: "Footer"
})
</script>


<template>

  <footer>
    <div class="content has-text-centered">
      <p>
        <strong>MKAF</strong> by <a href="#">MKAF Industries</a>. © 2022 All Rights Reserved.  </p>
    </div>
  </footer>


</template>



<style scoped>


footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #041221;
  -webkit-text-fill-color: papayawhip;
}

</style>