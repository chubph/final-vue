<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: "Footer"
})
</script>


<template>

  <footer class="is-fixed-bottom">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="#">Alex</a>. The source code is not licensed LOL
        <!--        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content-->
        <!--        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.-->
      </p>
    </div>
  </footer>


</template>



<style scoped>


footer {
  background-color: #333367;
  -webkit-text-fill-color: #72760a;
}

</style>