import LogIn from '../views/LogIn/LogIn.vue';
import SignUp from "../views/SignUp/SignUp.vue";
import HomePage from "@/views/HomePage/HomePage.vue";

export const routes = [
    {
        name: 'login',
        path: '/login',
        component: LogIn
    },
    {
        name: 'signup',
        path: '/signup',
        component: SignUp
    },
    {
        name: 'homepage',
        path: '/',
        component: HomePage,
    },
];
