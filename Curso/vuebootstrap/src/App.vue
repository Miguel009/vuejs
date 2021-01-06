<template>
  <div id="app">
    <!--Estas etiquetas son las que se utilizan o las que trae por defecto bootstrap vue para
    hacer el trabajo mas facil-->
     <b-navbar toggleable="md" type="dark" variant="success">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!--Aqui no es necesario colocar el router link porque el b nav ya lo trae dentro-->
            <b-nav-item :to="{name: 'Home'}">Home</b-nav-item>
            <b-nav-item :to="{name: 'About'}">About</b-nav-item>
            <b-nav-item :to="{name: 'Grid'}">Grid</b-nav-item>
            <b-nav-item :to="{name: 'Cards'}">Cards</b-nav-item>
            <b-nav-item :to="{name: 'Forms'}">Forms</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
     </b-navbar>
     <b-container>
           <router-view/>
     </b-container>
  </div>
</template>

