<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        ap-track(:track="track")
</template>
<script>
import trackService from '@/services/track'
import ApTrack from '@/components/Track.vue'

export default {
  components: {
    ApTrack
  },
  data () {
    return {
      track: {}
    }
  },
  created () {
    const id = this.$route.params.id

    trackService.getById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
 .columns {
   margin: 20px;
 }
</style>
