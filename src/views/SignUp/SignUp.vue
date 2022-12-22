<script>
import { defineComponent } from "vue";
import Swal from "sweetalert2";
import useValidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";


export default defineComponent({
  name: "SignUp",
  data() {
    return {
      user: {
        username: "",
        password: "",
        email: ""
      }
    };
  },
  setup: () => ({
    v$: useValidate()
  }),
  validations() {
    return {
      user: {
        username: { required },
        password: { required },
        email: { required, email }
      }
    };
  },
  methods: {
    getApi: async function() {
      const apiUrl = "http://localhost:8080/api/users";
      const body = JSON.stringify({
        username: this.user.username,
        password: this.user.password,
        email: this.user.email
      });
      try {
        this.v$.$validate();
        if (!this.v$.$error) {
          const response = await fetch(apiUrl, {
            method: "POST",
            body: body,
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          });
          const result = await response.json();
          await Swal.fire({
            position: "center",
            icon: "warning",
            title: "Welcome " + this.user.username + "!!!\nYou can now log in!!! 😎",
            showConfirmButton: false,
            timer: 1800
          });
          window.location = "/#/login";
        } else if (this.v$.user.email.$error){
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Your email is not a valid address",
            showConfirmButton: false,
            timer: 1800
          });
        } else if (this.v$.user.username.$error){
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Username is required",
            showConfirmButton: false,
            timer: 1800
          });
        } else if (this.v$.user.password.$error){
          Swal.fire({
            position: "center",
            icon: "warning",
            title: "Password is required",
            showConfirmButton: false,
            timer: 1800
          });
        }
      } catch (error) {
        await Swal.fire({
          position: "center",
          icon: "warning",
          title: "User already exists try a different username!",
          showConfirmButton: false,
          timer: 1800
        });
      }
    }

  }

});


</script>

<template>


  <div id="bgr">

  <div class="container hero is-fullheight">
      <header class="has-text-centered">
<!--        <br>-->
<!--        <br>-->
<!--        <br>-->

      </header>

      <section class="hero is-transparent is-fullheight">

        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <div class="container">
                <div class="columns">
                  <div class="column">
                <div class="neon">Sign </div>
                  </div>
                  <div class="column">
                <div class="flux">Up </div>
                  </div>
              </div>
              </div>
              <hr class="login-hr" id="colYellow">
              <div class="box" id="DarkBlue">
                <figure class="avatar">
                  <img src="../../assets/mkafnobg.png">
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input id="LightBlue" v-model="user.email" class="input is-large has-text-white" type="email"
                             placeholder="Your Email" autofocus="">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input id="LightBlue" v-model="user.username" class="input is-large has-text-white" type="username"
                             placeholder="Your Username">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">

                      <input id="LightBlue" v-model="user.password" class="input is-large has-text-white" type="password"
                             placeholder="Your Password ">
                    </div>
                  </div>
                  <div class="field">


                  </div>
                  <button @click="getApi" id="DarkBlue" class="button is-block is-info is-large is-fullwidth">Submit <i
                    class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                </form>
              </div>
            </div>
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
#DarkBlue
{
  opacity: 87%;
}
#LightBlue{
  color: white;
}


</style>