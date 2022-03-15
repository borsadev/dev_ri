import { MutationTree } from 'vuex';
import { SidebarMutationTypes } from './enum';
import { ISidebarState } from './interface';

export const mutations: MutationTree<ISidebarState> = {
  [SidebarMutationTypes.UDPATE_DISPLAY](state: ISidebarState, payload: string) {
    state.display = payload;
  }
};
