<template>
    <div>
      <b-row>
        <b-col>
          <b-form-group label="Ajouter la Non Disponibilité">
            <b-row>
              <b-col>
                <b-form-datepicker v-model="newNonDispo.date" required></b-form-datepicker>
              </b-col>
              <b-col>
                <b-form-input v-model="newNonDispo.heure" type="text" placeholder="Heure" required></b-form-input>
              </b-col>
              <b-col>
                <b-button variant="primary" @click="addNonDispo">Ajouter</b-button>
              </b-col>
            </b-row>
          </b-form-group>
        </b-col>
      </b-row>
      <br><br><br>
      <b-table :items="nonDispos" :fields="fields">
        <template #cell(actions)="row">
          <b-button size="sm" variant="danger" @click="removeNonDispo(row.item.id)">
            Supprimer
          </b-button>
        </template>
      </b-table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NonDispoComponent',
  
    /* eslint-disable */
    data() {
      return {
        newNonDispo: {
          date: null,
          heure: null
        },
        nonDispos: [],
        fields: ["date", "heure", "actions"],
      };
    },
    mounted() {
      this.fetchNonDispos();
    },
    methods: {
      fetchNonDispos() {
        fetch('http://127.0.0.1:8000/enseignant/nondispo/')
          .then(response => response.json())
          .then(data => {
            this.nonDispos = data.data;
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des non-disponibilités:', error);
          });
      },
      addNonDispo() {
        if (this.newNonDispo.date !== null && this.newNonDispo.heure !== null) {
          fetch('http://127.0.0.1:8000/enseignant/nondispo/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.newNonDispo)
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('La requête a échoué.');
            }
            return response.json();
          })
          .then(data => {
            this.nonDispos.push({
              id: data.id, // Assurez-vous de récupérer l'ID de la réponse
              date: this.newNonDispo.date,
              heure: this.newNonDispo.heure
            });
            this.newNonDispo.date = null;
            this.newNonDispo.heure = null;
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de l\'ajout de la non-disponibilité:', error);
          });
        }
      },
      removeNonDispo(id) {
        fetch(`http://127.0.0.1:8000/enseignant/nondispo/${id}/`, {
          method: 'DELETE'
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('La suppression a échoué.');
          }
          return response.json();
        })
        .then(data => {
          // Supprimer l'entrée du tableau côté client
          this.nonDispos = this.nonDispos.filter(item => item.id !== id);
        })
        .catch(error => {
          console.error('Une erreur s\'est produite lors de la suppression de la non-disponibilité:', error);
        });
      },
    }
  };
  </script>
  