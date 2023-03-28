/*
Creiamo una pagina con all’interno un titolo di colore rosso.
Al click di un bottone il titolo diventerà blu.
 */

const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        active: false,
        blue: 'blue',
        medium: '64px',
      }
    },
    methods: {
        changeColor (){
            this.active = !this.active;
        }
    }
  }).mount('#app')