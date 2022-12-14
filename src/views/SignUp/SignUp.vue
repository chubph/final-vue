<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignUp",
  data() {
    return {
      user :  {
        username: "",
        password: "",
        email: "",
      }
    }
  },

  methods: {
    getApi: function()  {
      const apiUrl= "http://localhost:8080/api/users"
      const body = JSON.stringify({
        username: this.user.username,
        password: this.user.password,
        email: this.user.email
      })
      console.log(body)
      fetch(apiUrl, {
        method: 'POST',
        body: body,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })

          .then((response) => response.json())
          .then((message) => window.confirm("Welcome " + this.user.username + "!!!\nYou can now log in!!! 😎"))
          .catch(error => {
            window.alert("User already exists try another username!")
          })

    }
  }
});



// fetch("http://localhost:8080/api/users", {
//   method: 'POST',
//   body: JSON.stringify({
//     username: "this.username",
//     password: "this.password",
//     email: "this.email"
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//     .then((response) => response.json());
// });
</script>

<template>


  <div class="bg-img">
    <div class='container hero is-fullheight'>
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
              <hr class="login-hr" id="color">
              <p class="subtitle has-text-white">Please sign up to proceed.</p>
              <div class="box" id="DarkBlue">
                <figure class="avatar">
                  <img src="../../assets/mkafnobg.png" >
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input id="NavbarBlue" v-model="user.email" class="input is-large" type="email" placeholder="Your Email" autofocus="">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input id="NavbarBlue" v-model="user.username" class="input is-large" type="username" placeholder="Your Username">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input id="NavbarBlue" v-model="user.password" class="input is-large" type="password" placeholder="Your Password">
                    </div>
                  </div>
                  <div class="field">

                  </div>
                  <button @click="getApi" id="DarkBlue" class="button is-block is-info is-large is-fullwidth">Submit <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
                </form>
              </div>
              <p class="has-text-grey">
<!--                <a id="signuplink" href="../">Sign Up</a> &nbsp;·&nbsp;-->
                <!--                <a href="../">Forgot Password</a> &nbsp;·&nbsp;-->
                <!--                <a href="../">Need Help?</a>-->
              </p>
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