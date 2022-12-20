<script>
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";
import Swal from "sweetalert2";

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
  async mounted() {
    await this.getGames()
  },
  methods: {
    deleteGame: async function(game){
      const urlDelete = "http://localhost:8080/api/delete/" + this.userStore.user.username + "/" + game;
      const response = await fetch(urlDelete,{
        method:"DELETE"
          }
       );
      const result = await response.json();

      console.log(result);
      // alert("Game removed from your library!!!")

      Swal.fire({
        text: "Are you sure you want to delete this game?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
              'Game removed from library'
          )
        }
      })

      await this.getGames()


    },
    async getGames() {
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
  }

});

</script>

<template>
  <header class="has-text-centered">
  <br/>
  <br/>
  <br/>
  <br/>

    <div class="table-container has-text-centered">
      <table class="table has-text-centered">

          <tr>
            <th class="has-text-centered">Game Name</th>
            <th class="has-text-centered">Delete</th>
          </tr>


          <tr v-for="game in games">
            <td>{{ game }}</td>
            <td><button @click="deleteGame(game)" class="button is-link modal-button fa fa-minus" id="DarkBlueTextYellow">Delete</button></td>
          </tr>
      </table>
    </div>

  <div class='container hero is-fullheight is-centered'>
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


  </header>
</template>



<style scoped>

</style>