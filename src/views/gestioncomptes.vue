<template>
  <b-form @submit.prevent="handleSubmit">
    <!-- Navbar and existing table -->
    <b-navbar toggleable="lg" type="dark" variant="secondary">
      <b-navbar-brand class="mx-auto" href="/gestioncomptes">Liste des utilisateurs</b-navbar-brand>
    </b-navbar>
    <br><br>
    <div>
      <b-table :items="items" :fields="fields">
        <template #cell(actions)="data">
          <b-button @click="deleteRow(data.item)" variant="danger" size="sm" class="mr-2" ref="btnShow1">
            Supprimer
          </b-button>
        </template>
      </b-table>
    </div>
    <b-button variant="primary" size="lg" class="mr-1" @click="showModal()">Ajouter un Utilisateur</b-button>

    <nav>
      <router-link to="/administrateur" class="custom-link">Retour</router-link>
    </nav>
    <router-view />

    <b-modal id="modal-1" v-model="modalShow" ref="modal" size="lg" title="Formulaire D'ajout d'un Utilisateur"
      @show="resetModal" @hidden="resetModal" @ok="handleOk" header-bg-variant="primary" header-text-variant="light">
      
      <b-form-group label="Nom" label-for="nom">
        <b-form-input id="nom" v-model="form.nom" required></b-form-input>
      </b-form-group>
      <b-form-group label="Prenom" label-for="prenom">
        <b-form-input id="prenom" v-model="form.prenom" required></b-form-input>
      </b-form-group>
      <b-form-group label="Login" label-for="login">
        <b-form-input id="login" v-model="form.login" required></b-form-input>
      </b-form-group>
      <b-form-group label="password" label-for="password">
        <b-form-input id="password" type="password" v-model="form.password" required></b-form-input>
      </b-form-group>
      <b-form-group label="Grade" label-for="grade">
        <b-form-select id="grade" v-model="form.grade" :options="local" required></b-form-select>
      </b-form-group>
      
      <b-button @click="ajouter()" type="submit" variant="primary">Ajouter</b-button>
    </b-modal>
  </b-form>
</template>

<script>
import { BTable, BButton, BModal, BFormGroup, BFormInput, BFormSelect } from 'bootstrap-vue';

export default {
  name: 'comptesComponent',

  components: {
    BTable,
    BButton,
    BModal,
    BFormGroup,
    BFormInput,
    BFormSelect,
  },
  
  data() {
    return {
      fields: [
        { key: 'nom', label: 'Nom' },
        { key: 'prenom', label: 'Prenom' },
        { key: 'email', label: 'Email' },
        { key: 'actions', label: 'Actions' }
      ],
      items: [],
      modalShow: false,
      form: {
        nom: '',
        prenom: '',
        grade: '',
        domaine: '',
        login: '',
        password: '',
      },
      selected: null,
      local: [
        { value: 'Admin', text: 'Admin' },
        { value: 'Enseignant', text: 'Enseignant' },
        { value: 'Etudiant', text: 'Etudiant' },
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
        console.log('Fetched comptes:', this.items);
      } catch (error) {
        console.error(error);
      }
    },

    deleteRow(item) {
      this.items = this.items.filter(i => i !== item);
    },
    /*
    async deleteRow(item) {
      console.log(`Attempting to delete user with ID: ${item.id}`);
      if (item.id !== undefined) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/utilisateurs/delete_user/${item.id}/`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Erreur lors de la suppression de l'utilisateur: ${errorText}`);
          }
          console.log(`User with ID: ${item.id} deleted successfully`);
          this.items = this.items.filter(i => i.id !== item.id);
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        }
      } else {
        console.error('ID utilisateur est undefined');
      }
    },
    */

    showModal() {
      this.modalShow = true;
    },

    resetModal() {
      this.form = {
        nom: '',
        prenom: '',
        grade: '',
        domaine: '',
        login: '',
        password: '',
      };
    },

    handleSubmit() {
      this.ajouter();
    },

    async ajouter() {
      try {
        const response = await fetch('http://127.0.0.1:8000/utilisateurs/ajout_user/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        });
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Erreur lors de l'ajout de l'utilisateur: ${errorText}`);
        }
        const newUser = await response.json();
        console.log('User added successfully:', newUser);
        this.items.push(newUser);
        this.retour();
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur:', error);
      }
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
