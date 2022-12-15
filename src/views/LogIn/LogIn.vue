<script>import { defineComponent } from "vue";

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
  methods: {
    changeNav() {
      if (this.isLoggedIn === false) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
      console.log(this.isLoggedIn);
    },
    getApi2: function() {
      const apiUrl2 = "http://localhost:8080/api/userbyusername";
      const body2 = JSON.stringify({
        username: this.user.username,
        password: this.user.password
      });
      console.log(body2);
      fetch(apiUrl2, {
        method: "POST",
        body: body2,
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

        .then((response) => response.json())
        .then((message) => window.confirm("Welcome " + this.user.username + "!!!\nYou are now logged in!!! 😎"))
          .then(function() {
            window.location = '/#/';
          })
        .catch(error => {
          window.alert("User does not exist!");
        });

    }
  }
});
</script>

<template>
  <div class="bg-img">
    <div class="container hero is-fullheight">
      <header class="has-text-centered"><br> <br> <br></header>
      <section class="hero is-transparent is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4"><h3 class="title has-text-white">Login</h3>
              <hr class="login-hr" id="color">
              <p class="subtitle has-text-white">Please login to proceed.</p>
              <div class="box" id="DarkBlue">
                <figure class="avatar"><img src="../../assets/mkafnobg.png"></figure>
                <form>
                  <div class="field">
                    <div class="control"><input id="NavbarBlue" v-model="user.username"
                                                class="input is-large has-text-white-bis" type="username"
                                                placeholder="Your Username" autofocus=""></div>
                  </div>
                  <div class="field">
                    <div class="control"><input id="NavbarBlue" v-model="user.password"
                                                class="input is-large has-text-white-bis" type="password"
                                                placeholder="Your Password"></div>
                  </div>
                  <div class="field">                    <!--                    <label class="checkbox">-->
                    <!--                      <input type="checkbox">-->
                    <!--                      Remember me-->
                    <!--                    </label>-->                  </div>
                  <button @click="getApi2" id="DarkBlue"
                          class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in"
                                                                                         aria-hidden="true"></i>
                  </button>
                </form>
              </div>
              <p class="has-text-grey"><a id="signuplink" href="../#/signup">Not a member? <br>Register here</a>
                <!--                <a href="../">Forgot Password</a> &nbsp;·&nbsp;-->
                <!--                <a href="../">Need Help?</a>-->              </p></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<style scoped></style>