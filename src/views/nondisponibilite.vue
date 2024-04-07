<template>
    <div>
        <b-row>
            <b-col>
                <b-form-group label="Ajouter la Non Disponibilité"> <br><br><br>
                    <b-row>
                        <b-col>
                            <b-form-datepicker v-model="nondispo.date" required></b-form-datepicker>
                        </b-col>
                        <b-col>
                            <b-form-timepicker v-model="nondispo.time" required></b-form-timepicker>
                        </b-col>
                        <b-col>
                            <b-button variant="primary" @click="adddispo">Ajouter</b-button>
                        </b-col>
                    </b-row>
                </b-form-group>
            </b-col>
        </b-row>
        <br><br><br>
        <b-table :items="events" :fields="fields">
        
            <template #cell(actions)="row">
                <b-button size="sm" variant="danger" @click="removeEvent(row.index)">
                    Supprimer
                </b-button>
            </template>
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'nondispoComponent',

    data() {
        return {
            nondispo: {
                date: null,
                time: null
            },
            events: [
                {  date :('2024-01-22'), time: "14:00:00" },
                { date: ('2024-01-03'), time: "13:00:00" },
            ],
            fields: [ "date", "time", "actions"],
                
            
        };
    },
    methods: {
        adddispo() {
            if (this.nondispo.date !== null && this.nondispo.time !== null) {
                this.events.push({
                    date: this.nondispo.date,
                    time: this.nondispo.time
                });
                this.nondispo.date = null;
                this.nondispo.time = null;
            }
        },
        removeEvent(index) {
            this.events.splice(index, 1);
        },
       
       


        
    }
};
</script>


<style>

</style>