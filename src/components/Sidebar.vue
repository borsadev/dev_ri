<template>
  <div id="sidebar">
    <div class="logo-container">
      <img class="logo" src="@/assets/logo.png" />
      <img class="small-logo" src="@/assets/small-logo.png" />
    </div>
    <div class="title">
      <h6 class="text-regular text-white">RIORS Integrated Systems</h6>
      <h3 class="text-small text-white">RIS</h3>
    </div>
    <ul class="nav-list">
      <li>
        <a href="/" class="active">
          <i class="bx bx-line-chart-down"></i>
          <span class="link-title">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
      <li>
        <a href="/brand-config">
          <i class="bx bxs-wrench"></i>
          <span class="link-title">Config</span>
        </a>
        <span class="tooltip">Config</span>
      </li>
      <li>
        <a href="/brand-master">
          <i class="bx bxs-data"></i>
          <span class="link-title">Master</span>
        </a>
        <span class="tooltip">Master</span>
      </li>
      <li>
        <a href="/brand-product">
          <i class="bx bxs-t-shirt"></i>
          <span class="link-title">Product</span>
        </a>
        <span class="tooltip">Product</span>
      </li>
      <li>
        <a href="/brand-stock">
          <i class="bx bxs-layer"></i>
          <span class="link-title">Stock</span>
        </a>
        <span class="tooltip">Stock</span>
      </li>
      <li>
        <a href="/brand-transaction">
          <i class="bx bx-transfer"></i>
          <span class="link-title">Transaction</span>
        </a>
        <span class="tooltip">Transaction</span>
      </li>
      <li>
        <a href="/brand-purchase">
          <i class="bx bxs-basket"></i>
          <span class="link-title">Purchase</span>
        </a>
        <span class="tooltip">Purchase</span>
      </li>
      <li>
        <a href="/brand-campaign">
          <i class="bx bx-hash"></i>
          <span class="link-title">Campaign</span>
        </a>
        <span class="tooltip">Campaign</span>
      </li>
      <li>
        <a href="/brand-report">
          <i class="bx bx-line-chart-down"></i>
          <span class="link-title">Report</span>
        </a>
        <span class="tooltip">Report</span>
      </li>
      <li>
        <a href="/brand-change-password">
          <i class="bx bxs-key"></i>
          <span class="link-title">Change Password</span>
        </a>
        <span class="tooltip">Change Password</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bxs-grid"></i>
          <span class="link-title">Main Menu</span>
        </a>
        <span class="tooltip">Main Menu</span>
      </li>
      <li>
        <a href="#">
          <i class="bx bx-log-out"></i>
          <span class="link-title">Logout</span>
        </a>
        <span class="tooltip">Logout</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>
<style scoped>
.h6 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}
</style>
