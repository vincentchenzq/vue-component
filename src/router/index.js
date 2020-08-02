import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/CollapseTable',
    name: 'CollapseTable',
    component: () =>
      import(
        /* webpackChunkName: "CollapseTable" */ '../views/CollapseTable.vue'
      ),
  },
  {
    path: '/VTableTree',
    name: 'VTableTree',
    component: () =>
      import(/* webpackChunkName: "VTableTree" */ '../views/VTableTree.vue'),
  },
  {
    path: '/VTree',
    name: 'VTree',
    component: () =>
      import(/* webpackChunkName: "VTree" */ '../views/VTree.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
