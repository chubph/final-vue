<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      games: [],

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

    const currentGames =[];

    for (let i = 0; i < gameList.length; i++) {
      const gameOne = {};
      gameOne.id = gameList[i].id;
      gameOne.name = gameList[i].name;
      gameOne.image = gameList[i].background_image;
      gameOne.rating = gameList[i].rating;

      currentGames.push(gameOne)
      console.log(gameOne)
    }


    this.games = currentGames;


  },
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
            <div class="container has-text-centered" >
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


        <section class="container "  v-for="game in games">

          <div class="columns features is-centered " >
<!--            giro giro-->
            <div class="column is-5 " >

              <div class="card is-shady is-small" id="cardCol">
                <div class="card-image">
                  <figure class="image is-5by3">
                    <img :src="(`${game.image}`)" alt="Placeholder image" class="modal-button" data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4 class="has-text-white-bis">{{ game.name }}</h4>
                    <p > <strong class="has-text-white-bis"> Rating: {{ game.rating}}  <i class="fa fa-star" id="asteraki"></i> </strong></p>
                    <span class="button is-link modal-button" data-target="modal-image2" id="DarkBlue">?</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br>

        </section>


      </header>
    </div>












</template>



<style scoped>

html, body {
  height: 100vh;
}


/*.bg-img {*/
/*  background-image: url(https://wallpapercave.com/dwp1x/wp3660128.png);*/
/*  background-position: center center;*/
/*  background-repeat: no-repeat;*/
/*  background-attachment: fixed;*/
/*  background-size: cover;*/
/*  background-color: black;*/

/*}*/

h1 {
  color: white;
}

#purpleCol {
  background-color: #041221;
}

#papaya{
  color: papayawhip;
}

#logo{
  width: 220px;
}

#cardCol {
  background-color:  #363636 ;
  text-decoration-color: papayawhip;
}

#asteraki{
  color:  #cdc50e ;
}
</style>

