<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      games: [],
      games2: [],
      games3: [],
      games4: [],

      game: {
        id: 0,
        name: "",
        image: "",
        rating: "",

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


</script>

<template>


  <div class='container hero is-fullheight'>
    <header class="has-text-centered">
      <br>
      <br>
      <br>


      <section class="hero  is-small" id="purpleCol">
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
      </section>
      <br>


      <section class="container">
        <div class="columns features ">


          <div class="column is-3 ">

            <span v-for="game in games">
              <br>

            <div class="card is-shady is-small" id="cardCol">

                <div class="card-image">
                  <figure class="image is-5by3">
                    <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                         data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content" id="cardDetails">
                    <h4 class="has-text-white-bis">{{ game.name }}</h4>
                    <p> <strong class="has-text-white-bis"> Rating: {{ game.rating }}
                      <i class="fa fa-star" id="asteraki"></i> </strong></p>
                    <span class="button is-link modal-button" data-target="modal-image2" id="DarkBlue">?</span>
                  </div>
                  <div>
                  <span class="button is-link modal-button" data-target="modal-image2" id="DarkBlue">Add</span>
                  </div>
                </div>

            </div>

            </span>
          </div>


          <div class="column is-3 ">

            <span v-for="game in games2">
              <br>

            <div class="card is-shady is-small" id="cardCol">

                <div class="card-image">
                  <figure class="image is-5by3">
                    <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                         data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4 class="has-text-white-bis">{{ game.name }}</h4>
                    <p> <strong class="has-text-white-bis"> Rating: {{ game.rating }}  <i class="fa fa-star"
                                                                                          id="asteraki"></i> </strong></p>
                    <span class="button is-link modal-button" data-target="modal-image2" id="DarkBlue">?</span>
                  </div>
                </div>

            </div>

            </span>
          </div>

          <div class="column is-3 ">

            <span v-for="game in games3">
              <br>

            <div class="card is-shady is-small" id="cardCol">

                <div class="card-image">
                  <figure class="image is-5by3">
                    <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                         data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4 class="has-text-white-bis">{{ game.name }}</h4>
                    <p> <strong class="has-text-white-bis"> Rating: {{ game.rating }}  <i class="fa fa-star"
                                                                                          id="asteraki"></i> </strong></p>
                    <span class="button is-link modal-button" data-target="modal-image2" id="DarkBlue">?</span>
                  </div>
                </div>

            </div>

            </span>
          </div>

          <div class="column is-3 ">

            <span v-for="game in games4">
              <br>

            <div class="card is-shady is-small" id="cardCol">

                <div class="card-image">
                  <figure class="image is-5by3">
                    <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button"
                         data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4 class="has-text-white-bis">{{ game.name }}</h4>
                    <p> <strong class="has-text-white-bis"> Rating: {{ game.rating }}  <i class="fa fa-star"
                                                                                          id="asteraki"></i> </strong></p>
                    <span class="button is-link modal-button" data-target="modal-image2" id="DarkBlue">?</span>
                  </div>
                </div>

            </div>

            </span>
          </div>

        </div>
      </section>


    </header>
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
  background-color: #363636;
  text-decoration-color: papayawhip;
}

#asteraki {
  color: #cdc50e;
}

#cardDetails {

}
</style>

