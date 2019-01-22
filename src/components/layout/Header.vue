<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .navbar-left
            .navbar-item
              strong App music
          .navbar-end.navbar-menu
            router-link.navbar-item(:to="{ name: 'search' }") Buscar
            router-link.navbar-item(to="about") Nosotros
    .hero-body
      .container.has-text-centered
        h1.title App Music
        h2.subtitle Music vuenisima
        ap-player
</template>

<script>
import ApPlayer from '@/components/Player.vue'
export default {
  components: {
    ApPlayer
  }
}
</script>
