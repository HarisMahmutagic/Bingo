import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./../views/Home.vue"
import Game from "./../views/Game.vue"
import Ticket from "./../views/Ticket.vue"
import Final from "./../views/Final.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Game',
    name: 'Game',
    component: Game
  },
  {
    path: '/Ticket',
    name: 'Ticket',
    component: Ticket
  },
  {
    path: '/Final',
    name: 'Final',
    component: Final
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
