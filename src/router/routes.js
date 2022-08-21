
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      // { path: '', component: () => import('pages/IndexPage.vue') },
      // { path: 'node', component: () => import('pages/Node.vue') },
      // { path: 'tokens', component: () => import('pages/Tokens.vue') },
      { path: 'apps', component: () => import('pages/Apps.vue') },
      { path: 'ido', component: () => import('pages/Ido.vue') },
      { path: 'wallet', component: () => import('pages/wallet/Auth.vue') },
    ]
  },
  {
    path: '/marketplace',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/marketplace/Index.vue') },
      { path: 'chikenbro', component: () => import('pages/marketplace/Chikenbro.vue') },
      { path: 'a700', component: () => import('pages/marketplace/A700.vue') },
      { path: 'olf', component: () => import('pages/marketplace/Olf.vue') },
      { path: 'rupay', component: () => import('pages/marketplace/Rupay.vue') },

    ]
  },
  {
    path: '/games',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/games/Index.vue') },


    ]
  },
  {
    path: '/wallet',
    component: () => import('layouts/WalletLayout.vue'),
    children: [
      {
        path: 'index',
        name: 'wallet_index',
        component: () => import('pages/wallet/Index.vue'),
      },
      {
        path: '/wallet/asset/:asset_key',
        name: 'wallet_asset',
        component: () => import('pages/wallet/Asset.vue'),
      },
      {
        path: '/wallet/receive',
        name: 'wallet_receive',
        component: () => import('pages/wallet/Receive.vue'),
      },
      {
        path: '/wallet/select',
        name: 'wallet_select',
        component: () => import('pages/wallet/SelectAsset.vue'),
      },
      {
        path: '/wallet/unconfirmed',
        name: 'wallet_unconfirmed',
        component: () => import('pages/wallet/UnconfirmedTx.vue'),
      },
      {
        path: '/wallet/assets_for_buy',
        name: 'wallet_assets_for_buy',
        component: () => import('pages/wallet/SelectAssetsForBuy.vue'),
      },
      {
        path: '/wallet/buy',
        name: 'wallet_buy',
        component: () => import('pages/wallet/Buy.vue'),
      },
      {
        path: 'own_assets',
        name: 'wallet_own_assets',
        component: () => import('pages/wallet/SelectOwnAssets.vue'),
      },
      {
        path: '/wallet/exchange',
        name: 'wallet_exchange',
        component: () => import('pages/wallet/Exchange.vue'),
      },
      {
        path: '/wallet/create_person',
        name: 'create_person',
        component: () => import('pages/wallet/CreatePerson.vue'),
      },
      {
        path: '/wallet/verify_person',
        name: 'verify_person',
        component: () => import('pages/wallet/VerifyPerson.vue'),
      },
      {
        path: '/wallet/withdraw',
        name: 'withdraw',
        component: () => import('pages/wallet/Withdraw.vue'),
      },


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
