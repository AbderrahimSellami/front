<template>
    <b-form>
         <b-container>
             <b-navbar toggleable="lg" variant="secondary">
                 <b-navbar-brand class="mb-2" href="/planning"> Planning</b-navbar-brand>
                 <b-navbar-brand class="mb-2" href="/informations"> Informations </b-navbar-brand>
 
 
                 <b-navbar-nav type="dark" class="ml-auto">
                     <b-nav-form class="d-flex align-items-center" text="Lang">
                         <b-form-select v-model="selected" :options="list" value-field="value" text-field="text"
                             class="mr-sm-2" style="border-color: black"></b-form-select>
                     </b-nav-form>
                     <b-nav-form class="d-flex align-items-center" text="Lang">
                         <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark">Rechercher</b-button>
                     </b-nav-form>
                 </b-navbar-nav>
             </b-navbar>
             <br><br>
 
             <div>
                 <b-form-group label="Liste des Thèmes:" style="font-weight: bold" label-cols-lg="13"
                     label-size="lg">
                 </b-form-group>
             </div> <br><br><br>
             <div>
                 <b-table :items="thèmes" :fields="fields">
                     <template #cell(actions)>
                         
                     </template>
                 </b-table>
             </div>
         </b-container>
     </b-form>
 </template>
 
 <script>
 import { BButton, BForm } from 'bootstrap-vue';
 export default {
     name:'EtudiantComponent',
          components: {
         BButton, BForm
     },
 
     data() {
         return {
             thèmes: [],
             fields: ["Theme", "Enseignant","Specialite"], // Modifiez "Théme" en "Theme"
             selected: null,
             list: [
                 { value: "enseignant", text: "Par Enseignant" },
                 { value: "thème", text: "Par Thème" },
                 { value: "spécialité", text: "Par Spécialité" },
             ],
         }
     },
     mounted() {
         this.fetchThemes(); // Appeler la fonction pour récupérer les thèmes lors du montage du composant
     },
     methods: {
         fetchThemes() {
             fetch('http://127.0.0.1:8000/etudiant/liste_themes/')
                 .then(response => response.json())
                 .then(data => {
                     this.thèmes = data.themes;
                 })
                 .catch(error => {
                     console.error('Une erreur s\'est produite lors de la récupération des thèmes:', error);
                 });
         },
         theme() {
             this.$router.push('/themes');
         },
     }
 }
 </script>
 
 <style>
 
 </style>
 