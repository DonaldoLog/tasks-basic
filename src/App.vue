<template lang="pug">
  #app
    p(v-if="showValue") {{ value }}
    p(v-else-if="showValue") {{ value + ' algo'}}
    p(v-else) {{ value + 'otro mas'}}

    ul
      li(v-for="(item, index) in items" :key="index") {{index}}{{ item }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola mundo',
      showValue: false,
      value: 'hola',
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
