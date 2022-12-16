import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: {},
            isLoggedIn: false,
        }
    },

    actions: {
        setUser(user) {
            this.user=user
        },
        changeNav() {
            if (this.isLoggedIn === false) {
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
                this.user={}
            }
            console.log(this.isLoggedIn);
        },

    }


})