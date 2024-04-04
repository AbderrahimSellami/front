<template>
    <b-form>
        <b-row>
            <b-col>
                 <b-form-group label="Binome:" style="font-weight: bold">
                        <b-form-input id="Binome" v-model="form.binome"></b-form-input> </b-form-group>

            </b-col>
            <b-col><b-form-group label="Thème:" style="font-weight: bold">
                    <b-form-input id="Thème" v-model="form.thème"></b-form-input> </b-form-group>
            </b-col>
        </b-row>


    </b-form>
</template>

<script>
import {BForm} from 'bootstrap-vue'
export default {
        name: 'InformationsComponent',

    components: {
    BForm
        
    },
    data() {
        return {
            form: {
                binome: '',
                thème: ''

            }

            
 }
    
}
}
</script>

<style>

</style>