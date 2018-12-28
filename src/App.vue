<template lang="pug">
  #app
    .container
      img.logo(src="./assets/logo-platzi.png")
      h1.titulo Registro estación Platzi
      label.label Nombre
      input(type="text")
      label.label Apellido
      input(type="text")
      label.label Cargo
      input(type="text")
      br
      button(type="submit") ENVIAR
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola mundo'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
