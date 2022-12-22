<script>
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/userStore";
import Swal from "sweetalert2";

export default defineComponent({
  name: "LogIn",

    data() {
    return {
      user: {
        username: "",
        password: "",
        isLoggedIn: false
      }
    };
  },

  setup() {
    const userStore = useUserStore();
    return { userStore };
  },

  methods: {

    changeNav() {
      if (this.isLoggedIn === false) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      console.log(this.isLoggedIn);
    },

    getApi2:async function(){
        const apiUrlLogin = "http://localhost:8080/api/userbyusername";
        const bodyLogin = JSON.stringify({
          username: this.user.username,
          password: this.user.password
        });
        console.log(bodyLogin);

      try {
        const response = await fetch(apiUrlLogin, {
          method: "POST",
          body: bodyLogin,
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        });
        const result = await response.json();

        console.log(result)
        const userStore = useUserStore();
        console.log(userStore)
        userStore.setUser(result);

        const welcomeStr = "Welcome " + this.user.username + "!!\nYou are now logged in!! 😎\n Redirecting to your Home Page"
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: welcomeStr,
          showConfirmButton: false,
          timer: 2800
        })
        this.$router.push({
          path:"/"
        })

      } catch (error) {

        Swal.fire({
          position: 'center',
          icon: 'error',
          title: "User||Password not found!! \n Try again!!",
          showConfirmButton: true,
        })
      }
    }
  }
});

</script>

<template>
  <div id="bgr">
    <div class="container hero is-fullheight">
      <header class="has-text-centered"><br> <br> <br></header>
      <section class="hero is-transparent is-fullheight">

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <div class="neon">Log </div>
                  </div>
                  <div class="column">
                    <div class="flux">In </div>
                  </div>
                </div>
              </div>
<!--            <div class="column is-4 is-offset-4"><h3 class="title has-text-white">Login</h3>-->
              <hr class="login-hr" id="colYellow">
<!--              <p class="subtitle has-text-white">Please login to proceed.</p>-->
              <div class="box" id="DarkBlue">
                <figure class="avatar">
                  <img src="../../assets/mkafnobg.png">
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input id="LightBlue"
                             v-model="user.username"
                             class="input is-large has-text-white-bis" type="username"
                             placeholder="Your Username" autofocus="">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input id="LightBlue"
                             v-model="user.password"
                             class="input is-large has-text-white-bis" type="password"
                             placeholder="Your Password">
                    </div>
                  </div>
                  <div class="field"></div>
                  <button @click="getApi2"
                          id="DarkBlue"
                          class="button is-block is-info is-large is-fullwidth">
                    Login
                    <i class="fa fa-sign-in" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
              <p>
                <a id="signuplink" href="../#/signup">Not a member?
                  <br>Sign up here</a></p></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: table;
  background-color: black;
}

@font-face {
  font-family: "Comic Sans MS";
  src: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/707108/neon.ttf);
}

/*.container {*/
/*  display: table-cell;*/
/*  text-align: center;*/
/*  vertical-align: middle;*/
/*}*/

.neon {
  font-family: neon;
  color: #FB4264;
  font-size: 6vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #F40A35;
}

.flux {
  font-family: neon;
  color: #426DFB;
  font-size: 6vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #2356FF;
}

.neon {
  animation: neon 1s ease infinite;
  -moz-animation: neon 1s ease infinite;
  -webkit-animation: neon 1s ease infinite;
}

@keyframes neon {
  0%,
  100% {
    text-shadow: 0 0 1vw yellow, 0 0 3vw yellow, 0 0 10vw yellow, 0 0 10vw yellow, 0 0 .4vw yellow, .5vw .5vw .1vw #806914;
    color:#cdc50e;
  }
  50% {
    text-shadow: 0 0 .5vw #cdc50e, 0 0 1.5vw #cdc50e, 0 0 5vw #cdc50e, 0 0 5vw #cdc50e, 0 0 .2vw #cdc50e, .5vw .5vw .1vw #40340A;
    color: #cdc50e;
  }
}

.flux {
  animation: flux 1s linear infinite;
  -moz-animation: flux 1s linear infinite;
  -webkit-animation: flux 1s linear infinite;
  -o-animation: flux 1s linear infinite;
}

@keyframes flux {
  0%,
  100% {
    text-shadow: 0 0 1vw #1041FF, 0 0 3vw #1041FF, 0 0 10vw #1041FF, 0 0 10vw #1041FF, 0 0 .4vw #8BFDFE, .5vw .5vw .1vw #147280;
    color: #28D7FE;
  }
  50% {
    text-shadow: 0 0 .5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180, 0 0 5vw #082180, 0 0 .2vw #082180, .5vw .5vw .1vw #0A3940;
    color: #146C80;
  }
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: cadetblue !important;
  opacity: 50; /* Firefox */
}

#DarkBlue{
  opacity: 85%;
}

#signuplink{
  color:yellow;
  font-size: x-large;
  font-weight: bold;
  background-color: #071e36;

}
</style>