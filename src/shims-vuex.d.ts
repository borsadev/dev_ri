import { IRootState } from './store/type';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<IRootState>;
  }
}
