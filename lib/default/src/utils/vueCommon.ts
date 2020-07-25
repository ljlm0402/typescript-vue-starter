import Vue from 'vue'

/* eslint-disable */
export default Vue.extend({
  methods: {
    _ROUTER_PUSH (path: string): void {
      this.$router.push({ path: path })
    },
    _ROUTER_PUSH_QUERY(path: string, query?: any): void {
      this.$router.push({ path: path, query: query })
    },
    _ROUTER_PUSH_PARAMS (name: string, params?: any): void {
      this.$router.push({ name: name, params: params })
    },
    _EMIT_EVENT (event: string, arg: any): void {
      this.$EventBus.$emit(event, arg)
    },
    _ON_EVENT (event: string, callback: (arg0: any) => void): void {
      if (!this.$EventBus['_events'][event]) {
        this.$EventBus.$on(event, (arg: any) => {
          if (typeof callback === 'function') {
            callback(arg)
          }
        })
      }
    },
    _ONCE_EVENT (event: string, callback: (arg0: any) => void): void {
      if (!this.$EventBus['_events'][event]) {
        this.$EventBus.$once(event, (arg: any) => {
          if (typeof callback === 'function') {
            callback(arg)
          }
        })
      }
    },
    _OFF_EVENT (event: string): void {
      if (!this.$EventBus['_events'][event]) {
        this.$EventBus.$off(event)
      }
    }
  }
})
