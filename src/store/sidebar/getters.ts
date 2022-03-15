import { GetterTree } from 'vuex';
import { IRootState } from '../type';
import { ISidebarState } from './interface';

export const getters: GetterTree<ISidebarState, IRootState> = {
  getSidebarDisplay(state): string {
    return state.display;
  }
};
