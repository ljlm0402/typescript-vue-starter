<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <button @click="add(1)">ADD</button>
    <button @click="sub(1)">SUB</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters({ count: 'users/getCount' })
  },
  methods: {
    ...mapActions({ add: 'users/addCount', sub: 'users/subCount' })
  }
})
</script>
