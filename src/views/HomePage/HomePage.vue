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

      currentGames.push(gameOne)
      console.log(gameOne)
    }


    this.games = currentGames;


  },
});


</script>

<template>


  <div class="bg-img">
    <div class='container hero is-fullheight'>
      <header class="has-text-centered">
        <br>
        <br>
        <br>
<!--        <h1 class="title is-1">Not sure what to play next?</h1>-->
<!--        <h1 class="title is-4">Here are some suggestions!</h1>-->

        <ul>
          <li v-for="game in games">{{  game.name }} with id {{ game.id}}
<!--            <img :src="(`${game.image}`)" />-->
          </li>
        </ul>




        <section class="hero is-info is-small">
          <div class="hero-body">
            <div class="container has-text-centered">
              <p class="title">
                Not sure what to play next?
              </p>
              <p class="subtitle">
                Here are some suggestions!
              </p>
            </div>
          </div>
        </section>
<!--        <div class="box cta">-->
<!--          <p class="has-text-centered">-->
<!--            <span class="tag is-primary">New</span> Here we have modal cards. When you click on them they will open functional modal examples.-->
<!--          </p>-->
<!--        </div>-->


        <section class="container">

          <div class="columns features">
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/RWnpyGtY1aU" alt="Placeholder image" class="modal-button" data-target="modal-image2">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click on image above</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <span class="button is-link modal-button" data-target="modal-image2">Image modal</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/6Ticnhs1AG0" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Tempor orci dapibus faber in.</h4>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur adipiscing elit pellentesque. Sed arcu non odio euismod lacinia at quis risus. Faucibus turpis in eu mi bibendum neque egestas cmonsu songue. Phasellus vestibulum lorem
                      sed risus.</p>
                    <span class="button is-link modal-button" data-target="modal-card">Modal Card</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4 modal-button" data-target="modal-image">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click anywhere on card</h4>
                    <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce ut placerat orci nulla pellentesque dignissim enim. Libero id faucibus nisl tincidunt eget nullam. Commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    <span class="button is-link modal-button" data-target="modal-image">Image modal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns features">
            <div class="column is-4 modal-button" data-target="modal-card">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://res.cloudinary.com/ameo/image/upload/v1568711475/pexels-photo-1302883_fjje0f.jpg" alt="Placeholder image">
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    <h4>Click anywhere on card to <br>expand into modal card</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat semper viverra nam.</p>
                    <span class="button is-link modal-button">Modal card</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://source.unsplash.com/hLyd1LukQ7E" alt="butterfly image" class="modal-button" data-target="modal-image4">
                  </figure>
                </div>
                <div class="card-content  modal-button" data-target="modal-card2">
                  <div class="content">
                    <h4>Click anywhere on card to <br>expand into modal card - header image expands into bigger image</h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer enim neque volutpat ac tincidunt vitae semper quis.</p>
                    <span class="button is-link modal-button">Modal card</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>





















      </header>
    </div>
  </div>











</template>



<style scoped>

html, body {
  height: 100vh;
}


.bg-img {
  background-image: url(https://wallpapercave.com/dwp1x/wp3660128.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-color: #999;

}

h1 {
  color: white;
}
</style>

