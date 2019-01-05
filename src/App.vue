<template lang="pug">
  #app
    h1 {{ msg}}
    p {{ 1 + 1}}
    p {{ 'Hola' + ' mundo'}}
    p {{ persona.name }}
    p {{ persona.name.toUpperCase() }}
    p {{ JSON.stringify(persona) }}
    p {{ true? 'true' : 'false'}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola mundo',
      persona: {
        name: 'Donald'
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
