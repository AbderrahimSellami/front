<template>
    <b-form @submit.prevent="handleSubmit">
      <!-- Navbar -->
      <b-navbar toggleable="lg" type="dark" variant="secondary">
        <b-navbar-brand class="mx-auto" href="/lance"> Platforme Initiale</b-navbar-brand>
      </b-navbar>
      <br><br>
      <!-- Formulaire de saisie -->
      <b-row>
        <b-col>
          <b-form-group class="mb-3" label="Les Soutenances commence le :" style="font-weight: bold;">
            <b-form-datepicker v-model="dateDebut" class="mr-2" placeholder="Choisir une date"></b-form-datepicker>
            <b-form-timepicker v-model="heureDebut" placeholder="Choisir une heure"></b-form-timepicker>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group class="mb-3" label="jusqu'au :" style="font-weight: bold;">
            <b-form-datepicker v-model="dateFin" class="mr-2" placeholder="Choisir une date"></b-form-datepicker>
            <b-form-timepicker v-model="heureFin" placeholder="Choisir une heure"></b-form-timepicker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group class="mb-3" label="La durée de chaque Soutenance :" style="font-weight: bold;">
            <b-form-timepicker v-model="duree" placeholder="Choisir une heure"></b-form-timepicker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group class="mb-3" label="Local :" style="font-weight: bold;">
            <b-form-select v-model="selected" :options="local" :select-size="4"></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <!-- Bouton de validation -->
      <b-button type="submit" variant="primary">Valider</b-button>
      <!-- Lien de retour -->
      <nav>
        <router-link to="/administrateur" class="custom-link">Retour</router-link>
      </nav>
      <router-view />
    </b-form>
  </template>
  
  <script>
  import { BFormDatepicker, BFormTimepicker, BFormSelect } from 'bootstrap-vue'
  
  export default {
    components: {
      BFormDatepicker,
      BFormTimepicker,
      BFormSelect,
    },
    data() {
      return {
        selected: null,
        local: [
          { value: 's1', text: 'salle 1' },
          { value: 's2', text: 'salle 2' },
          { value: 's3', text: 'salle 3' },
          { value: 's4', text: 'salle 4' },
          { value: 'a14', text: 'Amphi 14' },
          { value: 'a26', text: 'Amphi 26' },
          { value: 'a13', text: 'Amphi 13' },
          { value: 'a16', text: 'Amphi 16' },
        ],
        dateDebut: null,
        dateFin: null,
        heureDebut: null,
        heureFin: null,
        duree: null,
      }
    },
    methods: {
      handleSubmit() {
        // Créer un objet avec les données du formulaire
        const formData = {
          Date_debut: this.dateDebut,
          Date_fin: this.dateFin,
          heure_debut: this.heureDebut,
          heure_fin: this.heureFin,
          duree: this.duree,
          salle: this.selected,
        }
        // Envoyer les données au backend
        fetch('http://127.0.0.1:8000/planning/plateforme/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Erreur lors de l\'enregistrement des données');
          }
          return response.json();
        })
        .then(data => {
          // Gérer la réponse du backend si nécessaire
          console.log('Données enregistrées avec succès:', data);
        })
        .catch(error => {
          console.error('Erreur lors de la soumission du formulaire:', error);
        });
      },
    },
  }
  </script>
  
  <style>
  /* Styles CSS */
  </style>
  