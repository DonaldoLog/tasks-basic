<template lang="pug">
  #app
    ap-header

    router-view

    ap-footer
</template>

<script>
import ApFooter from '@/components/layout/Footer.vue'
import ApHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    ApFooter, ApHeader
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
    margin-top: 50px;
  }
  .is-active {
    border: 3px #23d160 solid;
  }
</style>
