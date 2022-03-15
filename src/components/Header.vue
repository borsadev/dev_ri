<template>
  <div id="header">
    <div class="main">
      <div class="toggle-container">
        <a href="javascript:void(0);" @click="toggleSidebar()"
          ><i class="bx bx-menu-alt-right"></i
        ></a>
      </div>
      <div class="module-name-container">
        <h5>Brand Management System</h5>
      </div>
      <div class="avatar-container">
        <img
          src="https://avatar.oxro.io/avatar.svg?name=Tommy+Khumarga&background=11101d&caps=3&bold=true&isRounded=true"
          alt=""
        />
      </div>
    </div>
    <div class="page-title-container">
      <h5>{{ $route.name }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { SidebarActionTypes, SidebarDisplay } from '@/store/sidebar/enum';
import { defineComponent } from 'vue';

export default defineComponent({
  methods: {
    toggleSidebar() {
      const currentSidebarDisplay = this.$store.getters.getSidebarDisplay;
      this.$store.dispatch(
        SidebarActionTypes.UDPATE_DISPLAY,
        currentSidebarDisplay === SidebarDisplay.EXPAND
          ? SidebarDisplay.COLLAPSE
          : SidebarDisplay.EXPAND
      );
    }
  }
});
</script>
