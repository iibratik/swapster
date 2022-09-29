import { createStore } from 'vuex'
import Lang from '@/assets/scripts/Lang/Lang';

export default createStore({
  state: function(){
    return{
      currentLang: Lang.en,
      btnJoin: Lang.en.btnJoin,
      currentActiveLang: 'en',
      menuList: [{
        id: 1,
        title: Lang.en.mainNavLink,
      },
      {
        id:2,
        title: Lang.en.tariffsLink,
      },
      {
        id:3,
        title: Lang.en.worksLink,
      },
      {
        id:4,
        title: Lang.en.checkLink,
      },
      {
        id:5,
        title: Lang.en.blogLink,
      },
      {
        id:6,
        title: Lang.en.support,
      },
    ],
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
      mainNumbersItems:[
        {
          id:1,
          icon:'swapster-user.svg',
          number:'65 000',
          title:'человек',
          descr:'уже используют криптокошелек Swapster'
        },
        {
          id:2,
          icon:'swapster-document.svg',
          number:'300 000',
          title:'транзакций',
          descr:' было совершено с момента запуска'
        },
        {
          id:3,
          icon:'swapster-moneys.svg',
          number:'27 000 $',
          title:'заработано',
          descr:'было заработано нашими пользователями за привлечении своих друзей'
        },
        {
          id:4,
          icon:'swapster-clock.svg',
          number:'1,5',
          title:'секунды',
          descr:'среднее время отправки транзакции'
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
      }
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
    getNumbersItems(state){
      return state.mainNumbersItems;
    },
    getFooterMenuList(state){
      return state.footerMenuList
    },
    getFooterMenuCurrenty(state){
      return state.footerMenuCurrenty
    },
    getFooterMenuIcons(state){
      return state.footerMenuIcons
    },
  },
  mutations: {
    switchingLang(state, payload){
      if (payload == 'ru') {
        state.currentActiveLang = payload
        state.currentLang = Lang.ru
        state.menuList.forEach(el=>{
          switch (el.id) {
            case 1:el.title = state.currentLang.mainNavLink
            break;
            case 2:el.title = state.currentLang.tariffsLink
            break;
            case 3:el.title = state.currentLang.worksLink;
            break;
            case 4:el.title = state.currentLang.checkLink;
            break;
            case 5:el.title = state.currentLang.blogLink;
            break;
            case 6:el.title = state.currentLang.support
            break;

            default:

            break;
          }
        })
        state.btnJoin = Lang.ru.btnJoin
      }else if (payload == 'en') {
        state.currentActiveLang = payload
        state.currentLang = Lang.en
        state.menuList.forEach(el=>{
          switch (el.id) {
            case 1:el.title = state.currentLang.mainNavLink
            break;
            case 2:el.title = state.currentLang.tariffsLink
            break;
            case 3:el.title = state.currentLang.worksLink;
            break;
            case 4:el.title = state.currentLang.checkLink;
            break;
            case 5:el.title = state.currentLang.blogLink;
            break;
            case 6:el.title = state.currentLang.support
            break;

            default:

            break;
          }
        })
        state.btnJoin = Lang.en.btnJoin
      }{
      }
    }
  },
  actions: {

  },
  modules: {

  }
})
