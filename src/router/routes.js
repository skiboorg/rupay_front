
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
      { path: 'avr', component: () => import('pages/ArvAdmin.vue') },
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
      { path: 'sky', component: () => import('pages/marketplace/Sky.vue') },
      { path: 'blago', component: () => import('pages/marketplace/Blago.vue') },
      { path: 'broker', component: () => import('pages/marketplace/Broker.vue') },
      { path: 'vip', component: () => import('pages/marketplace/Vip.vue') },

    ]
  },
  {
    path: '/games',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/games/Index.vue') },
      { path: 'chiken_bro', component: () => import('pages/games/ChikenBro.vue') },
      { path: 'mine', component: () => import('pages/games/mine.vue') },
      { path: 'coop', component: () => import('pages/games/coop.vue') },


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
        path: '/wallet/buy_part',
        name: 'buy_part',
        component: () => import('pages/wallet/Buy_part.vue'),
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
        path: '/wallet/create_person_alt',
        name: 'create_person_alt',
        component: () => import('pages/wallet/CreatePersonAlt.vue'),
      },
      {
        path: '/wallet/rub_to_rolf',
        name: 'send_rub_to_rolf',
        component: () => import('pages/wallet/SendRubToRolf.vue'),
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

      {
        path: '/wallet/notifications',
        name: 'notifications',
        component: () => import('pages/wallet/Notifications.vue'),
      },
      {
        path: '/wallet/p2p',
        name: 'p2p_index',
        component: () => import('pages/wallet/P2P/Index.vue'),
      },
      {
        path: '/wallet/p2p',
        name: 'p2p_index_blank',
        component: () => import('pages/wallet/P2P/IndexNonAuth.vue'),
      },
      {
        path: '/wallet/p2p/offer/:offer_id',
        name: 'p2p_offer',
        component: () => import('pages/wallet/P2P/Offer.vue'),
      },
      {
        path: '/wallet/p2p/trade/:uid',
        name: 'p2p_trade',
        component: () => import('pages/wallet/P2P/Trade.vue'),
      },
      {
        path: '/wallet/p2p/new_buy_offer',
        name: 'p2p_new_buy_offer',
        component: () => import('pages/wallet/P2P/NewBuyOffer.vue'),
      },
      {
        path: '/wallet/p2p/new_sell_offer',
        name: 'p2p_new_sell_offer',
        component: () => import('pages/wallet/P2P/NewSellOffer.vue'),
      },
      {
        path: '/wallet/p2p/user',
        name: 'p2p_user',
        component: () => import('pages/wallet/P2P/User.vue'),
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
