import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome'
import Chatroom from '@/views/Chatroom'
import { projectAuth } from '../firebase/config'


//auth guard

const requireAuth = (to, from, next) => {
  
  let user = projectAuth.currentUser
  console.log('current user:', user)
  if (!user) { //if current user is null ; redirect to welcome page 
    next({ name: 'Welcome' })
  } else {
    next()
  }
  
}

const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser
  if (user) { //if current user is null ; redirect to welcome page 
    next({ name: 'Chatroom' })
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter: requireNoAuth
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: requireAuth,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
