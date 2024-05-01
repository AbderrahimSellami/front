<template>
  <b-form>
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand class="mx-auto" href="/gestioncomptes"> Liste des utilisateurs </b-navbar-brand>
    </b-navbar>
    <br><br>
    <div>
      <b-table :items="items" :fields="fields">
        <template #cell(actions)="data">
          <b-button variant="success" size="sm" class="mr-1" ref="btnShow">
            Voir Détail
          </b-button>
          <b-button @click="deleteRow(data.item)" variant="danger" size="sm" class="mr-2" ref="btnShow1">
            Supprimer
          </b-button>
        </template>
      </b-table>
    </div>
    <b-button variant="primary" size="lg" class="mr-1" @click="showModal()"> Ajouter un Utilisateur </b-button>

    <nav>
      <router-link to="/administrateur" class="custom-link">Retour</router-link>
    </nav>
    <router-view />

    <b-modal id="modal-1" v-model="modalShow" ref="modal" size="lg" title="Formulaire D'ajout d'un Utilisateur"
      @show="resetModal" @hidden="resetModal" @ok="handleOk" header-bg-variant="primary" header-text-variant="light">

      <!-- Votre formulaire pour ajouter un utilisateur -->

    </b-modal>
  </b-form>
</template>

<script>
import { BTable, BButton, BModal } from 'bootstrap-vue';

export default {
  name: 'comptesComponent',
  components: {
    BTable,
    BButton,
    BModal,
  },
  data() {
    return {
      fields: ['Utilisateur', 'Login', 'Mot_de_pass', 'actions'],
      items: [],
      modalShow: false,
      form: {
        nom: '',
        prenom: '',
        binome: '',
        grade: '',
        domaine: '',
        login: '',
        motdepass: '',
        date: '',
      },
      selected: null,
      local: [
        { value: 'Admin', text: 'Admin' },
        { value: 'Enseignant', text: 'Enseignant' },
        { value: 'Etudiant', text: 'Etudiant' },
      ],
      spécialite: null,
      options: [
        { value: 'GL', text: 'GL' },
        { value: 'IA', text: 'IA' },
        { value: 'ASR', text: 'ASR' },
        { value: 'SIA', text: 'SIA' },
      ],
    };
  },
  mounted() {
    this.fetchComptes();
  },
  methods: {
    async fetchComptes() {
      try {
        const response = await fetch('http://127.0.0.1:8000/utilisateurs/comptes/');
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des comptes');
        }
        const data = await response.json();
        this.items = data.data;
      } catch (error) {
        console.error(error);
      }
    },
    deleteRow(item) {
      this.items = this.items.filter(i => i !== item);
    },
    showModal() {
      this.modalShow = true;
    },
    resetModal() {
      this.form = {
        nom: '',
        prenom: '',
        binome: '',
        grade: '',
        domaine: '',
        login: '',
        motdepass: '',
        date: '',
      };
    },
    ajouter() {
      // Logique pour ajouter un utilisateur
    },
    retour() {
      this.modalShow = false;
    },
  },
};
</script>

<style>
/* Styles CSS */
</style>
