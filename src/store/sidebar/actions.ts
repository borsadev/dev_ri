import { ActionTree } from 'vuex';
import { IRootState } from '../type';
import { SidebarActionTypes, SidebarMutationTypes } from './enum';
import { ISidebarState } from './interface';

export const actions: ActionTree<ISidebarState, IRootState> = {
  [SidebarActionTypes.UDPATE_DISPLAY]({ commit }, payload) {
    commit(SidebarMutationTypes.UDPATE_DISPLAY, payload);
  }
};
