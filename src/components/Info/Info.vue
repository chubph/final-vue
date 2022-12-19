<script>
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";

export default defineComponent({
  name: "Info",
  props: {
    game: {}
  },
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      GameDetails: {},
      gameInfo: {
        description: ""
      }
    };
  },
  methods: {
    addGame: async function(event) {
      console.log(event);
      console.log(event.target.dataset.gameid);
      console.log(this.userStore.user.username);
      const apiUrlAddGame = "http://localhost:8080/api/game";
      const bodyAddGame = JSON.stringify({
        username: this.userStore.user.username,
        gameid: event.target.dataset.gameid
      });

      const response = await fetch(apiUrlAddGame, {
        method: "POST",
        body: bodyAddGame,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      const result = await response.json();
      console.log(result);
      alert("Game added successfully!!!");
    }
  },
  async mounted() {
    const url = "https://api.rawg.io/api/games/3498?key=2fe636237e6942a1afa7b7e75c21acc8";
    const response = await fetch(url);
    const result = await response.json();
    const gameDetails = result.results;
    const gameKati = {};
    gameKati.description = gameDetails.description;
    this.gameInfo = gameKati;
  }
});
</script>


<template>


  <div>
    <div class="card has-text-white-bis" id="cardCol">
      <div class="card-image">
        <h1 class="title has-text-white-bis has-text-centered">{{ game.name }}</h1>
        <video width="320" height="240" controls>
          <source src="videos/gta.mp4" type="video/mp4">

          Your browser does not support the video tag.
        </video>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QkkoHAzjnUs" title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        <figure class="image is-4by3">
          <div class="fade">
            <div class="shadow">
              <img :src="(`${game.image}`)" alt="Placeholder image">
            </div>
          </div>
        </figure>

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
          <h2>Description:</h2>
          {{gameInfo.description}}
          <!--        <button class="modal-close is-large" aria-label="close">Close</button>-->
          <br>

        </div>
        <button class="button is-link modal-button fa fa-plus"
                data-target="modal-image2"
                :data-gameid="game.name"
                id="LightBlueTextYellow"
                v-if="userStore.isLoggedIn === true"
                @click="addGame">
          Add to Library
        </button>
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