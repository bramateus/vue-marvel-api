import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Info from "./components/Info.vue";

Vue.use(Router);


export default new Router({
    // https://brauliomateus.com/vue-marvel-api
    // mode: "history",
    base: '/vue-marvel-api',
    // base: process.env.BASE_URL,
    // base: '/',
    routes: [
        {
            name: "home",
            path: "/",
            component: Home
        },
        {
            name: "Info",
            path: "/info",
            component: Info,
        }
    ]

}) 