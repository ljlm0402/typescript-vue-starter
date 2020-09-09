<template>
  <div class="about">
    <h1>{{ count }}</h1>
    <button @click="add(1)">{{ $t('ADD') }}</button>
    <button @click="sub(1)">{{ $t('SUB') }}</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters({ count: 'getCount' })
  },
  methods: {
    ...mapActions({ add: 'addCount', sub: 'subCount' })
  }
})
</script>
