import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: {

            },
            isLoggedIn: false,
        }
    },

    // data() {
    //     return {
    //         users: [],
    //
    //     }

    // },

    actions: {
        setUser(user) {
            this.user = user
            // if (this.user.length) {
            //
            //     this.users.push(user);

            localStorage.setItem("user", JSON.stringify(user));
            // localStorage.setItem("loggedin", JSON.stringify(this.isLoggedIn));

            console.log(localStorage.getItem("user"))

            // this.user = ""


        },
        changeNav() {
            if (this.isLoggedIn === false) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
                this.user = {}
            }
            console.log(this.isLoggedIn);
        },

        // setLoggedInUser(user){
        //     if (this.user.length) {
        //
        //         this.users.push(user);
        //
        //         localStorage.setItem("users", JSON.stringify(this.users));
        //         this.user = ""
        //     }
        //     },
        //
            getUsers() {
                this.user = JSON.parse(localStorage.getItem("user"));
            },
    }


})