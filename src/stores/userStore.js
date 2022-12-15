import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => {
        return {
            user: {},
            test: false,
        }
    },

    actions: {
        setUser(user) {
            this.user=user
        },
        changeNav() {
            if (this.test === false) {
                this.test = true;
            } else {
                this.test = false;
            }
            console.log(this.test);
        }
    }


})