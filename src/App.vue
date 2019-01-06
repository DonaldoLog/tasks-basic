<template lang="pug">
  #app
    section.section
      nav.navbar.has-shadow
        .container
          input.input.is-large(type="text",
            placeholder="Buscar canciones...",
            v-model="searchQuery"
          )
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;
          p
            small {{ searchMessage }}
      .container
        .columns
          .column(v-for="(track, index) in tracks" :key="index") {{ track.name }} {{ track.artist}}
</template>

<script>
const tracks = [
  { name: 'Master of puppets', artist: 'Metallica' },
  { name: 'Afterlife', artist: 'Avenged Sevenfold' },
  { name: 'Starway To Heaven', artist: 'Led Zeppelin' }
]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  methods: {
    search () {
      this.tracks = tracks
      console.log(this.searchQuery)
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
