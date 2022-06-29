
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'node', component: () => import('pages/Node.vue') },
      { path: 'tokens', component: () => import('pages/Tokens.vue') },
      { path: 'apps', component: () => import('pages/Apps.vue') },
    ]
  },
  {
    path: '/marketplace',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/marketplace/Index.vue') },
      { path: 'chikenbro', component: () => import('pages/marketplace/Chikenbro.vue') },
      { path: 'a700', component: () => import('pages/marketplace/A700.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
