import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import etudiant from '../views/Etudiant.vue'
import enseignant from '../views/Enseignant.vue'
import Administrateur from '@/views/Administrateur.vue'
import planning from '../views/Planning.vue'
import Gestioncomptes from '../views/gestioncomptes.vue'
import Informations from '@/views/Informations.vue'
import lance from '@/views/LancePlatforme.vue'
import themes from '@/views/themes.vue'
import Nondisponibilite from '@/views/nondisponibilite.vue'
import listedesbinomes from '../views/listedesbinomes.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'homeComponent',
    component: HomeView
  },

   {
    path: '/etudiant',
    name: 'EtudiantComponent',
    component: etudiant
  },
   {
    path: '/enseignant',
    name: 'EnseignantComponent',
    component: enseignant
  },
   
   {
    path: '/administrateur',
    name: 'administrateurComponent',
    component: Administrateur
  },
   
    {
    path: '/planning',
    name: 'planningComponent',
    component: planning
  },
    
     {
    path: '/gestioncomptes',
    name: 'comptesComponent',
    component: Gestioncomptes
  },
     
      {
    path: '/Informations',
    name: 'InformationsComponent',
    component:Informations
  },
  
      {
    path: '/lance',
    name: 'lanceComponent',
    component: lance,
  },
      
        {
    path: '/themes',
    name: 'themesComponent',
    component: themes,
  },
        
         {
    path: '/nondispo',
    name: 'nondispoComponent',
    component: Nondisponibilite,
  },

     {
    path: '/listebinomes',
    name: 'listeComponent',
    component: listedesbinomes,
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
