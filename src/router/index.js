import { createWebHistory, createRouter } from "vue-router";
import home from "@/views/Home.vue";
import panier from "@/views/panier.vue";
const routes = [
    { 
        path:"/",
        name: "Home",
        component: home,
},
    {
        path:"/panier",
        name : "panier",
        component: panier,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
