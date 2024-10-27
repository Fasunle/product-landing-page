/// <reference types="vite/client" />

// https://blog.q-bit.me/an-introduction-to-vue-3-and-typescript-getting-started/
declare module '*.vue' {
  import {DefineComponent} from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
