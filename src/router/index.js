import { createRouter, createWebHistory } from 'vue-router'
import Homes from '../views/home-view.vue';
import Register from '../views/register-view.vue';
import Card from '../views/card-view.vue';
import List from '../views/lists-view.vue';
import Profile from '../views/profile-veiw.vue';
import LoginForm from '../components/login_form.vue';
import RegisterForm from '../components/register_form.vue';
import ForgetPasswor from '../components/forget_password_form.vue'

const routes = [

  {
    path: '/',
    name: 'home',
    component: Homes,
  },
  {
    path: '/card',
    name: 'card',
    component: Card,
  },
  {
    path: '/list',
    name: 'list',
    component: List,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterForm,
  },
  {
    path: '/forget-password',
    name: 'forgetPassword',
    component: ForgetPasswor,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
