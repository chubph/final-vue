<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SignUp"
});
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
              <div class="box">
                <figure class="avatar">
                  <img src="../../assets/mkaf.png">
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="password" placeholder="Your Username">
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input class="input is-large" type="password" placeholder="Your Password">
                    </div>
                  </div>
                  <div class="field">

                  </div>
                  <button id="Button" class="button is-block is-info is-large is-fullwidth">Submit <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
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



</style>