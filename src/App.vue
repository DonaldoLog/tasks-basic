<template lang="pug">
  #app
    nav.navbar.is-fixed-top(role="navigation" arial-label="main navigation")
      .navbar-brand
        a.navbar-item
          img.logo(src="./assets/logo-movie.png")
      .navbar-start
        .navbar-item
          input.mainsearch.input(type="text" placeholder="Buscar tu peli, actor, actriz o director favorito")
      .navbar-end
        a.navbar-item
          .field.is-grouped
            p.control
              a.bd-tw-button
                img.user-info(src="./assets/logo-user.png")
    .level
      aside.menu
        ul.menu-list
          li
            i.icon(aria-hidden='true')
              font-awesome-icon(icon="home" size="3x")
            p.menu-text Home
          li
            i.icon
              font-awesome-icon(icon="fire" size="3x")
            p.menu-text Trending
          li
            i.icon
              font-awesome-icon(icon="heart" size="3x")
            p.menu-text More likes
          li.last-aside
            i.icon
              font-awesome-icon(icon="cog" size="3x")
            p.menu-text Settings
      .container
        .level.is-mobile
          .level-left
            .level-item
              h2.texto Ahora en el cine
        .level.is-mobile
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
        .level.is-mobile
           .level-left
            .level-item
              h2.texto Aclamdas por la critica
        .level.is-mobile
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
        .level.is-mobile
           .level-left
            .level-item
              h2.texto No te debes perder
        .level.is-mobile
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.
          .level-item
            div.caja
              img(src="./assets/fondo-cuadro.jpg")
              div.sombra
                h1 The secret life of pets
                p.texto-dentro The quite life of a terrier named Max i sunpended when his owner takes in Duke, a stray whom Max instantly dislikes.

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
