import { Module } from 'vuex';
import { IRootState } from '../type';
import { ISidebarState } from './interface';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { SidebarDisplay } from './enum';

const state: ISidebarState = {
  display: SidebarDisplay.EXPAND
};

export const sidebar: Module<ISidebarState, IRootState> = {
  state,
  getters,
  mutations,
  actions
};
