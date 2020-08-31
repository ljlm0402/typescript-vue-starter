<template>
  <div class="hello">
    <ul>
      <li><button @click="login">Login</button></li>
      <li><button @click="logout">Logout</button></li>
      <li><button @click="route">Router</button></li>
      <li><button @click="event">EventBus</button></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({

  }),
  methods: {
    login (): void {
      const loginForm = {
        id: 'example@github.io',
        password: 'qwer1234'
      }

      this.$store.dispatch('login', loginForm)
    },
    logout (): void {
      this.$store.dispatch('logout')
    },
    route (): void {
      this._ROUTER_PUSH('about')
    },
    event (): void {
      this._EMIT_EVENT('on', 'event')
    },
    console (str: string): void {
      alert('console : ' + str)
    }
  },
  mounted () {
    this._ON_EVENT('on', this.console)
  },
  beforeDestroy () {
    this._OFF_EVENT('on')
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
