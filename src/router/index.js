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
    path: '/VCascader',
    name: 'VCascader',
    component: () =>
      import(
        /* webpackChunkName: "VCascaderDemo" */ '../views/VCascaderDemo.vue'
      ),
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
