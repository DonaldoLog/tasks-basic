<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastName")
    input(v-model="birthday" type="date")
    P {{fullName}}
    p {{edad}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      birthday: ''
    }
  },
  computed: {
    edad () {
      let birthday = new Date(this.birthday)
      let now = new Date()
      return new Date(now - birthday).getFullYear() - 1970
    },
    fullName () {
      return `${this.name}  ${this.lastName}`
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
