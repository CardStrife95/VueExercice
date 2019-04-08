import Vue from 'vue'
import Router from 'vue-router'
import Applicant from '@/components/Applicant'
import ApiExercice from '@/components/ApiExercice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/applicant/:id',
      name: 'Applicant',
      component: Applicant
    },
    {
      path: '/',
      name: 'ApiExercice',
      component: ApiExercice
    }
  ]
})
