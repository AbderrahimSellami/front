<template>
 <b-form>
       <b-container>
           <br><br>
          <div>
               <b-form-group label="Choisir un Thème :" style="font-weight: bold" label-cols-lg="13"
                    label-size="lg">
                 </b-form-group>
              </div> <br><br><br>
          <div>
               <b-table :items="thèmes" :fields="fields">
                     <template #cell(actions)>
                     <b-button variant="primary" size="sm" class="mr-1" ref="btnShow"
                            @click="theme()">Sélectionner</b-button>
                     </template>
                  </b-table>
              </div>
    </b-container>
    </b-form>
</template>

<script>
import { BForm, BTable, BButton } from 'bootstrap-vue'

export default {
    name: 'themesComponent',
    components: {
        BForm, BTable, BButton
    },

    data() {
        return {
            selected: null,

            list: [
                { value: "enseignant", text: "Par Enseignant" },
                { value: "thème", text: "Par Thème" },
                { value: "spécialité", text: "Par Spécialité" },],

            thèmes: [

                {
                    Théme: "Gestion des soutenances",
                    Specialité: "GL",
                    Enseignant: "farah",
                },

                {
                    Théme: "Gestion des soutenances",
                    Specialité: "GL",
                    Enseignant: "farah",
                },

                {
                    Théme: "Gestion des soutenances",
                    Specialité: "GL",
                    Enseignant: "farah",
                },

                {
                    Théme: "Gestion des soutenances",
                    Specialité: "GL",
                    Enseignant: "farah",
                },

            ],
            fields: ["Théme", "Specialité", "Enseignant", "actions"],


        }
    },

    methods: {
        theme() {
            this.$router.push('/etudiant')
        }

    }
}
</script>

<style scoped>
.nav {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    padding: 80px;
    background-color: #f8f9fa;

}
</style>