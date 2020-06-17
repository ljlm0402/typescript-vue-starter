import { AxiosInstance } from 'axios'
import VueRouter, { Route } from 'vue-router'

declare module 'vue/types/vue' {
  interface Vue {
    // prototype
    $http: AxiosInstance;
    $router: VueRouter;
    $route: Route;
    $EventBus: Vue;

    // mixin
    _ROUTER_PUSH(url: string): void;
    _ROUTER_PUSH_PARAMS(name: string, params: any): void;
    _EMIT_EVENT(event: string, arg: any): void;
    _ON_EVENT(event: string, callback: any): void;
    _ONCE_EVENT(event: string, callback: any): void;
    _OFF_EVENT(event: string): void;
  }
}
