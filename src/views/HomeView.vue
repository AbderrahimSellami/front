<template>
  <b-forme>
<b-container>
<b-row>
  <b-col sm="4" lg="4" class="pb-2">    <b-avatar variant="secondary"></b-avatar><label style="font-weight: bold;">Email :</label></b-col>
  <b-col sm="7" lg="4" class="pb-2"><b-form-input type="text" style="border-color: black;"></b-form-input></b-col>
</b-row>
</b-container>
<b-container>
<b-row>
  <b-col sm="4" lg="4" class="pb-2">    <b-avatar variant="secondary"></b-avatar><label style="font-weight: bold;">Mot de Pass :</label></b-col>
  <b-col  sm="7" lg="4" class="pb-2"><b-form-input type="password" style="border-color: black;"></b-form-input></b-col>
</b-row>
</b-container>
<b-container>
<b-row>
  <b-col sm="4" lg="4" class="pb-2">    <b-avatar variant="secondary"></b-avatar><label style="font-weight: bold;">Type Utilisateur : </label></b-col>
  <b-col  sm="7" lg="4" class="pb-2">    <b-form-select v-model="selected" :options="list"   value-field="value"
      text-field="text" class="form-select " style="border-color: black;"></b-form-select></b-col>
</b-row>
</b-container>
<b-button @click="test()" size="lg"   variant="success" class="pb-2">  Se Connecter </b-button>

  </b-forme>
</template>

<script>
// @ is an alias to /src
import {BButton,BFormInput,BAvatar,BFormSelect }from 'bootstrap-vue'
export default {
  name: 'HomeView',

  components: {

    BButton, BFormInput, BAvatar, BFormSelect,
  },



  data() {

    return {
      selected: null,
      list: [
        { value: 'a', text: 'Etudiant' },
        { value: 'b', text: 'Enseignant' },
        { value: 'c', text: 'Administrateur' },
      ]

    }

  },
  methods: {
    test() {
      if (this.selected == "a") { this.$router.push('/etudiant')}
      else if (this.selected == "b") { this.$router.push('/enseignant') }
       else if (this.selected == "c") { this.$router.push('/administrateur') }
            else {this.$router.push ('/')}
          }
    }
  }

  


</script>
