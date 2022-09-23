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
    importantList:[
      {
        id:1,
        title:"Бесплатные транзакции",
        icon: "main__important-transaction.svg",
        descr: "Транзакции другим пользователям Swapster абсолютно бесплатны. Вы можете одним кликом отправить другу любую криптовалюту за секунду — достаточно знать его ID."
      },
      {
        id:2,
        title:"Почти моментальные переводы",
        icon: "main__important-transfer.svg",
        descr: "В комиссиях Swapster уже заложено щедрое вознаграждение майнерам, поэтому все ваши переводы будут доставлены максимально быстро. USDT — 1 минута. ВТС, ЕТН — 10 минут."
      },
      {
        id:3,
        title:"Анонимность и безопасность",
        icon: "main__important-anonim.svg",
        descr: "Мы не собираем и не передаём персональные данные пользователей. Вам доступны все функции бота без верификации личности. Безопасность ваших средств обеспечена безопасностью вашего Telegram-аккаунта."
      },
    ],
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
    appFunctionsList:[
      {
        id:1,
        title:"Прием криптовалют",
        text:"Принимайте большинство криптоактивов с любых кошельков без комиссий",
        icon: "reception_crypto.svg"
      },
      {
        id:2,
        title:"Отправка криптовалют",
        text:"Принимайте большинство криптоактивов с любых кошельков без комиссий",
        icon: "send_coin.svg"
      },
      {
        id:3,
        title:"Обмен криптовалют",
        text:"Принимайте большинство криптоактивов с любых кошельков без комиссий",
        icon: "trade.svg"
      },
      {
        id:4,
        title:"Пополнение и вывод на карты банков",
        text:"Принимайте большинство криптоактивов с любых кошельков без комиссий",
        icon: "card_replenishment.svg",
        fourth: true
      },
      {
        id:5,
        title:"Заработок на рефералах",
        text:"Принимайте большинство криптоактивов с любых кошельков без комиссий",
        icon: "referrals_earnings.svg"
      },
      {
        id:6,
        title:"Проверка транзакция",
        text:"Принимайте большинство криптоактивов с любых кошельков без комиссий",
        icon: "transaction_check.svg"
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
    getImportantList(state){
      return state.importantList
    },
    getBenefitsList(state){
      return state.benefitsList
    },
    getAppFunctionsList(state){
      return state.appFunctionsList;
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
