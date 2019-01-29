<template lang="pug">
  .container(v-if="track && track.album")
    .columns
      .column.is-3.has-text-centered
        figure.media-left
          p.image
            img(:src="track.album.images[0].url")
          p.button-bar
            a.button.is-primary.is-large
              span.icon(@click="selectTrack") Play
      .column.is-8
        .panel
          .panel-heading
            h1.title {{ trackTitle }}
          .panel-block
            article.media
              .media-content
                .content
                  ul(v-for="(val, index) in track" :key="index")
                    li
                      strong {{ index }}:&nbsp;
                        span {{ val }}
                nav.level
                  .level-left
                    a.level-item
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import trackMixin from '@/mixins/track'

export default {
  mixins: [ trackMixin ],
  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('cargada')
        })
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  }
}
</script>

<style lang="scss" scoped>
 .columns {
   margin: 20px;
 }

 .button-bar {
   margin-top: 20px;
 }
</style>
