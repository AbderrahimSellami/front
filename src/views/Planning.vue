<template>
  <b-form @submit.prevent="handleFormSubmit">
    <b-container>
      <div>
        <b-form-group label="Planning:" style="font-weight: bold" label-cols-lg="13" label-size="lg"></b-form-group>
      </div>
      <b-row>
        <b-col>
          <b-form-group label="Thème:" style="font-weight: bold">
            <b-form-input v-model="newTheme.Theme"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Date:" style="font-weight: bold">
            <b-form-input v-model="newTheme.Date"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Local:" style="font-weight: bold">
            <b-form-input v-model="newTheme.Local"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Binôme:" style="font-weight: bold">
            <b-form-input v-model="newTheme.Binome"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Encadreur:" style="font-weight: bold">
            <b-form-input v-model="newTheme.Encadreur"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group label="Jury:" style="font-weight: bold">
            <b-form-input v-model="newTheme.Jury"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col class="align-self-end">
          <b-button variant="primary" type="submit">Ajouter Thème</b-button>
        </b-col>
      </b-row>
      <br><br><br>
      <div>
        <b-table :items="planning" :fields="fields" responsive>
          <template #cell(actions)="row">
            <b-button variant="danger" size="sm" @click="deleteTheme(row.item.id)">Supprimer</b-button>
          </template>
        </b-table>
      </div>
    </b-container>
  </b-form>
</template>

<script>
import { BForm, BTable, BFormGroup, BFormInput, BRow, BCol, BButton } from 'bootstrap-vue';
import axios from 'axios';

export default {
  name: 'planningComponent',
  components: {
    BForm, BTable, BFormGroup, BFormInput, BRow, BCol, BButton
  },
  data() {
    return {
      planning: [],
      newTheme: {
        Theme: '',
        Date: '',
        Local: '',
        Binome: '',
        Encadreur: '',
        Jury: ''
      },
      fields: [
        { key: 'Theme', label: 'Thème de Soutenance' },
        { key: 'Date', label: 'Date' },
        { key: 'Local', label: 'Local' },
        { key: 'Binome', label: 'Binôme' },
        { key: 'Encadreur', label: 'Encadreur' },
        { key: 'Jury', label: 'Jury' },
        { key: 'actions', label: 'Actions' }
      ]
    }
  },
  mounted() {
    this.fetchPlanning();
  },
  methods: {
    async fetchPlanning() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/planning/get_planning/');
        if (response.data.success) {
          this.planning = response.data.data;
        } else {
          console.error('La récupération des données a échoué:', response.data.error);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    },
    async handleFormSubmit() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/planning/add_theme/', this.newTheme);
        if (response.data.success) {
          this.fetchPlanning();
          this.newTheme = { Theme: '', Date: '', Local: '', Binome: '', Encadreur: '', Jury: '' };
        } else {
          console.error('Erreur lors de l\'ajout du thème:', response.data.error);
        }
      } catch (error) {
        console.error('Erreur lors de l\'ajout du thème:', error);
      }
    },
    async deleteTheme(id) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/planning/delete_theme/', { id });
        if (response.data.success) {
          this.fetchPlanning();
        } else {
          console.error('Erreur lors de la suppression du thème:', response.data.error);
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du thème:', error);
      }
    }
  }
}
</script>

<style>
/* Ajoutez votre style ici si nécessaire */
</style>
