<script>
import {defineComponent} from "vue";

export default defineComponent( {
  name: "Info",
    props : {
    game:{}
  },
  data(){
    return {
      GameDetails:{}
    }
  },
  methods:{

  }

});
</script>


<template>
<header>
  <h1>{{game.name}}</h1>
</header>
</template>



<style scoped>

</style>