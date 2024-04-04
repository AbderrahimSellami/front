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

      <b-row class="justify-content-centre">
        <b-col md="7"><b-form-group label="Type Utilisateur :" style="font-weight: bold;">
            <b-form-select :options="local" v-model="selected" size="lg" class="form-control "
              style="font-weight: bold;"></b-form-select>
          </b-form-group> </b-col>
      </b-row>
      <b-row>
        <b-col> <b-form-group label=" Nom:" style="font-weight: bold;">
            <b-form-input id="nom" v-model=" form.nom "></b-form-input>
          </b-form-group></b-col>
        <b-col> <b-form-group label="Prenom:" style="font-weight: bold;">
            <b-form-input id="prenom" v-model="form.prenom"></b-form-input>
          </b-form-group></b-col>
      </b-row>
      <b-row>
        <b-form-group v-if="selected === 'Etudiant'" class="mb-3" label="Date_de_Naissance:" style="font-weight: bold;">
          <b-form-Datepicker id="date" v-model="form.date"
            placeholder="Choisir ta date de naissance"></b-form-Datepicker> </b-form-group></b-row>

      <b-row>
        <b-col> <b-form-group v-if="selected === 'Etudiant'" label=" Binome:" style="font-weight: bold;">
            <b-form-input id="binome" v-model="form.binome"></b-form-input>
          </b-form-group></b-col>
        <b-col>
          <b-form-group v-if="selected === 'Etudiant'" label=" Spécialité:" style="font-weight: bold;"
            v-slot="{ ariaDescribedby }">
            <b-form-radio-group v-model="specialité" :options="options" :aria-describedby="ariaDescribedby"
              name="plain-inline" plain></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col> <b-form-group v-if="selected === 'Enseignant'" label=" Domaine:" style="font-weight: bold;">
            <b-form-input id="domaine" v-model="form.domaine"></b-form-input>
          </b-form-group></b-col>
        <b-col> <b-form-group v-if="selected === 'Enseignant'" label="Grade:" style="font-weight: bold;">
            <b-form-input id="grade" v-model="form.grade"></b-form-input>
          </b-form-group></b-col>
      </b-row>
      <b-row>
        <b-col> <b-form-group label="Login:" style="font-weight: bold;">
            <b-form-input id="login" v-model="form.login"></b-form-input>
          </b-form-group></b-col>
        <b-col><b-form-group label="Mot de pass:" style="font-weight: bold;">
            <b-form-input id="mdp" v-model="form.motdepass"></b-form-input>
          </b-form-group></b-col>
      </b-row>
      <template v-slot:modal-footer>
        <b-button variant="primary" size="lg" @click="ajouter()">
          Ajouter </b-button>
        <b-button variant="danger" size="lg" class="pb-2" @click="retour()">
          cancel </b-button>
      </template>



    </b-modal>


  </b-form>
</template>

<script>
import {BTable,BButton, BModal,BForm,BFormRadioGroup} from 'bootstrap-vue'
export default {
    name: 'comptesComponent',
    components: {
    BTable,BButton,BModal ,BForm ,BFormRadioGroup
    },


   data() {
      return {
        fields: ['Utilisateur', 'Login', 'Mot_de_pass','actions'],
        items: [
          { Utilisateur: 'admin', Login: 'zenatilina2002@gmail.com', Mot_de_pass: 'GL' },
          { Utilisateur: 'Enseignant', Login: 'Tiabmelissa@2002@gmail.com', Mot_de_pass: 'NN' },
          { Utilisateur: 'Etudiant', Login: 'zenatilina2002@gmail.com', Mot_de_pass: 'asr' },
          { Utilisateur: 'Etudiant', Login: 'zenatilina2002@gmail.com', Mot_de_pass: 'info' },
        ],
        
        selected:null,
        local:[
          { value:'Admin', text:'Admin'},
          { value: 'Enseignant', text:'Enseignant'},
          { value:'Etudiant', text:'Etudiant'},

         ],
        spécialite:null,
        options:[ 
          { value:'GL', text:'GL'},
          {value:'IA', text:'IA'},
          { value:'ASR', text:'ASR'},  
          { value:'SIA', text:'SIA'},              
        ], 


        modalShow: false,
        form: [ 
          'nom',
          'prenom',
          'binome',
          'grade',
          'domaine',
          'login',
          'motdepass',
           'date'
        
        ],
            



            }


      },
      
 
    
  methods:{
    deleteRow(item) {
  this.items = this.items.filter(i => i !== item);
},
 showModal() {
            
            this.modalShow = true;
        },
    retour() {
      this.modalShow = false;    },

      ajouter(item) {
        item.Login = this.form.login;
        item.Mot_de_pass =  this.form.motdepass;
       },

  }
 
}
</script>

<style>

</style>