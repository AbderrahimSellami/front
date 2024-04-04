<template>
  <b-form>
    <b-container>
      <b-navbar toggleable="sm" variant="secondary">
        <b-navbar-brand href="/planning">Planning</b-navbar-brand>
        <b-navbar-brand href="/gestioncomptes">Gestion des comptes
        </b-navbar-brand>
        <b-navbar-brand href="/lance">Lancer la Platforme</b-navbar-brand>

        <b-navbar-nav type="dark" class="ml-auto" right>
          <b-nav-form class="d-flex align-items-center" text="Lang">
            <b-form-select v-model="selected" :options="list" value-field="value" text-field="text" class="mr-sm-2"
              style="border-color: black"></b-form-select>
          </b-nav-form>
          <b-nav-form class="d-flex align-items-center" text="Lang">
            <b-button size="lg" class="my-2 my-sm-0" type="submit" variant="dark">Rechercher</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>

      <br /><br />
      <b-row>
        <label bg-variant="lefth" label-cols-lg style="font-weight: bold" size="lg">Liste des Binomes affectées et non
          affectées</label>
      </b-row>

      <div>
        <b-table :items="items" :fields="fields">
          <template #cell(actions)="data">
            <b-button variant="primary" size="sm" class="mr-1" ref="btnShow" @click="showModal(data.item, data.index)">
              Ajouter la soutenance
            </b-button>
          </template>
        </b-table>
      </div>
      <b-modal id="modal-1" v-model="modalShow" ref="modal" size="lg" title="Formulaire D'ajout  d'une Soutenance"
        @show="resetModal" @hidden="resetModal" @ok="handleOk" header-bg-variant="primary" header-text-variant="light">
        <b-form>
          <b-row>
            <b-col>
              <b-form-group label="Nom:" style="font-weight: bold">
                <b-form-input id="nom" v-model="form.Nom">
                </b-form-input> </b-form-group></b-col>
            <b-col>
              <b-form-group label="Prenom:" style="font-weight: bold">
                <b-form-input id="prenom" v-model="form.Prenom"></b-form-input>
              </b-form-group> </b-col></b-row>
          <b-row><b-col><b-form-group label="Spécialité:" style="font-weight: bold">
                <b-form-input id="spécialité" v-model="form.Specialité"></b-form-input> </b-form-group></b-col>
            <b-col>
              <b-form-group label="Théme:" style="font-weight: bold">
                <b-form-input id="thème" v-model="form.Théme"></b-form-input> </b-form-group></b-col></b-row>
          <b-row><b-col>
              <b-form-group label="Encadreur:" style="font-weight: bold">
                <b-form-input id="enseignant" v-model="form.Enseignant"></b-form-input> </b-form-group></b-col>
            <b-col>
              <b-form-group label="Président:" style="font-weight: bold">
                <b-form-input id="Président" v-model="form.Président"></b-form-input> </b-form-group></b-col></b-row>
          <b-row><b-col>
              <b-form-group label="Examinateur 1:" style="font-weight: bold">
                <b-form-input id="Examinateur 1" v-model="form.Examinateur1"></b-form-input> </b-form-group></b-col>
            <b-col><b-form-group label="Examinateur 2:" style="font-weight: bold">
                <b-form-input id="Examinateur 2" v-model="form.Examinateur2"></b-form-input>
              </b-form-group></b-col></b-row>
          <b-row><b-form-group label="Date:" style="font-weight: bold">
              <div class="d-flex">
                <b-col>
                  <b-form-datepicker id="datetime-date" v-model="dateValue" class="mr-2"
                    placeholder="Choisir une date"></b-form-datepicker></b-col>
                <b-col>
                  <b-form-timepicker id="datetime-time" v-model="timeValue"
                    placeholder="Choisir une heure"></b-form-timepicker></b-col>
              </div>
            </b-form-group></b-row>
          <br />

          <b-row class="justify-content-centre">
            <b-col md="7"><b-form-group label="Local :" style="font-weight: bold">
                <b-form-select :options="local" v-model="selected" size="lg" class="form-control"
                  style="font-weight: bold"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col class="mt-4" style="font-weight: bold">
              La Soutenance se faire dans : <strong>{{ selected }}</strong>
            </b-col>
          </b-row>
          <b-row>
            <template>
              <div class="mt-3">
                <b-button variant="primary" size="lg" @click="handleButtonClick">
                  Ajouter
                </b-button>
              </div>
            </template>
          </b-row>
        </b-form>
      </b-modal>
    </b-container>
  </b-form>
</template>

<script>
import {
  BButton,
  BForm,
  BContainer,
  BRow,
  BCol,
  BTable,
  BNavbar,
} from "bootstrap-vue";
export default {
  name: 'administrateurComponent',
  components: {
    BButton,
    BForm,
    BContainer,
    BRow,
    BCol,
    BTable,
    BNavbar,
  },
  methods: {
    GestionComptes() {
      this.$router.push("/gestioncomptes");
    },
    showModal(item, index) {
      this.form.Nom = item.Nom;
      this.form.Prenom = item.Prenom;
      this.form.Specialité = item.Specialité;
      this.form.Théme = item.Théme;
      this.form.Enseignant = item.Enseignant;
      this.currentIndex = index;
      this.modalShow = true;
    },

    resetModal() {
      this.name = "";
      this.nameState = null;
    },
  },

  data() {
    return {
      modalShow: false,
      form: {
        Nom: "",
        Prenom: "",
        Specialité: "",
        Théme: "",
        Enseignant: "",
        Président: "",
        Examinateur1: "",
        Examinateur2: "",
        dateValue: "",
        timeValue: "",
        selected: "",
      },
      currentIndex: null,

      selected: null,
      list: [
        { value: "a", text: "Par Etudiant" },
        { value: "b", text: "Par Enseignant" },
        { value: "c", text: "Par Thème" },
        { value: "d", text: "Par Spécialité" },
      ],
      local: [
        { value: "s1", text: "salle 1" },
        { value: "s2", text: "salle 2" },
        { value: "s3", text: "salle 3" },
        { value: "s4", text: "salle 4" },
        { value: "a14", text: "Amphi  14" },
        { value: "a26", text: "Amphi  26" },
        { value: "a13", text: "Amphi  13" },
        { value: "a16", text: "Amphi 16" },
      ],

      items: [
        {
          Nom: "Lina",
          Prenom: "Zenati",
          Specialité: "GL",
          Théme: "Gestion des Soutenances",
          Enseignant: "Farah Zoubeir",
        },
        {
          Nom: "Tiab",
          Prenom: "Mélissa",
          Specialité: "ASR",
          Théme: "Gestion des soins",
          Enseignant: "Farah Zoubeir",
        },

        {
          Nom: "Zenati",
          Prenom: "Massi",
          Specialité: "GL",
          Théme: "",
          Enseignant: "",
        },
      ],

      fields: ["Nom", "Prenom", "Specialité", "Théme", "Enseignant", "actions"],
    };
  },
  totalRows: 1,
  currentPage: 1,
  perPage: 5,
  pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
  sortBy: "",
  filter: null,
  filterOn: [],
  infoModal: {
    id: "info-modal",
    title: "",
    content: "",
  },
};
</script>

<style></style>
