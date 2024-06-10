<template>
  <b-form>
    <b-container>
      <b-navbar toggleable="sm" variant="secondary">
        <b-navbar-brand href="/planning">Planning</b-navbar-brand>
        <b-navbar-brand href="/gestioncomptes">Gestion des comptes</b-navbar-brand>
        <b-navbar-brand href="/lance">Lancer la Platforme</b-navbar-brand>
        <b-navbar-nav type="dark" class="ml-auto" right>
          <b-nav-form class="d-flex align-items-center" text="Lang">
            <b-form-select v-model="selected" :options="list" value-field="value" text-field="text" class="mr-sm-2" style="border-color: black"></b-form-select>
          </b-nav-form>
          <b-nav-form class="d-flex align-items-center" text="Lang">
            <b-button size="lg" class="my-2 my-sm-0" type="submit" variant="dark">Rechercher</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-navbar>

      <br /><br />
      <b-row>
        <label bg-variant="lefth" label-cols-lg style="font-weight: bold" size="lg">Liste des Binomes affectées et non affectées</label>
      </b-row>

      <div>
        <b-table :items="items" :fields="fields">
         
        </b-table>
      </div>

      <b-modal id="modal-1" v-model="modalShow" ref="modal" size="lg" title="Formulaire D'ajout d'une Soutenance" @show="resetModal" @hidden="resetModal" @ok="handleOk" header-bg-variant="primary" header-text-variant="light">
        <b-form @submit.prevent="handleFormSubmit">
          <b-row>
            <b-col>
              <b-form-group label="Nom:" style="font-weight: bold">
                <b-form-input id="nom" v-model="form.nom"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Prenom:" style="font-weight: bold">
                <b-form-input id="prenom" v-model="form.prenom"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Spécialité:" style="font-weight: bold">
                <b-form-input id="specialite" v-model="form.specialite"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Théme:" style="font-weight: bold">
                <b-form-input id="theme" v-model="form.theme"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Encadreur:" style="font-weight: bold">
                <b-form-input id="enseignant" v-model="form.enseignant"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Président:" style="font-weight: bold">
                <b-form-input id="president" v-model="form.president"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group label="Examinateur 1:" style="font-weight: bold">
                <b-form-input id="examinateur1" v-model="form.examinateur1"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Examinateur 2:" style="font-weight: bold">
                <b-form-input id="examinateur2" v-model="form.examinateur2"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-form-group label="Date et Heure:" style="font-weight: bold">
              <div class="d-flex">
                <b-col>
                  <b-form-datepicker id="datetime-date" v-model="form.date" class="mr-2" placeholder="Choisir une date"></b-form-datepicker>
                </b-col>
                <b-col>
                  <b-form-timepicker id="datetime-time" v-model="form.time" placeholder="Choisir une heure"></b-form-timepicker>
                </b-col>
              </div>
            </b-form-group>
          </b-row>
          <br />
          <b-row class="justify-content-centre">
            <b-col md="7">
              <b-form-group label="Local :" style="font-weight: bold">
                <b-form-select :options="local" v-model="form.selected" size="lg" class="form-control" style="font-weight: bold"></b-form-select>
              </b-form-group>
            </b-col>
            <b-col class="mt-4" style="font-weight: bold">
              La Soutenance se faire dans : <strong>{{ form.selected }}</strong>
            </b-col>
          </b-row>
          <b-row>
            <div class="mt-3">
              <b-button variant="primary" size="lg" type="submit">
                Ajouter
              </b-button>
            </div>
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
  BFormInput,
  BFormGroup,
  BFormSelect,
  BFormDatepicker,
  BFormTimepicker,
  BModal,
} from "bootstrap-vue";

export default {
  name: "administrateurComponent",
  components: {
    BButton,
    BForm,
    BContainer,
    BRow,
    BCol,
    BTable,
    BNavbar,
    BFormInput,
    BFormGroup,
    BFormSelect,
    BFormDatepicker,
    BFormTimepicker,
    BModal,
  },
  methods: {
    GestionComptes() {
      this.$router.push("/gestioncomptes");
    },
    showModal(item, index) {
      this.form.nom = item.Nom;
      this.form.prenom = item.Prenom;
      this.form.specialite = item.Specialité;
      this.form.theme = item.Théme;
      this.form.enseignant = item.Enseignant;
      this.currentIndex = index;
      this.modalShow = true;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    handleFormSubmit() {
      const payload = {
        nom: this.form.nom,
        prenom: this.form.prenom,
        specialite: this.form.specialite,
        theme: this.form.theme,
        enseignant: this.form.enseignant,
        president: this.form.president,
        examinateur1: this.form.examinateur1,
        examinateur2: this.form.examinateur2,
        Date_debut: `${this.form.date}T${this.form.time}`,
        salle: this.form.selected,
      };

      fetch("http://127.0.0.1:8000/utilisateurs/soutenance/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            this.$bvToast.toast("Soutenance ajoutée avec succès", {
              title: "Succès",
              variant: "success",
              solid: true,
            });
            this.modalShow = false;
          } else {
            this.$bvToast.toast("Erreur lors de l'ajout de la soutenance", {
              title: "Erreur",
              variant: "danger",
              solid: true,
            });
          }
        })
        .catch((error) => {
          console.error("Erreur:", error);
          this.$bvToast.toast("Erreur lors de l'ajout de la soutenance", {
            title: "Erreur",
            variant: "danger",
            solid: true,
          });
        });
    },
  },
  data() {
    return {
      modalShow: false,
      form: {
        nom: "",
        prenom: "",
        specialite: "",
        theme: "",
        enseignant: "",
        president: "",
        examinateur1: "",
        examinateur2: "",
        date: "",
        time: "",
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
        { value: "a14", text: "Amphi 14" },
        { value: "a26", text: "Amphi 26" },
        { value: "a13", text: "Amphi 13" },
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
      fields: ["Nom", "Prenom", "Specialité", "Théme", "Enseignant"],
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
