import { defineStore } from "pinia";

function getUserFromLocalStorage() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            return user;
        }else {
            return {};
        }
    }
function saveUserToLocalStorage(user) {
    localStorage.setItem("user", JSON.stringify(user));

}


export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: getUserFromLocalStorage(),
            isLoggedIn: false,
        }
    },

    actions: {
        setUser(user) {
            this.user = user
            saveUserToLocalStorage(user)

        },
        // changeNav() {
        //     if (this.isLoggedIn === false) {
        //         this.isLoggedIn = true;
        //     } else {
        //         this.isLoggedIn = false;
        //     }
        //     console.log(this.isLoggedIn);
        // },

    }


})