<script>

import {defineComponent} from "vue";
import {useUserStore} from "@/stores/userStore";
import Info from "@/components/Info/Info.vue";
import Swal from "sweetalert2";

export default defineComponent({
  name: "HomePage",
  components: {Info},

  setup() {
    const userStore = useUserStore();
    return {userStore};
  },

  data() {
    return {
      chosenGame: {},
      games: [],
      games2: [],
      games3: [],
      games4: [],

      game: {
        id: 0,
        name: "",
        image: "",
        rating: "",
        released: "",
      },
    }
  },

  methods: {
    handleByClick(event) {
      const modal = event.target.dataset.target
      const $target = document.getElementById(modal)
      $target.classList.add('is-active')
    },

    handleInfoClick(game) {
      console.log(game)
      this.chosenGame = game
      console.log(this.chosenGame)
      this.handleByClick(event)
    },

    addGame: async function (event) {
      console.log(event)
      console.log(event.target.dataset.gameid)
      console.log(this.userStore.user.username)
      try {
        const apiUrlAddGame = "http://localhost:8080/api/game";
        const bodyAddGame = JSON.stringify({
          username: this.userStore.user.username,
          gameid: event.target.dataset.gameid,
          gamestatus: "Choose"

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
    }

  },

  async mounted() {
    const url = "https://api.rawg.io/api/games?key=2fe636237e6942a1afa7b7e75c21acc8";
    const response = await fetch(url);
    const result = await response.json();
    const gameList = result.results;

    const currentGames = [];
    const currentGames2 = [];
    const currentGames3 = [];
    const currentGames4 = [];

    for (let i = 0; i < gameList.length; i++) {
      const gameOne = {};
      gameOne.id = gameList[i].id;
      gameOne.name = gameList[i].name;
      gameOne.image = gameList[i].background_image;
      gameOne.rating = gameList[i].rating;
      gameOne.released = gameList[i].released;


      if (i < 5) {
        currentGames.push(gameOne)
        console.log(gameOne)
      }

      if (i >= 5 && i < 10) {
        currentGames2.push(gameOne)
        console.log(gameOne)
      }

      if (i >= 10 && i < 15) {
        currentGames3.push(gameOne)
        console.log(gameOne)
      }

      if (i >= 15 && i < gameList.length) {
        currentGames4.push(gameOne)
        console.log(gameOne)
      }
    }

    this.games = currentGames;
    this.games2 = currentGames2;
    console.log(currentGames2)
    this.games3 = currentGames3;
    console.log(currentGames3)
    this.games4 = currentGames4;
    console.log(currentGames4)
  }
});


// Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool'
// })
</script>

<template>
<div id="">
  <div class='container hero is-fullheight'>
    <header class="has-text-centered">
      <br>
      <br>
      <br>

      <section class="hero  is-small" id="purpleCol">
        <div id="shadow2">
          <div class="hero-body">
            <figure class="image" id="logo">
              <img src="../../assets/mkafnobg.png">
            </figure>
            <div class="container has-text-centered">
              <p class="title" id="papaya">
                Not sure what to play next?
              </p>
              <p class="subtitle has-text-white-bis">
                Here are some suggestions!
              </p>
            </div>
          </div>
        </div>
      </section>
      <br>


      <section class="container">
        <div class="columns features ">

          <!--          COLUMN 1 -->
          <div class="column is-3 ">
            <span v-for="game in games">
              <br>
              <div id="shadow">

                <div class="card is-shady is-small" id="cardCol">
                  <div class="img-hover-zoom">

                    <div class="card-image">
                      <figure class="image is-5by3">
                        <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                             data-target="modal-image2">
                      </figure>
                    </div>
<!--//sxolio-->

                    <div class="card-content is-halfheight" id="cardContent">
                      <div class="content" id="cardDetails">

                       <h4 class="has-text-white-bis">{{ game.name }}</h4>

                        <p>
                          <strong class="has-text-white-bis">
                          Rating: {{ game.rating }}
                          <i class="fa fa-star" id="asteraki"></i>
                          </strong>
                        </p>


                        <button class="js-modal-trigger button is-link modal-button fa fa-info"
                                data-target="modal-js-example"
                                @click="handleInfoClick(game)"
                                id="DarkBlue">
                          Info
                        </button>
                        &nbsp
                        <button class="button is-link modal-button fa fa-plus"
                                data-target="modal-image2"
                                :data-gameid="game.name"
                                id="DarkBlueTextYellow"
                                v-if="userStore.user.username"
                                @click="addGame">
                         Add to Library
                        </button>
                     </div>
                   </div>
                  </div>
                </div>
              </div>
            </span>
          </div>

          <!--          COLUMN 2  -->
          <div class="column is-3 ">
            <span v-for="game in games2">
              <br>
              <div id="shadow">

                <div class="card is-shady is-small" id="cardCol">
                  <div class="img-hover-zoom">

                    <div class="card-image">
                      <figure class="image is-5by3">
                        <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                             data-target="modal-image2">
                      </figure>
                    </div>


                    <div class="card-content is-halfheight" id="cardContent">
                      <div class="content" id="cardDetails">

                       <h4 class="has-text-white-bis">{{ game.name }}</h4>

                        <p>
                          <strong class="has-text-white-bis">
                          Rating: {{ game.rating }}
                          <i class="fa fa-star" id="asteraki"></i>
                          </strong>
                        </p>


                        <button class="js-modal-trigger button is-link modal-button fa fa-info"
                                data-target="modal-js-example"
                                @click="handleInfoClick(game)"
                                id="DarkBlue">
                          Info
                        </button>
                        &nbsp
                        <button class="button is-link modal-button fa fa-plus"
                                data-target="modal-image2"
                                :data-gameid="game.name"
                                id="DarkBlueTextYellow"
                                v-if="userStore.user.username"
                                @click="addGame">
                         Add to Library
                        </button>
                     </div>
                   </div>
                  </div>
                </div>
              </div>
            </span>
          </div>


          <!--          COLUMN 3  -->
          <div class="column is-3 ">
            <span v-for="game in games3">
              <br>
              <div id="shadow">

                <div class="card is-shady is-small" id="cardCol">
                  <div class="img-hover-zoom">

                    <div class="card-image">
                      <figure class="image is-5by3">
                        <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                             data-target="modal-image2">
                      </figure>
                    </div>


                    <div class="card-content is-halfheight" id="cardContent">
                      <div class="content" id="cardDetails">

                       <h4 class="has-text-white-bis">{{ game.name }}</h4>

                        <p>
                          <strong class="has-text-white-bis">
                          Rating: {{ game.rating }}
                          <i class="fa fa-star" id="asteraki"></i>
                          </strong>
                        </p>


                        <button class="js-modal-trigger button is-link modal-button fa fa-info"
                                data-target="modal-js-example"
                                @click="handleInfoClick(game)"
                                id="DarkBlue">
                          Info
                        </button>
                        &nbsp
                        <button class="button is-link modal-button fa fa-plus"
                                data-target="modal-image2"
                                :data-gameid="game.name"
                                id="DarkBlueTextYellow"
                                v-if="userStore.user.username"
                                @click="addGame">
                         Add to Library
                        </button>
                     </div>
                   </div>
                  </div>
                </div>
              </div>
            </span>
          </div>

          <!--          COLUMN 4  -->
          <div class="column is-3 ">
            <span v-for="game in games4">
              <br>
              <div id="shadow">

                <div class="card is-shady is-small" id="cardCol">
                  <div class="img-hover-zoom">

                    <div class="card-image">
                      <figure class="image is-5by3">
                        <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                           data-target="modal-image2">
                      </figure>
                    </div>


                    <div class="card-content is-halfheight" id="cardContent">
                      <div class="content" id="cardDetails">

                       <h4 class="has-text-white-bis">{{ game.name }}</h4>

                        <p>
                          <strong class="has-text-white-bis">
                          Rating: {{ game.rating }}
                          <i class="fa fa-star" id="asteraki"></i>
                          </strong>
                        </p>


                        <button class="js-modal-trigger button is-link modal-button fa fa-info"
                                data-target="modal-js-example"
                                @click="handleInfoClick(game)"
                                id="DarkBlue">
                          Info
                        </button>
                        &nbsp
                        <button class="button is-link modal-button fa fa-plus"
                                data-target="modal-image2"
                                :data-gameid="game.name"
                                id="DarkBlueTextYellow"
                                v-if="userStore.user.username"
                                @click="addGame">
                         Add to Library
                        </button>
                     </div>
                   </div>
                  </div>
                </div>
              </div>
            </span>
          </div>


          <!--  END OF  COLUMNS-->
        </div>
      </section>
    </header>
  </div>

  <div id="modal-js-example" class="modal modal-fx-3dSlit">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box is-transparent" id="cardCol">
        <Info :game="chosenGame"></Info>
      </div>
    </div>
    <button @click="" class="modal-close is-large" aria-label="close">Close</button>
  </div>
</div>
</template>


<style scoped>

html, body {
  height: 100vh;
}


h1 {
  color: white;
}

#purpleCol {
  background-color: #041221;
}

#papaya {
  color: papayawhip;
}

#logo {
  width: 220px;
}

#cardCol {
  /*background-color: #363636;*/
  text-decoration-color: papayawhip;
  background: rgb(4, 18, 33);
  background: linear-gradient(310deg, rgba(4, 18, 33, 1) 20%, rgba(54, 54, 54, 1) 84%, rgba(33, 39, 45, 1) 97%);

}


#cardDetails {


}

#cardContent {
}
#shadow {
  box-shadow: 10px 0px 10px 5px rgba(0, 0, 0, .8);
}
#shadow2 {
  box-shadow: 15px 15px 15px 8px rgba(0, 0, 0, .8);
}
.img-hover-zoom {
  /*height: 300px; !* [1.1] Set it as per your need *!*/
  overflow: hidden; /* [1.2] Hide the overflowing of child elements */
}
.img-hover-zoom img {
  transition: transform 2s ease;
}
.img-hover-zoom:hover img {
  transform: scale(1.18);
}
</style>

