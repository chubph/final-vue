
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "HomePage"
})
</script>

<template>
  <div class="bg-img">

  <div class='container hero is-fullheight'>

  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:5173/">
        <img src="../../assets/mkaf.png" width="80" height="23">
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item has-background-grey" href="http://localhost:5173/">
         <strong>Home</strong>
        </a>


      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div class="navbar-item has-dropdown is-hoverable">

            <a class="button is-light navbar-link ">
              <strong>Sign up</strong>
            </a>
            <div class="navbar-dropdown">
              <input class="navbar-item" placeholder="Email">
              <input class="navbar-item" placeholder="Username">
              <input class="navbar-item" placeholder="Password">
              <hr class="navbar-divider">
              <button class="navbar-item has-background-danger" >Submit</button>
            </div>

            </div>

            <div class="navbar-item has-dropdown is-hoverable">
            <a class="button is-light navbar-link ">
              Log in
            </a>
              <div class="navbar-dropdown">
                <input class="navbar-item" placeholder="Username">
                <input class="navbar-item" placeholder="Password">

                <hr class="navbar-divider">
                <button class="navbar-item has-background-danger" >Submit</button>

              </div>

            </div>
        </div>
      </div>
      </div>
    </div>

  </nav>

    <header class="has-text-centered">
  <h1 class="title is-1">Not sure what to play next?</h1>
      <h1 class="title is-4">Here are some suggestions!</h1>
    </header>

  <footer class="footer ">
    <div class="content has-text-centered">
      <p>
        <strong>Bulma</strong> by <a href="#">Alex</a>. The source code is not licensed LOL
<!--        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content-->
<!--        is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.-->
      </p>
    </div>
  </footer>
  </div>

  </div>
</template>



<style scoped>
@media screen and (min-width: 1024px) {
  .navbar-end .navbar-dropdown {
    left: unset;
    right: 0;
  }
}

html, body { height: 100vh; }

.bg-img {
  background-image: url(https://wallpapercave.com/dwp1x/wp3660128.png) ;
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;

}

h1 {
  color:white;
}
</style>