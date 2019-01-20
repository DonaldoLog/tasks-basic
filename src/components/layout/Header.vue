<template lang="pug">
  section.hero.is-success
    .hero-head
      header.navbar
        .container
          .nav-left
            .nav-item
              strong App music
          .nav-rigth.nav-menu
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
