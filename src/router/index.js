import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import ParkingLotList from '../components/ParkingLotList'
import UpdateParkingLot from '../components/UpdateParkingLot'
import AddParkingLot from '../components/AddParkingLot'
import OrderManagement from '../views/OrderManagement'
import ParkingLotsStatus from '../components/ParkingLotsStatus'
import ParkingClerksMaintenance from '../components/ParkingClerksMaintenance'
import EmployeeMaintenance from '../components/EmployeeMaintenance'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/parking-lots',
          name: 'ParkingLotList',
          component: ParkingLotList
        },
        {
          path: '/add-parking-lot',
          name: 'addParkingLot',
          component: AddParkingLot
        },
        {
          path: '/update-parking-lot',
          name: 'updateParkingLot',
          component: UpdateParkingLot
        },
        {
          path: '/parking-lots-status',
          name: 'parking-lots-status',
          component: ParkingLotsStatus
        },
        {
          path: '/parking-clerks-maintenance',
          name: '/parking-clerks-maintenance',
          component: ParkingClerksMaintenance
        },
        {
          path: '/employee-list',
          name: 'EmployeeMaintenance',
          component: EmployeeMaintenance
        },
        {
          path: '/orders-maintenance',
          name: 'manageOrder',
          component: OrderManagement
        }
      ]
    }
  ]
})
