<script>
import {defineComponent} from "vue";
import {useUserStore} from "@/stores/userStore";
import Swal from "sweetalert2";
import vhtml from 'vhtml';

export default defineComponent({
  name: "Info",
  props: {
    game: {},
  },


  data() {
    return {
      gameInfo : {
        description: "",
      },
      GameDetails: {},
    }
  },


  watch: {
    async game() {
      const url = "https://api.rawg.io/api/games/" + this.game.id + "?key=2fe636237e6942a1afa7b7e75c21acc8";
      const response = await fetch(url, {

      });
      const result = await response.json();

      const curGame = result;
      this.gameInfo = curGame;
    },


  },

//vhtml

  methods: {
    addGame: async function (event) {
      console.log(event)
      console.log(event.target.dataset.gameid)
      console.log(this.userStore.user.username)
      try {
        const apiUrlAddGame = "http://localhost:8080/api/game";
        const bodyAddGame = JSON.stringify({
          username: this.userStore.user.username,
          gameid: event.target.dataset.gameid,
        });

        const response = await fetch(apiUrlAddGame, {
          method: "POST",
          body: bodyAddGame,
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });

        const result = await response.json();
        console.log(result)

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Game added to library',
          showConfirmButton: false,
          timer: 1800
        })

      } catch (error) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Game already in library',
          showConfirmButton: false,
          timer: 1800
        })
      }
    },

    getVideo(game) {
      return "/videos/" + game.id + ".mp4";
    }
  },

  setup() {
    const userStore = useUserStore();
    return {userStore};
  },





  });
</script>


<template>


  <div>
    <div class="card has-text-white-bis" id="cardCol">
      <div class="card-image">
        <h1 class="title has-text-white-bis has-text-centered">{{ game.name }}</h1>

<!--        <figure class="image is-4by3">-->
<!--          <div class="fade">-->
<!--            <div class="shadow">-->
<!--              <img :src="game.image" alt="Placeholder image">-->
<!--            </div>-->

<!--          </div>-->
<!--        </figure>-->

        <video :key="getVideo(game)" width="1280" height="720" controls>
          <source :src='getVideo(game)' type="video/mp4">
        </video>

      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="subtitle is-6 has-text-white-bis"> Initial Release Date:
              <time :datetime="game.time">{{ game.released }}</time>
            </p>
            <p>
              <strong class="has-text-white-bis">
                Rating: {{ game.rating }}
                <i class="fa fa-star" id="asteraki"></i>
              </strong>
            </p>
          </div>
        </div>
        <div class="content">
          <u>Description:</u>

          <div>
            {{ gameInfo.description }}
          </div>

          <br>

        </div>
        <div>
        <button class="button is-link modal-button fa fa-plus"
                data-target="modal-image2"
                :data-gameid="game.name"
                id="LightBlueTextYellow"
                v-if="userStore.user.username"
                @click="addGame">
          Add to Library
        </button>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

.fade {
  animation: fadeIn 6s;
  background-blend-mode: hard-light;


}

.shadow {
  box-shadow: 0 0 18px 8px white inset;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 2;
  }
}
</style>