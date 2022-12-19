<script>
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";

export default defineComponent({
  name: "LogIn",

  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      games: {

      }

    }

  },
  methods: {
    getGameList:async function() {
      const apiUrlGetGame = "http://localhost:8080/api/game/" + this.userStore.user.username;
      const response = await fetch(apiUrlGetGame,{
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }

      });
      const result = await response.json();
      this.games=result
      console.log(this.games);


    }

  },


});

</script>

<template>
  <br/>
  <br/>
  <br/>
  <br/>

  <p>Hello1</p>
  <br/>
  <button @click="getGameList">Game List</button>
  <br/>
  <br/>
  <table>
    <tr>
      <th>Game Name</th>
    </tr>
    <br/>
    <tr v-for="game in games">
      <td>{{ game }}</td>
    </tr>
  </table>

  <div class='container hero is-fullheight'>
    <br/>
    <br/>
    <br/>
    <br/>

    <p>Hello2</p>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>

  <p>Hello3</p>



</template>



<style scoped>

</style>