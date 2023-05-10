import { createRouter, createWebHistory } from "vue-router";
import VBind from "../views/VBind.vue";
import test from "../components/TestOne.vue";
import Hello from "../views/Hello.vue";
const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: "/VBind",
         name: "VBind",
         component: VBind,
         children: [
            {
               path: "test",
               name: test,
               component: test,
            },
         ],
      },
      {
         path: "/Hello",
         name: "Hello",
         component: Hello,
      },
      {
         path: "/Login",
         name: "Login",
         component: () => import("../views/Login.vue"),
      },
      {
         path: "/Props",
         name: "Props",
         component: () => import("../views/Props.vue"),
      },
      {
         path: "/Emit",
         name: "Emit",
         component: () => import("../views/Emit.vue"),
      },
      {
         path: "/VShow",
         name: "VShow",
         component: () => import("../views/VShow.vue"),
      },
      {
         path: "/router-view",
         name: "router-view",
         component: () => import("../views//RouterView.vue"),
      },
      {
         path: "/modal",
         name: "modal",
         component: () => import("../views/modal.vue"),
      },
   ],
});

export default router;
