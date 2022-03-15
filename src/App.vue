<template>
  <div :class="{ 'sidebar-expanded': sidebarExpanded }">
    <Header v-if="!['Login'].includes($route.name)" />
    <Sidebar v-if="!['Login'].includes($route.name)" />
    <router-view></router-view>
    <Footer v-if="!['Login'].includes($route.name)" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
import Footer from '@/components/Footer.vue';
import { SidebarDisplay } from './store/sidebar/enum';

export default defineComponent({
  name: 'App',

  components: {
    Header,
    Sidebar,
    Footer
  },
  data() {
    const display = this.$store.getters.getSidebarDisplay;

    return {
      activePage: 'Dashboard v.1',
      sidebarExpanded: display === SidebarDisplay.EXPAND
    };
  },
  computed: {
    getSidebarDisplay() {
      return this.$store.getters.getSidebarDisplay;
    }
  },
  watch: {
    getSidebarDisplay(display) {
      this.updateSidebarDisplay(display);
    }
  },
  methods: {
    updateSidebarDisplay(display: string) {
      this.sidebarExpanded = display === SidebarDisplay.EXPAND;
    }
  }
});
</script>
