<script>import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      test: false,
      // visible: "is-hidden",
      username: "Philip"
    };
  },
  methods: {
    changeNav() {
      if (this.test === false) {
        this.test = true;
      } else {
        this.test = false;
      }
      console.log(this.test);
    }
  }
});
</script>


<template>
  <nav class="navbar is-focused is-fixed-top" role="navigation" aria-label="main navigation">
    <!--    <div class="navbar-brand">--><!--      <a class="navbar-item" href="../#/">-->
    <!--        <figure class="image">--><!--          <img src="../../assets/mkaf.png">--><!--        </figure>-->
    <!--      </a>--><!--    </div>-->
    <div class="navbar-start"><a class="navbar-item" href="../#/"> <strong>
      <router-link :to="{ name: 'homepage' }" class="navbar-item">Home</router-link>
    </strong> </a></div>
    <button @click="changeNav">Test</button>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons"><span v-if="test === false">          <div
          class="navbar-item is-hoverable">            <span class="icon-text">                <span class="icon">                  <i
          class="fa fa-user-plus" aria-hidden="true"></i>                </span>            <span><router-link
          :to="{ name: 'signup' }" class="navbar-item">Sign Up</router-link></span>            </span>          </div>          <div
          class="navbar-item is-hoverable">            <span class="icon-text">                <span class="icon">                  <i
          class="fa fa-sign-in" aria-hidden="true"></i>                </span>            <router-link
          :to="{ name: 'login' }" class="navbar-item">Log In</router-link>            </span>          </div>          </span>
          <span v-if="test === true">          <div
            class="navbar-item is-hoverable">           <h1>Hello {{ username }}</h1>          </div>            <div
            class="navbar-item is-hoverable">            <span class="icon-text">                <span class="icon">                  <i
            class="fa fa-sign-out" aria-hidden="true"></i>                </span>              <span><button
            @click="changeNav">Sign out</button></span>            </span>          </div>          </span></div>
      </div>
    </div>
  </nav>
</template>