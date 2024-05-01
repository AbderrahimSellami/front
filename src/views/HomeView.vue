<template>
  <b-form @submit.prevent="submitForm">
    <b-container>
      <b-row class="pb-2">
        <b-col cols="4" lg="4">
          <label for="email" class="font-weight-bold">Email :</label>
        </b-col>
        <b-col cols="7" lg="4">
          <b-form-input id="email" v-model="email" type="email" style="border-color: black;"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="pb-2">
        <b-col cols="4" lg="4">
          <label for="password" class="font-weight-bold">Mot de passe :</label>
        </b-col>
        <b-col cols="7" lg="4">
          <b-form-input id="password" v-model="password" type="password" style="border-color: black;"></b-form-input>
        </b-col>
      </b-row>

      <b-row class="pb-2">
        <b-col cols="4" lg="4">
          <label for="userType" class="font-weight-bold">Type Utilisateur :</label>
        </b-col>
        <b-col cols="7" lg="4">
          <b-form-select id="userType" v-model="userType" :options="userTypeOptions" value-field="value" text-field="text" class="form-select" style="border-color: black;"></b-form-select>
        </b-col>
      </b-row>

      <b-row class="pb-2">
        <b-col cols="11">
          <b-button type="submit" variant="success" class="pb-2">Se Connecter</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      userType: 'admin',
      userTypeOptions: [
        { value: 'admin', text: 'Administrateur' },
        { value: 'teacher', text: 'Enseignant' },
        { value: 'student', text: 'Etudiant' },
      ]
    };
  },
  methods: {
    async submitForm() {
      const formData = {
        email: this.email,
        password: this.password,
        userType: this.userType
      };

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      };

      const serverUrl = 'http://127.0.0.1:8000/authentification/form_submission/';

      try {
        const response = await fetch(serverUrl, requestOptions);
        if (!response.ok) {
          throw new Error('Erreur lors de la requête.');
        }
        const data = await response.json();

        switch (formData.userType) {
          case 'admin':
            if (data.AuthAdmin === "OK") {
              this.$router.push('/admin');
            } else {
              alert('Authentification administrateur échouée');
            }
            break;
          case 'teacher':
            if (data.AuthTeacher === "OK") {
              this.$router.push('/teacher');
            } else {
              alert('Authentification enseignant échouée');
            }
            break;
          case 'student':
            if (data.AuthStudent === "OK") {
              this.$router.push('/student');
            } else {
              alert('Authentification étudiant échouée');
            }
            break;
        }
      } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue lors de la connexion.');
      }
    }
  }
};
</script>

<style scoped>
  /* Ajoutez vos styles CSS ici */
  .form-select {
    border-color: black;
  }
</style>
