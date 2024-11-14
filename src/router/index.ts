import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from "@/auth/stores/useAuthStore";

const router = createRouter({
  history: createWebHistory('/vue-boilerplate/'),
  routes: [
    {
      path: '/',
      name: 'user-home',
      component: HomeView,
      meta: {
        requiresAuth: true // this key can be any string such as "requiresAdminRole" etc.
      }
    },
    {
      path: "/auth",
      redirect: '/auth/login',
      children: [
        {
          path: 'register',
          name: 'auth-register',
          component: () => import('@/auth/views/RegisterView.vue')
        },
        {
          path: 'login',
          name: 'auth-login',
          component: () => import('@/auth/views/LoginView.vue')
        }
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect:'/',
      // component: ()=> import('../views/NotFound.vue')
    }
  ]
})

//Global Route Guards
router.beforeEach((to, from, next)=>{
  if(to.meta.requiresAuth){
    const { isLoggedIn } = useAuthStore()

    if (to.name !== 'auth-login' && !isLoggedIn) {
      return next({ name: 'auth-login' });
    } else if (to.name === 'auth-login' && isLoggedIn) {
      return next({ name: 'user-home' });
    } else {
      next();
    }
  }else{
    next()
  }
})

export default router
