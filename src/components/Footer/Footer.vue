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
        <strong>Bulma</strong> by <a href="#">Alex</a>. The source code is not licensed LOL
      </p>
    </div>
  </footer>


</template>



<style scoped>


footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333367;
  -webkit-text-fill-color: #72760a;
}

</style>