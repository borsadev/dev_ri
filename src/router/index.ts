import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../components/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/brand-config',
    name: 'Brand Config',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandConfig.vue'
      )
  },
  {
    path: '/brand-master',
    name: 'Brand Master',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandMaster.vue'
      )
  },
  {
    path: '/brand-product',
    name: 'Brand Product',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandProduct.vue'
      )
  },
  {
    path: '/brand-stock',
    name: 'Brand Stock',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandStock.vue'
      )
  },
  {
    path: '/brand-transaction',
    name: 'Brand Transaction',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandTransaction.vue'
      )
  },
  {
    path: '/brand-purchase',
    name: 'Brand Purchase',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandPurchase.vue'
      )
  },
  {
    path: '/brand-campaign',
    name: 'Brand Campaign',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandCampaign.vue'
      )
  },
  {
    path: '/brand-report',
    name: 'Brand Report',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandReport.vue'
      )
  },
  {
    path: '/brand-change-password',
    name: 'Brand ChangePas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/BrandChangePas.vue'
      )
  },
  {
    path: '/core',
    name: 'Core Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Core/DashboardCore.vue'
      )
  },
  {
    path: '/finance-bank',
    name: 'Bank Account List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Finance/FinanceBankAccList.vue'
      )
  },
  {
    path: '/store',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Store/StoreHome.vue'
      )
  },
  {
    path: '/brand-manage-brand',
    name: 'Manage Brand',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/brandManageBrand.vue'
      )
  },
  {
    path: '/brand-manage-warehouse',
    name: 'Manage Warehouse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageBrandWarehouse.vue'
      )
  },
  {
    path: '/brand-manage-warehouse-edit',
    name: 'Manage Warehouse Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageBrandWarehouseEdit.vue'
      )
  },
  {
    path: '/brand-manage-warehouse-new',
    name: 'Manage Warehouse Data Entry',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageBrandWarehouseNew.vue'
      )
  },
  {
    path: '/brand-warehouse',
    name: 'Brand Warehouse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/brandWarehouse.vue'
      )
  },
  {
    path: '/brand-master-store',
    name: 'Brand Store',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/brandStore.vue'
      )
  },
  {
    path: '/brand-master-store-concept',
    name: 'Brand Store Concept',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/brandStoreConcept.vue'
      )
  },
  {
    path: '/brand-master-store-concept-edit',
    name: 'Brand Store Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/brandStoreedit.vue'
      )
  },
  {
    path: '/brand-master-store-concept-view',
    name: 'Brand Store Data Details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/brandStoreview.vue'
      )
  },
  {
    path: '/brand-master-store-wholesale',
    name: 'Brand Store Wholesale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/brandStoreWhole.vue'
      )
  },
  {
    path: '/brand-master-customer-class',
    name: 'Customer Classification',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCustomerClass.vue'
      )
  },
  {
    path: '/brand-master-customer-class-edit',
    name: 'Customer Classification Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCustomerClasssEdit.vue'
      )
  },
  {
    path: '/brand-master-customer-membership',
    name: 'Customer Membership',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCustomerMembership.vue'
      )
  },
  {
    path: '/brand-master-customer-membership-edit',
    name: 'Customer Membership Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCustomerMembershipEdit.vue'
      )
  },
  {
    path: '/brand-master-customer-list',
    name: 'Customer List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCostumerList.vue'
      )
  },
  {
    path: '/brand-master-customer-list-edit',
    name: 'Customer List Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCustomerListEdit.vue'
      )
  },
  {
    path: '/brand-master-collection',
    name: 'Collection List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCollectionList.vue'
      )
  },
  {
    path: '/brand-master-collection-edit',
    name: 'Collection List Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageCollectionListEdit.vue'
      )
  },
  {
    path: '/brand-master-delivery',
    name: 'Manage Delivery Courier',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageDelivery.vue'
      )
  },
  {
    path: '/brand-master-delivery-edit',
    name: 'Manage Delivery Courier Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-master/manageDeliveryEdit.vue'
      )
  },
  {
    path: '/brand-product-add',
    name: 'Product Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productAdd.vue'
      )
  },
  {
    path: '/brand-product-season',
    name: 'Product Season',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productSeason.vue'
      )
  },
  {
    path: '/brand-product-season-edit',
    name: 'Product Season Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productSeasonEdit.vue'
      )
  },
  {
    path: '/brand-product-gender',
    name: 'Product Gender',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productGender.vue'
      )
  },
  {
    path: '/brand-product-gender-edit',
    name: 'Product Gender Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productGenderEdit.vue'
      )
  },
  {
    path: '/brand-product-style',
    name: 'Product Style',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productStyle.vue'
      )
  },
  {
    path: '/brand-product-style-edit',
    name: 'Product Style Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productStyleEdit.vue'
      )
  },
  {
    path: '/brand-product-classification',
    name: 'Product Classification',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productClas.vue'
      )
  },
  {
    path: '/brand-product-classification-edit',
    name: 'Product Classification Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productClasEdit.vue'
      )
  },
  {
    path: '/brand-product-category',
    name: 'Product Category',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productCategory.vue'
      )
  },
  {
    path: '/brand-product-category-edit',
    name: 'Product Category Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productCategoryEdit.vue'
      )
  },
  {
    path: '/brand-product-type',
    name: 'Product Type',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productType.vue'
      )
  },
  {
    path: '/brand-product-type-edit',
    name: 'Product Type Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productTypeEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-size',
    name: 'Product Filter Size',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSize.vue'
      )
  },
  {
    path: '/brand-product-filter-size-edit',
    name: 'Product Filter Size Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSizeEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-color',
    name: 'Product Filter Color',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterColor.vue'
      )
  },
  {
    path: '/brand-product-filter-color-edit',
    name: 'Product Filter Color Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterColorEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-fitting',
    name: 'Product Filter Fitting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterFitting.vue'
      )
  },
  {
    path: '/brand-product-filter-fitting-edit',
    name: 'Product Filter Fitting Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterFittingEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-sports',
    name: 'Product Filter Sports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSports.vue'
      )
  },
  {
    path: '/brand-product-filter-sports-edit',
    name: 'Product Filter Sports Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSportsEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-tech',
    name: 'Product Filter Technology',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterTechnology.vue'
      )
  },
  {
    path: '/brand-product-filter-tech-edit',
    name: 'Product Filter Technology Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterTechnologyEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-neck',
    name: 'Product Filter Necklines',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterNecklines.vue'
      )
  },
  {
    path: '/brand-product-filter-neck-edit',
    name: 'Product Filter Necklines Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterNecklinesEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-sleeves',
    name: 'Product Filter Sleeves',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSleeves.vue'
      )
  },
  {
    path: '/brand-product-filter-sleeves-edit',
    name: 'Product Filter Sleeves Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSleevesEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-sl',
    name: 'Product Filter Sleeve Length',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSL.vue'
      )
  },
  {
    path: '/brand-product-filter-sl-edit',
    name: 'Product Filter Sleeves Length Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterSLEdit.vue'
      )
  },
  {
    path: '/brand-product-filter-pl',
    name: 'Product Filter Pant Length',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterPL.vue'
      )
  },
  {
    path: '/brand-product-filter-pl-edit',
    name: 'Product Filter Pants Length Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productFilterPLEdit.vue'
      )
  },
  {
    path: '/brand-product-view-all',
    name: 'Product Data All',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/producViewAll.vue'
      )
  },
  {
    path: '/brand-product-relat',
    name: 'Product Service',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productRelate.vue'
      )
  },
  {
    path: '/brand-product-relat-edit',
    name: 'Product Relatable Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productRelateEdit.vue'
      )
  },
  {
    path: '/brand-product-service',
    name: 'Product Service',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productService.vue'
      )
  },
  {
    path: '/brand-product-service-edit',
    name: 'Product Service Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productServiceEdit.vue'
      )
  },
  {
    path: '/brand-product-consumer',
    name: 'Consumer Goods Product List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productConsumer.vue'
      )
  },
  {
    path: '/brand-product-consumer-edit',
    name: 'Consumer Goods Product Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-product/productConsumerEdit.vue'
      )
  },
  {
    path: '/brand-stock-data',
    name: 'Stock Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-stock/stockData.vue'
      )
  },
  {
    path: '/brand-stock-in',
    name: 'Stock In List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-stock/stockIn.vue'
      )
  },
  {
    path: '/brand-stock-out',
    name: 'Stock Out List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-stock/stockOut.vue'
      )
  },
  {
    path: '/brand-stock-out-edit',
    name: 'Stock Out Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-stock/stockOutEdit.vue'
      )
  },
  {
    path: '/brand-stock-transfer',
    name: 'Stock Transfer List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-stock/stockTransfer.vue'
      )
  },
  {
    path: '/brand-stock-transfer-edit',
    name: 'Stock Transfer Data',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-stock/stockTransferEdit.vue'
      )
  },
  {
    path: '/brand-stock-return',
    name: 'Stock Return List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ '../components/Brand/brand-stock/stockRetrurn.vue'
      )
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
