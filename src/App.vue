<template>
  <div id="app">
    <nav>
      <router-link to="/home"  class="custom-link">Page principale</router-link> 
     </nav>
    <router-view/>
  </div>
</template>

<style>
.custom-link {
  color: #0b55a5; /* Couleur de texte */
  text-decoration: none; /* Supprimer le soulignement */
  padding: 0.5rem 1rem; /* Ajouter un espacement interne */
  border-radius: 0.25rem; /* Arrondir les coins */
  transition: background-color 0.3s ease; /* Transition pour l'effet de survol */
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #0d26b8;
}
</style>
