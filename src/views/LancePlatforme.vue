<template>


    <b-forme>
        <b-navbar toggleable="lg" type="dark" variant="secondary">
            <b-navbar-brand class="mx-auto" href="/lance"> Platforme Initiale</b-navbar-brand>
        </b-navbar>
        <br><br>
        <b-row>
            <b-col>
                <b-form-group class="mb-3" label="Les Soutenances commence le :" style="font-weight: bold;">
                    <b-form-datepicker id="datetime-date" v-model="dateValue" class="mr-2"
                        placeholder="Choisir une date"></b-form-datepicker>
                    <b-form-timepicker id="datetime-time" v-model="timeValue"
                        placeholder="Choisir une heure"></b-form-timepicker>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group class="mb-3" label=" jusqu'au " style=" font-weight: bold;">
                    <b-form-datepicker id="datetime-date" v-model="dateValue" class="mr-2"
                        placeholder="Choisir une date"></b-form-datepicker>
                    <b-form-timepicker id="datetime-time" v-model="timeValue"
                        placeholder="Choisir une heure"></b-form-timepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>

        </b-row>
        <b-row>
            <b-col>
                <b-form-group class="mb-3" label="La durée de chaque Soutenance :" style="font-weight: bold;">
                    <b-form-timepicker id="datetime-time" v-model="timeValue"
                        placeholder="Choisir une heure"></b-form-timepicker>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row>
            <b-col><b-form-group class="mb-3" label="Local :" style="font-weight: bold;">
                    <b-form-select v-model="selected" :options="local" :select-size="4"></b-form-select>
                </b-form-group> </b-col>
        </b-row>
        <b-button variant="primary"> Valider</b-button>
        <nav>
      <router-link to="/administrateur" class="custom-link">Retour</router-link>
    </nav>
    <router-view />
    </b-forme>
</template>

<script>
import {BFormDatepicker, BFormTimepicker, } from 'bootstrap-vue'

export default {

    components: {
    BFormDatepicker,BFormTimepicker,
    },

    data() {
        return {
            selected: null,
            local: [
                { value: 's1', text: 'salle 1' },
                { value: 's2', text: 'salle 2' },
                { value: 's3', text: 'salle 3' },
                { value: 's4', text: 'salle 4' },
                { value: 'a14', text: 'Amphi  14' },
                { value: 'a26', text: 'Amphi  26' },
                { value: 'a13', text: 'Amphi  13' },
                { value: 'a16', text: 'Amphi 16' },

            ],

        }
    }
}
</script>

<style>

</style>