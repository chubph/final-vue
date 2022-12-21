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


  <div class="bg-img">
    <div class="container hero is-fullheight">
      <header class="has-text-centered">
        <br>
        <br>
        <br>

      </header>

      <section class="hero is-transparent is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-white">Sign Up</h3>
              <hr class="login-hr" id="colYellow">
              <p class="subtitle has-text-white">Please sign up to proceed.</p>
              <div class="box" id="DarkBlue">
                <figure class="avatar">
                  <img src="../../assets/mkafnobg.png">
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input id="LightBlue" v-model="user.email" class="input is-large" type="email"
                             placeholder="Your Email" autofocus="">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input id="LightBlue" v-model="user.username" class="input is-large" type="username"
                             placeholder="Your Username">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">

                      <input id="LightBlue" v-model="user.password" class="input is-large" type="password"
                             placeholder="Your Password">
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

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  /*color: black;*/
  opacity: 1; /* Firefox */
}

</style>