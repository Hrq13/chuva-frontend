
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'apresentacao', component: () => import('pages/Index.vue') },
      { path: 'comites', component: () => import('pages/Index.vue') },
      { path: 'autores', component: () => import('pages/Index.vue') },
      { path: 'eixos', component: () => import('pages/Index.vue') },
      { path: 'trabalhos', component: () => import('pages/Index.vue') },
      { path: 'contato', component: () => import('pages/Index.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
