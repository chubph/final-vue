<script>

import {defineComponent} from "vue";
import { useUserStore } from "@/stores/userStore";
import Swal from "sweetalert2";

export default defineComponent({
  name: "Navbar",
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
methods: {
  deleteUser: async function () {
    const urlDeleteUser = "http://localhost:8080/api/users/" + this.userStore.user.username;
    const response = await fetch(urlDeleteUser, {
          method: "DELETE"
        }
    );
    const result = await response.json();
  this.userStore.setUser({});

    console.log(result);
    // alert("Game removed from your library!!!")

  },

  deleteUserConfirm() {
    Swal.fire({
      text: "Are you sure you want to delete this account?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#7c1209',
      cancelButtonColor: '#041221',
      confirmButtonText: 'Delete!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteUser()
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Account deleted 🥺! Hope to see you again! 😎 ',
          showConfirmButton: false,
          timer: 1800
        })
      }
    })

  },

}
});
</script>


<template>
  <nav class="navbar is-focused is-fixed-top" role="navigation" aria-label="main navigation" id="DarkBlue">

    <div class="navbar-start">
      <a class="navbar-item" href="../#/">
        <strong>
          <router-link :to="{ name: 'homepage' }" class="navbar-item">Home</router-link>
        </strong>
      </a>
      <a class="navbar-item" href="../#/userprofile " v-if="userStore.user.username">
        <strong>
          <router-link :to="{ name: 'userprofile' }" class="navbar-item">Profile</router-link>
        </strong>
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <!--            USER PROFILE BUTTON-->

          <!--          HIDE SIGN LOG BUTTONS WHEN LOGGED IN-->

          <!--          SIGN UP BUTTON        -->
          <div class="navbar-item is-hoverable" v-if="!userStore.user.username">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-user-plus" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'signup' }" class="navbar-item">Sign Up</router-link>
              </span>
          </div>

          <!--          LOG IN BUTTON        -->
          <div class="navbar-item is-hoverable" v-if="!userStore.user.username">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'login' }" class="navbar-item">Log In</router-link>
              </span>
          </div>


          <!--          USER APPEARS WHEN LOGGED IN-->
          <!--         HELLO USER      -->
          <div class="navbar-item is-hoverable" v-if="userStore.user.username">
            <h1>Hello {{ userStore.user.username}}</h1>
          </div>
                  <!--SIGN OUT BUTTON-->
          <div class="navbar-item is-hoverable" v-if="userStore.user.username">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'homepage' }" class="navbar-item" @click="userStore.setUser({})">Log Out</router-link>
              </span>
          </div>
          <div class="navbar-item is-hoverable" v-if="userStore.user.username">
              <span class="icon-text">
                <span class="icon">
                  <i class="fa fa-eraser" aria-hidden="true"></i>
                </span>
                <router-link :to="{ name: 'homepage' }" class="navbar-item" @click="deleteUserConfirm" >Delete Account</router-link>
              </span>
          </div>
<!--            USER PROFILE BUTTON-->


        </div>
      </div>
    </div>
  </nav>
</template>