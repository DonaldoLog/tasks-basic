<template lang="pug">
  #app
    container.has-tex-centered
        .column.is-8.is-offset-2
          .box
            h1.title Admin tasks
            img.logo(src="./assets/tasks.png" height="200" width="200")
            .columns
              .column.is-full.is-three-fifths.is-offset-one-fifth
                .columns.is-gapless
                  .column.is-one-third
                    input.input.is-large(v-model="newTask.title", placeholder="Task name")
                  .column
                    input.input.is-large(v-model="newTask.hours", type="number", placeholder="Hours")
                  .column
                    input.input.is-large(v-model="newTask.mins", type="number", placeholder="Mins")
                  .buttons.has-addons.is-centered
                      button.button.is-info.is-large(@click="addTask") Add
                      button.button.is-danger.is-large(@click="cancel") &times;
            .columns
              .column.is-full.is-three-fifths.is-offset-one-fifth
                template(v-if="tasks.length > 0")
                  nav.panel
                    p.panel-heading Your tasks:
                    li.panel-block(v-for="(task, index) in tasks" :key="index")
                      spam.panel-icon
                        font-awesome-icon(icon="book")
                      label {{ task.title }} {{ task.hours}}:{{ task.mins}}
                      a.is-danger(@click="removeTask(index)")
                        font-awesome-icon(icon="times")
                    .panel-block
                      div Total: {{ totalTime }}
                template(v-else)
                    nav.panel
                        p.panel-heading Your tasks:
                        li.panel-block
                          label No tasks
            br
            br
            br
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      tasks: [],
      newTask: {
        title: '',
        hours: '',
        mins: ''
      }
    }
  },
  created: function () {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
  },
  computed: {
    totalTime () {
      const self = this
      let totalTime = ''
      let m = 0
      let m2 = 0
      let h = 0
      for (let i = 0; i < self.tasks.length; i++) {
        m = parseInt(m) + parseInt(self.tasks[i].mins) + (60 * self.tasks[i].hours)
      }
      h = parseInt(m / 60)
      m2 = m % 60
      // console.log(m2.length, 'leng')
      if (m2 < 10) {
        m2 = '0' + m2
        // console.log(1)
      }
      if (h < 10) {
        h = '0' + h
      }
      totalTime = `${h}:${m2}`
      return totalTime
    }
  },
  methods: {
    addTask () {
      const self = this
      if (self.newTask.title && self.newTask.hours && self.newTask.mins) {
        if (self.newTask.hours.length < 2) {
          self.newTask.hours = '0' + self.newTask.hours
        }
        if (self.newTask.mins.length < 2) {
          self.newTask.mins = '0' + self.newTask.mins
        }
        self.tasks.push(this.newTask)
        localStorage.setItem('tasks', JSON.stringify(self.tasks))
        self.newTask = { title: '', hours: '', mins: '' }
      } else {
        alert('Please fill out all fields.')
        self.newTask = { title: '', hours: '', mins: '' }
      }
    },
    cancel () {
      const self = this
      self.newTask = { title: '', hours: '', mins: '' }
    },
    removeTask (index) {
      const self = this
      self.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(self.tasks))
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
