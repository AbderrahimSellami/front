<template>
  <b-form>
    <b-container>
      <b-navbar toggleable="sm" variant="secondary">
        <b-navbar-brand class="mb-2" href="/planning">Planning</b-navbar-brand>
        <b-navbar-brand class="mb-2" href="/nondispo">Saisir la non Disponibilité</b-navbar-brand>
        <b-navbar-brand class="mb-2" href="/listebinomes">Liste des binômes</b-navbar-brand>
        <b-navbar-nav type="dark" class="ml-auto">
          <b-nav-form class="d-flex align-items-center" text="Lang">
            <b-form-select v-model="selected" :options="list" value-field="value" text-field="text" class="mr-sm-2" style="border-color: black"></b-form-select>
          </b-nav-form>
          <b-nav-form class="d-flex align-items-center" text="Lang">
            <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark">Rechercher</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>
      <br><br>
      <div>
        <b-form-group label="Liste des thèmes proposés :" style="font-weight: bold" label-cols-lg="13" label-size="lg">
        </b-form-group>
      </div>
      <br><br><br>
      <div>
        <b-table :items="thèmes" :fields="fields">
          <template #cell(actions)="data">
            <b-button variant="secondary" size="sm" class="mr-1" @click="modifyTheme(data.item)">Modifier</b-button>
            <b-button @click="deleteRow(data.item.id)" variant="danger" size="sm" class="mr-2">Supprimer</b-button>
          </template>
        </b-table>
      </div>
      <b-button variant="primary" size="lg" class="mr-1" @click="proposer()">Proposer un Thème</b-button>
      <b-modal id="modal-1" v-model="modal" ref="modal" size="lg" title="Proposer un Thème" @show="resetModal" @hidden="resetModal" @ok="handleOk" header-bg-variant="primary" header-text-variant="light">
        <b-form @submit.prevent="submitProposedTheme">
          <b-form-group label="Nom du Thème:" label-for="themeInput">
            <b-form-input id="themeInput" v-model="proposedTheme.Theme" required></b-form-input>
          </b-form-group>
          <b-form-group label="Spécialité:" label-for="specialiteInput">
            <b-form-input id="specialiteInput" v-model="proposedTheme.Specialite" required></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary">{{ isEditing ? 'Modifier' : 'Proposer' }}</b-button>
        </b-form>
      </b-modal>
    </b-container>
  </b-form>
</template>

<script>
export default {
  name: 'EnseignantComponent',
  data() {
    return {
      selected: null,
      list: [
        { value: "enseignant", text: "Par Enseignant" },
        { value: "thème", text: "Par Thème" },
        { value: "spécialité", text: "Par Spécialité" },
      ],
      thèmes: [],
      fields: ["Theme", "Specialite", "actions"],
      modal: false,
      proposedTheme: { Theme: '', Specialite: '' },
      isEditing: false,
      editedThemeId: null,
    }
  },
  mounted() {
    this.fetchThemes();
  },
  methods: {
    fetchThemes() {
      fetch('http://127.0.0.1:8000/enseignant/liste-themes/')
        .then(response => response.json())
        .then(data => { 
          this.thèmes = data.themes;
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la récupération des thèmes:', error);
        });
    },
    deleteRow(id) {
      this.deleteTheme(id);
    },
    proposer() {
      this.modal = true;
    },
    submitProposedTheme() {
      if (this.isEditing) {
        fetch(`http://127.0.0.1:8000/enseignant/modifier-theme/${this.editedThemeId}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.proposedTheme)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.fetchThemes();
            this.modal = false;
            this.isEditing = false;
            this.editedThemeId = null;
            this.proposedTheme = { Theme: '', Specialite: '' };
          } else {
            console.error('Erreur lors de la mise à jour du thème:', data.message);
          }
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la mise à jour du thème:', error);
        });
      } else {
        fetch('http://127.0.0.1:8000/enseignant/proposer_theme/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.proposedTheme)
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            this.fetchThemes();
            this.modal = false;
            this.proposedTheme = { Theme: '', Specialite: '' };
          } else {
            console.error('Erreur lors de la proposition du thème:', data.message);
          }
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la proposition du thème:', error);
        });
      }
    },
    modifyTheme(theme) {
      this.isEditing = true;
      this.editedThemeId = theme.id;
      this.proposedTheme = { ...theme };
      this.modal = true;
    },
    deleteTheme(themeId) {
      fetch(`http://127.0.0.1:8000/enseignant/supprimer-theme/${themeId}/`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          this.fetchThemes();
        } else {
          console.error('Erreur lors de la suppression du thème:', data.message);
        }
      })
      .catch(error => {
        console.error('Une erreur s\'est produite lors de la suppression du thème:', error);
      });
    },
    resetModal() {
      this.proposedTheme = { Theme: '', Specialite: '' };
    },
    handleOk() {
      console.log('Modal fermé');
    }
  }
}
</script>

<style>
/*
