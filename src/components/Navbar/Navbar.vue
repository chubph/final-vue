<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: "Navbar"
});

</script>


<template>

  <nav class="navbar is-focused is-fixed-top" role="navigation" aria-label="main navigation">

    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:5173/">
        <figure class="image ">
          <img src="../../assets/mkaf.png">
        </figure>
      </a>
    </div>


    <div class="navbar-start">
      <a class="navbar-item" href="http://localhost:5173/">
        <strong><router-link :to="{ name: 'homepage' }" class="navbar-item">Home</router-link></strong>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <div class="navbar-item is-hoverable">

            <!--            <a class="button is-light navbar-link ">-->
            <!--              <strong>Sign up</strong>-->
            <!--            </a>-->
            <!--            -->
            <!--            -->
            <!--            -->
            <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                </span>
            <span><router-link :to="{ name: 'signup' }" class="navbar-item">Sign Up</router-link></span>
            </span>


<!--            <div class="navbar-dropdown">-->
<!--              <input class="navbar-item" placeholder="Email">-->
<!--              <input class="navbar-item" placeholder="Username">-->
<!--              <input class="navbar-item" placeholder="Password">-->
<!--              <hr class="navbar-divider">-->
<!--              <button class="navbar-item has-background-danger">Submit</button>-->
<!--            </div>-->

          </div>

          <div class="navbar-item is-hoverable">
            <!--              <a class="button is-light navbar-link ">-->
            <!--                Log in-->
            <!--              </a>-->

            <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </span>
            <router-link :to="{ name: 'login' }" class="navbar-item">Log In</router-link>
            </span>

<!--            <div class="navbar-dropdown">-->
<!--              <input class="navbar-item" placeholder="Username">-->
<!--              <input class="navbar-item" placeholder="Password">-->

<!--              <hr class="navbar-divider">-->
<!--              <button class="navbar-item has-background-danger">Submit</button>-->

<!--            </div>-->

          </div>
        </div>
      </div>
    </div>
  </nav>
</template>


<style scoped>

@media screen and (min-width: 1024px) {
  .navbar-end .navbar-dropdown {
    left: unset;
    right: 0;
  }
}

nav {
  background-color: #333367;
  -webkit-text-fill-color: #72760a;
}
</style>