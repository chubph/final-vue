<script>
import {defineComponent} from "vue";
import {useUserStore} from "@/stores/userStore";
import Swal from "sweetalert2";

export default defineComponent({
  name: "LogIn",

  setup() {
    const userStore = useUserStore();
    return {userStore};
  },
  data() {
    return {
      games: []
    }
  },
  async mounted() {
    await this.getGames()
  },

  methods: {
    deleteGame: async function (game) {
      const urlDelete = "http://localhost:8080/api/delete/" + this.userStore.user.username + "/" + game;
      const response = await fetch(urlDelete, {
            method: "DELETE"
          }
      );
      const result = await response.json();

      console.log(result);
      // alert("Game removed from your library!!!")


      await this.getGames()
    },

    deleteGameConfirm(game) {
      Swal.fire({
        text: "Are you sure you want to delete this game?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#7c1209',
        cancelButtonColor: '#041221',
        confirmButtonText: 'Delete!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteGame(game)
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Game removed from library',
            showConfirmButton: false,
            timer: 1800
          })
        }
      })

    },

    async getGames() {
      const apiUrlGetGame = "http://localhost:8080/api/game/" + this.userStore.user.username;
      const response = await fetch(apiUrlGetGame, {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }

      });
      const result = await response.json();
      this.games = result
      console.log(this.games);

    },

    async updateGame(event) {
      console.log(event)
      const gameid = event.target.dataset.game
      const gamestatus = event.target.value

      const apiUrlUpdateGame = "http://localhost:8080/api/update";
      const bodyUpdate = JSON.stringify({
        username: this.userStore.user.username,
        gameid: gameid,
        gamestatus: gamestatus
      });
      const response = await fetch(apiUrlUpdateGame, {
        method: "PUT",
        body: bodyUpdate,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }

      });
      const result = await response.json();

    }
  }

});

</script>

<template>

  <div id="bgr">

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="logo">
      <b>US<span>ER</span><span>&nbsp</span>PR<span>OF</span>ILE</b>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="table-container ">

      <!--  <header class="has-text-centered" >-->
      <div class="is-size-5-widescreen is-centered">
      <table class="table is-align-content-center has-text-centered">

        <tr>
          <th class="has-text-centered">Game Name</th>
          <th class="has-text-centered">Status</th>
          <th class="has-text-centered">Delete</th>


        </tr>

        <tr v-for="game in games">
          <td>{{ game.gameid }}</td>
          <td>

            <div class="dropdown is-hoverable select">
              <select @change="updateGame" :data-game="game.gameid" :value="game.gamestatus">
                <option value="Choose">Choose</option>
                <option value="Wanted">Wanted</option>
                <option value="Played">Played</option>
              </select>
            </div>
          </td>
          <td>
            <button @click="deleteGameConfirm(game.gameid)" class="button is-link modal-button fa fa-minus"
                    id="DarkBlueTextYellow">Delete
            </button>
          </td>

        </tr>
      </table>
      </div>
    </div>

    <div class='container hero is-fullheight is-centered'>


    </div>


    <!--  </header>-->
  </div>
</template>


<style scoped>

#bgr {
  background-image: url("background/controllers.jpg");
  opacity: 100%;
}

html, body {
  height: 50%
}

body {
  background: #112 url(//images.weserv.nl/?url=i.imgur.com/6QJjYMe.jpg) center no-repeat;
  background-size: cover;
  margin: 0
}

.logo {
  text-align: center;
  width: 60%;
  height: 0px;
  margin: auto;
  position: relative;
  top: -40px;
  left: 0;
  right: 0;
  bottom: 0;
  user-select: none;

}


.logo b {
  font: 200 10vh "Vibur";
  color: #fee;
  text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #ff4444, 0 0 0.5em #ff4444, 0 0 0.1em #ff4444, 0 10px 3px #000;
}

.logo b span {
  animation: blink linear infinite 2s;
}

.logo b span:nth-of-type(2) {
  animation: blink linear infinite 3s;
}

@keyframes blink {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79% {
    color: #333;
  }
  80% {

    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: #333;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: #333;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}

#btn-twtr{
  clear:both;
  color:#fff;
  border:2px solid;
  border-radius:3px;
  text-align:center;
  text-decoration:none;
  display:block;
  font-family:sans-serif;
  font-size:14px;
  width:13em;
  padding:5px 10px;
  font-weight:600;
  position:absolute;
  bottom:20px;
  left:0;
  right:0;
  margin:0 auto;
  background:rgba(0,0,0,0.2);
  box-shadow:0 0 0px 3px rgba(0,0,0,0.2);
  opacity:0.4
}
#btn-twtr:hover{color:#fff;opacity:1}

</style>