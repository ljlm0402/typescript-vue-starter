<template>
  <div class="hello">
    <h3>{{ getUser ? $t('WELCOME', { 0: getUser.id }) : $t('NOUSER') }}</h3>
    <ul>
      <li><button @click="login">{{ $t('LOGIN') }}</button></li>
      <li><button @click="logout">{{ $t('LOGOUT') }}</button></li>
      <li><button @click="route">{{ $t('ROUTE') }}</button></li>
      <li><button @click="event">{{ $t('EVENT_BUS') }}</button></li>
    </ul>

    <select v-model="selected">
      <option disabled value="">{{ $t('SELECT') }}</option>
      <option value="KOR">{{ $t('KOREAN') }}</option>
      <option value="ENG">{{ $t('ENGLISH') }}</option>
    </select><br />

    <button @click="reload()">{{ $t('RELOAD') }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  data: () => ({
    selected: window.sessionStorage.locale
  }),
  computed: {
    ...mapGetters({ getUser: 'users/getUser' })
  },
  watch: {
    selected (value: string): void {
      window.sessionStorage.locale = value
    }
  },
  methods: {
    ...mapActions({ userLogin: 'users/login', userLogout: 'users/logout' }),
    login (): void {
      const loginForm = {
        id: 'example@github.io',
        password: 'qwer1234'
      }

      this.userLogin(loginForm)
    },
    logout (): void {
      this.userLogout()
    },
    route (): void {
      this._ROUTER_PUSH('about')
    },
    event (): void {
      this._EMIT_EVENT('on', 'event')
    },
    console (str: string): void {
      alert('console : ' + str)
    },
    reload (): void {
      location.reload()
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
