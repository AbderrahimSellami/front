<template>
    <b-form>
        <b-container>
            <b-navbar toggleable="sm" variant="secondary">
                <b-navbar-brand class="mb-2" href="/planning"> Planning</b-navbar-brand>
                <b-navbar-brand class="mb-2" href="/nondispo"> Saisir la non Disponibilité</b-navbar-brand>
                <b-navbar-brand class="mb-2" href="/listebinomes"> liste des binomes </b-navbar-brand>


                <b-navbar-nav type="dark" class="ml-auto">
                    <b-nav-form class="d-flex align-items-center" text="Lang">
                        <b-form-select v-model="selected" :options="list" value-field="value" text-field="text"
                            class="mr-sm-2" style="border-color: black"></b-form-select>
                    </b-nav-form>
                    <b-nav-form class="d-flex align-items-center" text="Lang">
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="dark">Rechercher</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-navbar>
            <br><br>
            <div>
                <b-form-group label="Liste des thèmes proposées :" style="font-weight: bold" label-cols-lg="13"
                    label-size="lg">
                </b-form-group>
            </div> <br><br><br>

            <div>
                <b-table :items="thèmes" :fields="fields">
                    <template #cell(actions)="data">
                        <b-button variant="secondary" size="sm" class="mr-1" ref="btnShow" @click="theme()">
                            Modifier
                        </b-button>
                        <b-button @click="deleteRow(data.item)" variant="danger" size="sm" class="mr-2" ref="btnShow1">
                            Supprimer
                        </b-button>
                    </template>
                </b-table>
            </div>
            <b-button variant="primary" size="lg" class="mr-1" @click="proposer()"> Proposer un Thème </b-button>
            <b-modal id="modal-1" v-model="modal" ref="modal" size="lg" title="Proposer un Thème" @show="resetModal"
                @hidden="resetModal" @ok="handleOk" header-bg-variant="primary" header-text-variant="light">
            </b-modal>

        </b-container>
    </b-form>
</template>

<script>
import {BForm} from 'bootstrap-vue'
export default {
    name: 'EnseignantComponent',
    components: {
        BForm
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
                },

                {
                    Théme: "Gestion des examens",
                    Specialité: "asr",
                },
            ],
            fields: ["Théme", "Specialité",  "actions"],

            modal:false
                    
            
        } 

    },
    methods: {


        deleteRow(item) {
            this.thèmes = this.thèmes.filter(i => i !== item);
        },

      proposer() {
          this.modal=true      }
    }

}
</script>


<style>

</style>