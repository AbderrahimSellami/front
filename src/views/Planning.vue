<template>
<b-form>
  <b-countainer>
  <div>
                <b-form-group label="Planning:" style="font-weight: bold" label-cols-lg="13"
                    label-size="lg">
                </b-form-group>
            </div> <br><br><br>

            <div>
                <b-table :items="colonnes" :fields="fields">  </b-table>
                 </div>

  </b-countainer>
</b-form>  
</template>

<script>
import { BForm, BTable } from 'bootstrap-vue';

export default {
  name: 'planningComponent',
  components: {
    BForm,BTable
  },

  data() {
    return {

      colonnes: [
        { Théme_de_soutenance:"Gestion de soutenance",Date:"22/10/2024",Local:"Salle 4",Binome:" lina zenati , melissa ",Encadreur:" farah " , jury:"hhtt"},
        {},
      ]
    }
  }

}
</script>

<style>

</style>