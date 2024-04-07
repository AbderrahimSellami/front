<template>
    <b-form>
        <b-countainer>
            <div>
                <b-form-group label="Liste des Binomes choisi votre Théme :" style="font-weight: bold"
                    label-cols-lg="13" label-size="lg">
                </b-form-group>
            </div> <br><br><br>

            <div>
                <b-table :items="binomes" :fields="fields">
                    <template #cell(actions)>
                        <b-button variant="success" size="sm" class="mr-1" ref="btnShow">
                           Valider
                        </b-button>
                    </template>
                </b-table>
            </div>

        </b-countainer>
    </b-form>
</template>

<script>

import { BTable , BForm} from 'bootstrap-vue';

export default {
    name: 'listeComponent',
    components: {
        BForm , BTable
    },

    data () {
        return {


            binomes: [
                {
                    Binome: " lina zenati melissa tiab ",
                    Thème: "GL",
                },],
            fields: ["Binome", "Thème", "actions"],


        }


    }



}
</script>

<style>

</style>