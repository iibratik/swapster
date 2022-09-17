import { createStore } from 'vuex'
import Lang from '@/assets/scripts/Lang/Lang';

export default createStore({
  state: {
    menuList: [{
      id: 1,
      title: Lang.ru.mainNavLink,
    },
    {
      id:2,
      title: Lang.ru.tariffsLink,
    },
    {
      id:3,
      title: Lang.ru.worksLink,
    },
    {
      id:4,
      title: Lang.ru.checkLink
    },
    {
      id:5,
      title: Lang.ru.blogLink
    },
    {
      id:6,
      title: "Поддержка",
    }],
    benefitsList:[
      {
        id: 1,
        icon: "terminal.svg",
        title: "Автоматические выплаты на любые счета российских банков",
        text: "Пользуясь криптокошельком в ТГ, вам не требуется ждать, когда придут деньги, как это происходит в обменниках и биржах. Выплаты переводятся мгновенно. Для комфорта можно сохранить список рабочих карт, чтобы не вводить номера при каждом переводе."
      },
      {
        id:2,
        icon: "transactions.svg",
        title: "Выгодный обмен криптовалют без больших комиссий",
        text: "При конвертации криптовалют не нужно оплачивать дополнительную комиссию. Курс фиксируется каждые 5 секунд и обновляется в режиме онлайн."
      },
      {
        id:3,
        icon: "card_and_money.svg",
        title: "Общий баланс USDT для всех сетей без комиссии",
        text: "Переводите USDT по сетям TRC20, ERC20, BEP20 с одного криптокошелька в ТГ. Получили перевод по одной сети? Можете отправить его по другой. Перекидывать средства между счетами не нужно."
      },
      {
        id:4,
        icon: "support.svg",
        title: "Поддержка 24/7",
        text: "Сотрудники находятся на связи круглосуточно. Можете обратиться с появившимися вопросами и предложениями о работе криптокошелька в ТГ в любое время."
      },
      {
        id:5,
        icon: "aml-check.svg",
        title: "AML-проверка переводов и кошельков",
        text: "Проверить происхождение средств можно заранее, чтобы быть уверенными, что они получены честным, не преступным путем. Компания всегда заботимся о безопасности клиентов."
      },
    ],
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
    getBenefitsList(state){
      return state.benefitsList
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
