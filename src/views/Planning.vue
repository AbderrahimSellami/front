<template>
  <b-form>
    <b-container>
      <div>
        <b-form-group label="Planning:" style="font-weight: bold" label-cols-lg="13" label-size="lg"></b-form-group>
      </div>
      <br><br><br>
      <div>
        <b-table :items="planning" :fields="fields"> </b-table>
      </div>
    </b-container>
  </b-form>
</template>

<script>
import { BForm, BTable } from 'bootstrap-vue';
import axios from 'axios';

export default {
  name: 'planningComponent',
  components: {
    BForm, BTable
  },
  data() {
    return {
      planning: [],
      fields: [
        { key: 'theme', label: 'Thème de Soutenance' },
        { key: 'date', label: 'Date' },
        { key: 'local', label: 'Local' },
        { key: 'binome', label: 'Binôme' },
        { key: 'encadreur', label: 'Encadreur' },
        { key: 'jury', label: 'Jury' }
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
        console.log('Réponse de l\'API:', response.data); // Affichez les données reçues depuis l'API
        if (response.data.success) {
          this.planning = response.data.data;
          console.log('Données assignées:', this.planning); // Vérifiez que les données sont correctement assignées
        } else {
          console.error('La récupération des données a échoué:', response.data.error);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }
  }
}
</script>

