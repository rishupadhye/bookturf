import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import BookingForm from './views/BookingForm'
import DisplayBooking from './views/DisplayBooking'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/bookingform',
      name:'bookingform',
      component: BookingForm 
    },
    {
      path:'/displaybooking',
      name:'displaybooking',
      component: DisplayBooking
    }
  ]
})
