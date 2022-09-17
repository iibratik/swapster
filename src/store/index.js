import { createStore } from 'vuex'

export default createStore({
  state: {
    menuList: [{
      id: 1,
      title: "Главная",
    },
    {
      id:2,
      title: "Активы и тарифы"
    },
    {
      id:3,
      title: "Как это работает",
    },
    {
      id:4,
      title: "Крипто-проверки"
    },
    {
      id:5,
      title: "Блог"
    },
    {
      id:6,
      title: "Поддержка",
    }],
    footerMenuList:[
      {
        id:1,
        title: "О сайте"
      },
      {
        id:2,
        title: "Активы и тарифы"
      },
      {
        id:3,
        title: "Как это работает"
      },
      {
        id:4,
        title: "Криптобезопасность "
      },
      {
        id:5,
        title: "Статьи"
      },
      {
        id:6,
        title: "Предложение"
      },
    ],
    footerMenuCurrenty: [
      {
        id:1,
        title: "Bitcoim (BTC)"
      },
      {
        id:2,
        title: "Etherium (ETH)"
      },
      {
        id:3,
        title: "Binance Coin (BNB)"
      },
      {
        id:4,
        title: "Tron (TRX)"
      },
      {
        id:5,
        title: "Tether (USDT)"
      },
      {
        id:6,
        title: "USD Coin (USDC)"
      },
    ],
    footerMenuIcons: [
      {
        id:1,
        icon: "facebook.svg"
      },
      {
        id:2,
        icon: "vk.svg"
      },
      {
        id:3,
        icon: "inst.svg"
      },
      {
        id:4,
        icon: "telegram.svg"
      },
    ]
  },
  getters: {
    getMenuList(state){
      return state.menuList
    },
    getFooterMenuList(state){
      return state.footerMenuList
    },
    getFooterMenuCurrenty(state){
      return state.footerMenuCurrenty
    },
    getFooterMenuIcons(state){
      return state.footerMenuIcons
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
