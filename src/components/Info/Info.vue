<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Info",
  props: {
    game: {}
  },
  data() {
    return {
      GameDetails: {}
    }
  },
  methods: {}

});
</script>


<template>


 <div>
  <div class="card has-text-white-bis" id="cardCol" >
    <div class="card-image">
      <h1 class="title has-text-white-bis has-text-centered">{{game.name}}</h1>

      <figure class="image is-4by3">
        <div class="fade">
          <div class="shadow">
        <img :src="(`${game.image}`)" alt="Placeholder image">
          </div>
        </div>
      </figure>

    </div>
    <div class="card-content" >
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-6 has-text-white-bis"> Initial Release Date: <time :datetime="game.time">{{ game.released }}</time></p>
          <p>
            <strong class="has-text-white-bis">
              Rating: {{ game.rating }}
              <i class="fa fa-star" id="asteraki"></i>
            </strong>
          </p>
        </div>
      </div>
      <div class="content">
        Bla bla bla bla bla
<!--        <button class="modal-close is-large" aria-label="close">Close</button>-->
        <br>

      </div>
              <button class="button is-link modal-button fa fa-plus"
                      data-target="modal-image2"
                      :data-gameid="game.id"
                      id="LightBlueTextYellow">
<!--                      v-if="userStore.isLoggedIn === false"-->
<!--                      @click="addGame">-->
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
  0% { opacity: 0; }
  80% { opacity: 2; }
}
</style>