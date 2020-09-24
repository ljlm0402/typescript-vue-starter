<template>
  <div class="hello">
    <h3>
      {{
        computed.getUser
          ? $t("WELCOME", { 0: computed.getUser.id })
          : $t("NOUSER")
      }}
    </h3>
    <ul>
      <li>
        <button @click="login">{{ $t("LOGIN") }}</button>
      </li>
      <li>
        <button @click="logout">{{ $t("LOGOUT") }}</button>
      </li>
      <li>
        <button @click="route">{{ $t("ROUTE") }}</button>
      </li>
      <li>
        <button @click="event">{{ $t("EVENT_BUS") }}</button>
      </li>
    </ul>

    <select v-model="state.selected">
      <option disabled value="">{{ $t("SELECT") }}</option>
      <option value="KOR">{{ $t("KOREAN") }}</option>
      <option value="ENG">{{ $t("ENGLISH") }}</option>
    </select>
    <br />

    <button @click="reload()">{{ $t("RELOAD") }}</button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  watch,
  computed,
  onMounted,
  onUnmounted
} from '@vue/composition-api'

export default defineComponent({
  setup (_, context) {
    const useState = reactive({
      selected: window.sessionStorage.locale
    })
    const useComputed = reactive({
      getUser: computed(() => {
        return context.root.$store.getters['users/getUser']
      })
    })
    const useUserLogin = (loginForm) => {
      context.root.$store.dispatch('users/login', loginForm)
    }
    const useUserLogout = () => {
      context.root.$store.dispatch('users/logout')
    }
    const console = (str: string) => {
      alert('console : ' + str)
    }

    watch(
      () => useState.selected,
      (value: string) => {
        window.sessionStorage.locale = value
      }
    )

    onMounted(() => {
      context.root._ON_EVENT('on', console)
    })

    onUnmounted(() => {
      context.root._ON_EVENT('on', console)
    })

    return {
      state: useState,
      computed: useComputed,
      login: () => {
        const loginForm = {
          id: 'example@github.io',
          password: 'qwer1234'
        }

        useUserLogin(loginForm)
      },
      logout: () => {
        useUserLogout()
      },
      route: () => {
        context.root._ROUTER_PUSH('about')
      },
      event: () => {
        context.root._EMIT_EVENT('on', 'event')
      },
      reload: () => {
        location.reload()
      }
    }
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
