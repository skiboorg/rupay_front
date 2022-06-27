
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'node', component: () => import('pages/Node.vue') },
      { path: 'tokens', component: () => import('pages/Tokens.vue') },
    ]
  },
  {
    path: '/marketplace',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/marketplace/Index.vue') },
      { path: 'chikenbro', component: () => import('pages/marketplace/Chikenbro.vue') },

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
