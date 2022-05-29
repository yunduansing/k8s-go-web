export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'account',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/sub-page',
        name: 'role',
        icon: 'smile',
        component: './Welcome',
      },
      {
        path: '/admin/sub-page',
        name: 'user-group',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/k8s',
    name: 'Kubernetes',
    icon: 'crown',
    access: 'canAdmin',
    component: './k8s/Index',
    routes: [
      {
        path: '/k8s/index',
        name: '集群',
        icon: 'smile',
        component: './k8s/Index',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
