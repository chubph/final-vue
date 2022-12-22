import LogIn from '../views/LogIn/LogIn.vue';
import SignUp from "../views/SignUp/SignUp.vue";
import HomePage from "@/views/HomePage/HomePage.vue";
import UserProfile from "@/views/UserProfile/UserProfile.vue";
import Thx from "@/views/Thx/Thx.vue";


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
        path: '/homepage',
        alias: '/',
        component: HomePage,
    },
    {
        name: 'userprofile',
        path: '/userprofile',
        component: UserProfile,
    },
    {
        name: 'thx',
        path: '/thx',
        component: Thx,
    },
];
