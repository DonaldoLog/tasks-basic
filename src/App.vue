<template lang="pug">
  #app
    input(v-model="name")
    p {{ name }}

    a(:href="url") link
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      url: 'https://donaldolog.xyz'
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
