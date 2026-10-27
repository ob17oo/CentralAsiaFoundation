"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";

const languages = ["ru", "uz", "tg", "ky", "en"] as const;
type Language = (typeof languages)[number];

const content: Record<
  Language,
  {
    name: string;
    nav: string[];
    emergency: string;
    eyebrow: string;
    title: string;
    intro: string;
    primary: string;
    secondary: string;
    trust: string;
    heroNote: string;
    helpTitle: string;
    helpIntro: string;
    services: [string, string][];
    allHelp: string;
    processTitle: string;
    steps: [string, string][];
    aboutLabel: string;
    aboutTitle: string;
    aboutText: string;
    aboutLink: string;
    aboutDetails: [string, string][];
    contributeTitle: string;
    contributeIntro: string;
    contributeCards: [string, string][];
    contributeAction: string;
    contributeNote: string;
    contactLabel: string;
    contactTitle: string;
    contactText: string;
    contactNote: string;
    formTitle: string;
    formText: string;
    nameField: string;
    contactField: string;
    messageField: string;
    consent: string;
    submit: string;
    formWarning: string;
    formResult: string;
    footerTagline: string;
    footerLegal: string;
    readable: string;
    menuOpen: string;
    menuClose: string;
    navLabel: string;
    languageLabel: string;
    homeLabel: string;
  }
> = {
  ru: {
    name: "Русский",
    nav: ["Главная", "О фонде", "Полезная информация", "Получить помощь", "Как помочь", "Контакты"],
    emergency: "Нужна срочная помощь?",
    eyebrow: "Поддержка рядом",
    title: "Вы не одни. Мы поможем разобраться.",
    intro:
      "Среднеазиатский фонд социально-правовой поддержки мигрантов. Помогаем сориентироваться в сложной ситуации и найти следующий шаг.",
    primary: "Обратиться за помощью",
    secondary: "Узнать о фонде",
    trust: "Бережно · Понятно · Конфиденциально",
    heroNote: "Здесь можно начать с самого важного",
    helpTitle: "С чем мы помогаем",
    helpIntro:
      "Практическая информация и поддержка — без сложных слов и осуждения.",
    services: [
      ["Правовая поддержка", "Разобраться в трудовых правах и подготовиться к консультации."],
      ["Работа и зарплата", "Что делать при невыплате зарплаты или споре с работодателем."],
      ["Жильё и быт", "Подсказки по поиску жилья и повседневным вопросам."],
      ["Здоровье", "Как сориентироваться в доступе к медицинской помощи."],
      ["Язык и адаптация", "Материалы для общения и уверенной жизни в новом месте."],
      ["Поддержка женщин", "Безопасная консультация по вопросам, с которыми сталкиваются женщины."],
    ],
    allHelp: "Не нашли нужную тему? Напишите нам",
    processTitle: "Помощь начинается с разговора",
    steps: [
      ["Расскажите", "Коротко опишите ситуацию — только то, чем готовы поделиться."],
      ["Разберёмся", "Уточним, какая поддержка может подойти именно вам."],
      ["Договоримся", "Обсудим безопасный способ связи и дальнейшие шаги."],
    ],
    aboutLabel: "О фонде",
    aboutTitle: "Поддержка, в которой важен человек",
    aboutText:
      "Мы стремимся сделать правовую и социальную помощь доступнее для людей, которые работают вдали от дома. Объясняем понятным языком, относимся бережно и помогаем найти проверенный путь решения.",
    aboutLink: "Обратиться за помощью",
    aboutDetails: [
      ["Команда фонда", "Сведения о сотрудниках и специалистах будут добавлены после согласования с фондом."],
      ["Отчёты и документы", "Раздел с учредительными документами и отчётами будет заполнен проверенными материалами."],
    ],
    contributeTitle: "Поддержите нашу работу",
    contributeIntro: "Вместе мы можем сделать помощь доступнее для тех, кому она нужна.",
    contributeCards: [
      ["Пожертвовать", "Уточните у фонда действующие способы пожертвования — платёжные реквизиты здесь пока не подключены."],
      ["Стать волонтёром", "Помогите с переводами, консультациями или поддержкой новых участников."],
      ["Партнёрство", "Обсудим сотрудничество с организациями, специалистами и бизнесом."],
      ["Отчёты и документы", "Раздел прозрачности будет дополнен подтверждёнными материалами фонда."],
    ],
    contributeAction: "Связаться с фондом",
    contributeNote: "Финансовые реквизиты и документы фонда будут опубликованы после проверки.",
    contactLabel: "Связаться с нами",
    contactTitle: "Ситуация не может ждать?",
    contactText:
      "Опишите, что произошло. Мы подскажем, как связаться с фондом и с чего начать.",
    contactNote:
      "Контакты горячей линии и мессенджеров фонда появятся здесь после настройки. Если вы в непосредственной опасности, обратитесь в местную экстренную службу.",
    formTitle: "Расскажите, чем мы можем помочь",
    formText: "Пока это демонстрационная форма — сообщение не отправляется.",
    nameField: "Как к вам обращаться",
    contactField: "Телефон или удобный способ связи",
    messageField: "Коротко опишите ситуацию",
    consent: "Я понимаю, что это демонстрационная форма и данные не отправляются.",
    submit: "Подготовить обращение",
    formWarning:
      "Отправка пока не подключена. Не указывайте паспортные данные и не прикладывайте документы.",
    formResult:
      "Форма ещё не подключена к защищённому каналу фонда. Ваши данные никуда не отправлены.",
    footerTagline: "Социально-правовая поддержка мигрантов",
    footerLegal: "Политика конфиденциальности будет добавлена перед запуском",
    readable: "Увеличить текст",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    navLabel: "Основная навигация",
    languageLabel: "Язык сайта",
    homeLabel: "CAF — главная",
  },
  uz: {
    name: "O‘zbekcha",
    nav: ["Bosh sahifa", "Fond haqida", "Foydali ma’lumot", "Yordam olish", "Qanday yordam berish", "Aloqa"],
    emergency: "Shoshilinch yordam kerakmi?",
    eyebrow: "Yordam yoningizda",
    title: "Siz yolg‘iz emassiz. Birgalikda yechim topamiz.",
    intro:
      "Markaziy Osiyo migrantlarini ijtimoiy va huquqiy qo‘llab-quvvatlash jamg‘armasi. Murakkab vaziyatda yo‘l topishga va keyingi qadamni belgilashga yordam beramiz.",
    primary: "Yordam so‘rash",
    secondary: "Jamg‘arma haqida",
    trust: "Ehtiyotkorlik · Aniqlik · Maxfiylik",
    heroNote: "Eng muhim masaladan boshlang",
    helpTitle: "Qanday yordam beramiz",
    helpIntro:
      "Amaliy ma’lumot va yordam — sodda tilda, hurmat bilan.",
    services: [
      ["Huquqiy yordam", "Mehnat huquqlarini tushunish va maslahatga tayyorlanish."],
      ["Ish va maosh", "Maosh berilmaganda yoki ish beruvchi bilan nizo bo‘lganda nima qilish kerak."],
      ["Uy-joy va kundalik hayot", "Uy topish va kundalik masalalar bo‘yicha tavsiyalar."],
      ["Sog‘liq", "Tibbiy yordam olish yo‘llarini tushunish."],
      ["Til va moslashuv", "Yangi joyda muloqot qilish va yashash uchun materiallar."],
      ["Ayollarni qo‘llab-quvvatlash", "Ayollar duch keladigan masalalar bo‘yicha xavfsiz maslahat."],
    ],
    allHelp: "Kerakli mavzuni topmadingizmi? Bizga yozing",
    processTitle: "Yordam suhbatdan boshlanadi",
    steps: [
      ["Ayting", "Vaziyatni qisqacha tushuntiring — faqat aytishga tayyor bo‘lgan narsalarni."],
      ["Aniqlaymiz", "Sizga qanday yordam mos kelishini birgalikda ko‘rib chiqamiz."],
      ["Kelishamiz", "Xavfsiz aloqa usuli va keyingi qadamlarni belgilaymiz."],
    ],
    aboutLabel: "Jamg‘arma haqida",
    aboutTitle: "Har bir inson muhim bo‘lgan yordam",
    aboutText:
      "Uydan uzoqda ishlayotgan odamlar uchun huquqiy va ijtimoiy yordamni qulayroq qilishga intilamiz. Sodda tilda tushuntiramiz va ishonchli yechim yo‘lini topishga yordam beramiz.",
    aboutLink: "Yordam so‘rash",
    aboutDetails: [
      ["Jamg‘arma jamoasi", "Xodimlar va mutaxassislar haqidagi ma’lumotlar jamg‘arma bilan kelishilgandan so‘ng qo‘shiladi."],
      ["Hisobot va hujjatlar", "Ustav hujjatlari va hisobotlar bo‘limi tekshirilgan materiallar bilan to‘ldiriladi."],
    ],
    contributeTitle: "Faoliyatimizni qo‘llab-quvvatlang",
    contributeIntro: "Birgalikda yordamga muhtoj insonlar uchun ko‘makni qulayroq qilamiz.",
    contributeCards: [
      ["Xayriya qilish", "Jamg‘armadan amaldagi xayriya usullarini so‘rang — to‘lov rekvizitlari hozircha ulanmagan."],
      ["Ko‘ngilli bo‘lish", "Tarjima, maslahat yoki yangi ishtirokchilarni qo‘llab-quvvatlashda yordam bering."],
      ["Hamkorlik", "Tashkilotlar, mutaxassislar va biznes bilan hamkorlikni muhokama qilamiz."],
      ["Hisobot va hujjatlar", "Shaffoflik bo‘limi jamg‘armaning tasdiqlangan materiallari bilan to‘ldiriladi."],
    ],
    contributeAction: "Jamg‘arma bilan bog‘lanish",
    contributeNote: "Moliyaviy rekvizitlar va jamg‘arma hujjatlari tekshiruvdan so‘ng e’lon qilinadi.",
    contactLabel: "Biz bilan bog‘laning",
    contactTitle: "Vaziyat kutib turolmayaptimi?",
    contactText:
      "Nima bo‘lganini yozing. Jamg‘arma bilan qanday bog‘lanish va nimadan boshlashni aytamiz.",
    contactNote:
      "Jamg‘armaning ishonch telefoni va messenjerlari sozlangach shu yerda paydo bo‘ladi. Bevosita xavf bo‘lsa, mahalliy favqulodda xizmatga murojaat qiling.",
    formTitle: "Qanday yordam kerakligini ayting",
    formText: "Bu hozircha namoyish shakli — xabar yuborilmaydi.",
    nameField: "Ismingiz",
    contactField: "Telefon yoki qulay aloqa usuli",
    messageField: "Vaziyatni qisqacha tushuntiring",
    consent: "Bu namoyish shakli ekanini va ma’lumotlar yuborilmasligini tushunaman.",
    submit: "Murojaatni tayyorlash",
    formWarning:
      "Yuborish hali ulanmagan. Pasport ma’lumotlarini kiritmang va hujjatlarni biriktirmang.",
    formResult:
      "Shakl hali jamg‘armaning himoyalangan kanaliga ulanmagan. Ma’lumotlaringiz yuborilmadi.",
    footerTagline: "Migrantlarni ijtimoiy-huquqiy qo‘llab-quvvatlash",
    footerLegal: "Maxfiylik siyosati ishga tushirishdan oldin qo‘shiladi",
    readable: "Matnni kattalashtirish",
    menuOpen: "Menyuni ochish",
    menuClose: "Menyuni yopish",
    navLabel: "Asosiy navigatsiya",
    languageLabel: "Sayt tili",
    homeLabel: "CAF — bosh sahifa",
  },
  tg: {
    name: "Тоҷикӣ",
    nav: ["Саҳифаи асосӣ", "Дар бораи фонд", "Маълумоти муфид", "Кумак гирифтан", "Чӣ гуна кумак кардан", "Тамос"],
    emergency: "Кумаки фаврӣ лозим аст?",
    eyebrow: "Кумак дар паҳлӯи шумост",
    title: "Шумо танҳо нестед. Якҷоя роҳ меёбем.",
    intro:
      "Бунёди дастгирии иҷтимоӣ ва ҳуқуқии муҳоҷирони Осиёи Марказӣ. Дар вазъияти душвор барои ёфтани роҳи ҳал ва қадами навбатӣ кумак мекунем.",
    primary: "Барои кумак муроҷиат кунед",
    secondary: "Дар бораи фонд",
    trust: "Боэҳтиёт · Фаҳмо · Махфӣ",
    heroNote: "Аз масъалаи муҳимтарин оғоз кунед",
    helpTitle: "Мо дар чӣ кумак мекунем",
    helpIntro:
      "Маълумот ва дастгирии амалӣ — бо забони сода ва эҳтиром.",
    services: [
      ["Дастгирии ҳуқуқӣ", "Фаҳмидани ҳуқуқи меҳнатӣ ва омодагӣ ба машварат."],
      ["Кор ва маош", "Ҳангоми напардохтани маош ё баҳс бо корфармо чӣ бояд кард."],
      ["Манзил ва рӯзгор", "Маслиҳатҳо барои ёфтани манзил ва масъалаҳои рӯзмарра."],
      ["Саломатӣ", "Роҳҳои дастрасӣ ба ёрии тиббиро фаҳмонем."],
      ["Забон ва мутобиқшавӣ", "Мавод барои муоширату зиндагии боэътимод дар ҷои нав."],
      ["Дастгирии занон", "Машварати бехатар дар масъалаҳое, ки занон рӯ ба рӯ мешаванд."],
    ],
    allHelp: "Мавзӯи лозимаро наёфтед? Ба мо нависед",
    processTitle: "Кумак аз суҳбат оғоз мешавад",
    steps: [
      ["Нақл кунед", "Вазъиятро кӯтоҳ шарҳ диҳед — танҳо он чизеро, ки гуфтан мехоҳед."],
      ["Баррасӣ мекунем", "Якҷоя мефаҳмем, ки кадом кумак ба шумо мувофиқ аст."],
      ["Ба мувофиқа мерасем", "Роҳи бехатари тамос ва қадамҳои минбаъдаро муайян мекунем."],
    ],
    aboutLabel: "Дар бораи фонд",
    aboutTitle: "Дастгирие, ки дар он инсон муҳим аст",
    aboutText:
      "Мо мекӯшем кумакҳои ҳуқуқӣ ва иҷтимоиро барои одамони дур аз хона дастрас кунем. Бо забони фаҳмо мефаҳмонем ва дар ёфтани роҳи боэътимод кумак мекунем.",
    aboutLink: "Барои кумак муроҷиат кунед",
    aboutDetails: [
      ["Гурӯҳи фонд", "Маълумот дар бораи кормандон ва мутахассисон пас аз мувофиқа бо фонд илова мешавад."],
      ["Ҳисобот ва ҳуҷҷатҳо", "Бахши ҳуҷҷатҳои таъсисӣ ва ҳисоботҳо бо маводи санҷидашуда пур карда мешавад."],
    ],
    contributeTitle: "Кори моро дастгирӣ кунед",
    contributeIntro: "Якҷоя кумакро барои онҳое, ки ба он ниёз доранд, дастрас мекунем.",
    contributeCards: [
      ["Хайрия кардан", "Роҳҳои амалкунандаи хайрияро аз фонд пурсед — маълумоти пардохт ҳоло пайваст нашудааст."],
      ["Ихтиёрӣ шудан", "Дар тарҷума, машварат ё дастгирии иштирокчиёни нав кумак кунед."],
      ["Ҳамкорӣ", "Ҳамкориро бо ташкилотҳо, мутахассисон ва соҳибкорон баррасӣ мекунем."],
      ["Ҳисобот ва ҳуҷҷатҳо", "Ин бахш бо маводи тасдиқшудаи фонд пур карда мешавад."],
    ],
    contributeAction: "Бо фонд тамос гирифтан",
    contributeNote: "Маълумоти молиявӣ ва ҳуҷҷатҳои фонд пас аз санҷиш нашр мешаванд.",
    contactLabel: "Бо мо тамос гиред",
    contactTitle: "Вазъият интизор шуда наметавонад?",
    contactText:
      "Ҳодисаро шарҳ диҳед. Мо роҳҳои тамос бо фонд ва қадами аввалро нишон медиҳем.",
    contactNote:
      "Рақами телефони боварӣ ва паёмрасонҳои фонд пас аз танзим дар ин ҷо пайдо мешаванд. Дар ҳолати хатари фаврӣ ба хадамоти маҳаллии изтирорӣ муроҷиат кунед.",
    formTitle: "Гӯед, ки чӣ гуна кумак лозим аст",
    formText: "Ҳоло ин шакли намоишӣ аст — паём фиристода намешавад.",
    nameField: "Номи шумо",
    contactField: "Телефон ё роҳи муносиби тамос",
    messageField: "Вазъиятро кӯтоҳ шарҳ диҳед",
    consent: "Ман мефаҳмам, ки ин шакли намоишӣ аст ва маълумот фиристода намешавад.",
    submit: "Омода кардани муроҷиат",
    formWarning:
      "Фиристодан ҳоло фаъол нест. Маълумоти шиносномавиро ворид накунед ва ҳуҷҷатро замима насозед.",
    formResult:
      "Шакл ҳанӯз ба канали ҳифзшудаи фонд пайваст нашудааст. Маълумоти шумо фиристода нашуд.",
    footerTagline: "Дастгирии иҷтимоӣ ва ҳуқуқии муҳоҷирон",
    footerLegal: "Сиёсати махфият пеш аз оғоз илова мешавад",
    readable: "Калон кардани матн",
    menuOpen: "Кушодани меню",
    menuClose: "Пӯшидани меню",
    navLabel: "Паймоиши асосӣ",
    languageLabel: "Забони сомона",
    homeLabel: "CAF — саҳифаи асосӣ",
  },
  ky: {
    name: "Кыргызча",
    nav: ["Башкы бет", "Фонд жөнүндө", "Пайдалуу маалымат", "Жардам алуу", "Кантип жардам берүү", "Байланыш"],
    emergency: "Шашылыш жардам керекпи?",
    eyebrow: "Жардам жаныңызда",
    title: "Сиз жалгыз эмессиз. Чогуу чечим табабыз.",
    intro:
      "Борбор Азия мигранттарын социалдык жана укуктук колдоо фонду. Кыйын кырдаалда багыт алып, кийинки кадамды табууга жардам беребиз.",
    primary: "Жардам сурап кайрылуу",
    secondary: "Фонд жөнүндө",
    trust: "Камкордук · Түшүнүктүү · Купуя",
    heroNote: "Эң маанилүү маселеден баштаңыз",
    helpTitle: "Кандай жардам беребиз",
    helpIntro:
      "Практикалык маалымат жана колдоо — жөнөкөй тилде, урмат менен.",
    services: [
      ["Укуктук колдоо", "Эмгек укуктарын түшүнүү жана кеңешке даярдануу."],
      ["Жумуш жана айлык", "Айлык төлөнбөсө же жумуш берүүчү менен талаш чыкса эмне кылуу керек."],
      ["Турак жай жана тиричилик", "Турак жай табуу жана күнүмдүк маселелер боюнча кеңештер."],
      ["Ден соолук", "Медициналык жардам алуу жолдорун түшүнүүгө жардам."],
      ["Тил жана көнүү", "Жаңы жерде баарлашуу жана жашоо үчүн материалдар."],
      ["Аялдарды колдоо", "Аялдар туш болгон маселелер боюнча коопсуз кеңеш."],
    ],
    allHelp: "Керектүү теманы таппадыңызбы? Бизге жазыңыз",
    processTitle: "Жардам сүйлөшүүдөн башталат",
    steps: [
      ["Айтып бериңиз", "Кырдаалды кыскача түшүндүрүңүз — айткыңыз келген нерсени гана."],
      ["Тактайбыз", "Сизге кандай колдоо ылайыктуу экенин чогуу карайбыз."],
      ["Макулдашабыз", "Коопсуз байланыш жолун жана кийинки кадамдарды аныктайбыз."],
    ],
    aboutLabel: "Фонд жөнүндө",
    aboutTitle: "Адам маанилүү болгон колдоо",
    aboutText:
      "Үйдөн алыс иштеген адамдар үчүн укуктук жана социалдык жардамды жеткиликтүү кылууга умтулабыз. Жөнөкөй тилде түшүндүрүп, ишенимдүү чечим жолун табууга көмөктөшөбүз.",
    aboutLink: "Жардам сурап кайрылуу",
    aboutDetails: [
      ["Фонддун командасы", "Кызматкерлер жана адистер тууралуу маалымат фонд менен макулдашылгандан кийин кошулат."],
      ["Отчёттор жана документтер", "Уюштуруу документтери жана отчёттор бөлүмүнө текшерилген материалдар жайгаштырылат."],
    ],
    contributeTitle: "Ишибизди колдоңуз",
    contributeIntro: "Биргелешип жардамга муктаж адамдар үчүн колдоону жеткиликтүү кылабыз.",
    contributeCards: [
      ["Кайрымдуулук кылуу", "Фонддон кайрымдуулук ыкмаларын тактаңыз — төлөм маалыматтары азырынча кошула элек."],
      ["Ыктыярчы болуу", "Котормо, кеңеш берүү же жаңы катышуучуларга колдоо көрсөтүүгө жардам бериңиз."],
      ["Өнөктөштүк", "Уюмдар, адистер жана бизнес менен кызматташууну талкуулайбыз."],
      ["Отчёттор жана документтер", "Бул бөлүм фонддун текшерилген материалдары менен толукталат."],
    ],
    contributeAction: "Фонд менен байланышуу",
    contributeNote: "Финансылык маалымат жана фонддун документтери текшерилгенден кийин жарыяланат.",
    contactLabel: "Биз менен байланышыңыз",
    contactTitle: "Кырдаал күтө албайбы?",
    contactText:
      "Эмне болгонун айтып бериңиз. Фонд менен кантип байланышып, эмнеден баштоону көрсөтөбүз.",
    contactNote:
      "Фонддун ишеним телефону жана мессенжерлери жөндөлгөндөн кийин бул жерде көрсөтүлөт. Дароо коркунуч болсо, жергиликтүү тез жардам кызматына кайрылыңыз.",
    formTitle: "Кандай жардам керек экенин айтыңыз",
    formText: "Азырынча бул демо форма — билдирүү жөнөтүлбөйт.",
    nameField: "Атыңыз",
    contactField: "Телефон же ыңгайлуу байланыш жолу",
    messageField: "Кырдаалды кыскача сүрөттөп бериңиз",
    consent: "Бул демо форма экенин жана маалымат жөнөтүлбөй турганын түшүнөм.",
    submit: "Кайрылууну даярдоо",
    formWarning:
      "Жөнөтүү азырынча иштей элек. Паспорт маалыматын жазбаңыз жана документ тиркебеңиз.",
    formResult:
      "Форма фонддун корголгон каналына туташтырыла элек. Маалыматыңыз жөнөтүлгөн жок.",
    footerTagline: "Мигранттарды социалдык-укуктук колдоо",
    footerLegal: "Купуялык саясаты ишке кирерден мурда кошулат",
    readable: "Текстти чоңойтуу",
    menuOpen: "Менюну ачуу",
    menuClose: "Менюну жабуу",
    navLabel: "Негизги навигация",
    languageLabel: "Сайттын тили",
    homeLabel: "CAF — башкы бет",
  },
  en: {
    name: "English",
    nav: ["Home", "About us", "Useful information", "Get help", "How to help", "Contact"],
    emergency: "Need urgent help?",
    eyebrow: "Support, close by",
    title: "You are not alone. Let’s find a way forward.",
    intro:
      "The Central Asia Foundation for Social and Legal Support of Migrants. We help people navigate difficult situations and find a next step.",
    primary: "Ask for support",
    secondary: "About the foundation",
    trust: "Thoughtful · Clear · Confidential",
    heroNote: "Start with what matters most",
    helpTitle: "How we can help",
    helpIntro:
      "Practical information and support — in plain language, without judgement.",
    services: [
      ["Legal support", "Understand workplace rights and prepare for a consultation."],
      ["Work and pay", "What to do if wages are withheld or a workplace dispute arises."],
      ["Housing and daily life", "Guidance on finding a place to live and everyday questions."],
      ["Health", "Find your way to available medical support."],
      ["Language and settling in", "Resources for communication and everyday life in a new place."],
      ["Support for women", "A safe consultation about issues that affect women."],
    ],
    allHelp: "Can't find what you need? Get in touch",
    processTitle: "Support starts with a conversation",
    steps: [
      ["Tell us", "Briefly describe your situation — only what you feel comfortable sharing."],
      ["We listen", "We’ll work out what kind of support may suit your situation."],
      ["Plan together", "We’ll agree on a safe way to stay in touch and the next steps."],
    ],
    aboutLabel: "About us",
    aboutTitle: "Support that puts people first",
    aboutText:
      "We work to make social and legal support more accessible to people working far from home. We explain things clearly, treat everyone with care, and help find a reliable way forward.",
    aboutLink: "Get support",
    aboutDetails: [
      ["Our team", "Staff and specialist profiles will be added after confirmation by the foundation."],
      ["Reports and documents", "This section will be completed with verified governing documents and reports."],
    ],
    contributeTitle: "Support our work",
    contributeIntro: "Together, we can make support more accessible to people who need it.",
    contributeCards: [
      ["Make a donation", "Ask the foundation about current donation options — payment details are not set up here yet."],
      ["Volunteer", "Help with translation, consultations, or welcoming new community members."],
      ["Partner with us", "Explore collaboration with organisations, specialists, and businesses."],
      ["Reports and documents", "This transparency section will be updated with verified foundation materials."],
    ],
    contributeAction: "Contact the foundation",
    contributeNote: "Financial details and foundation documents will be published after verification.",
    contactLabel: "Get in touch",
    contactTitle: "Can't wait to get help?",
    contactText:
      "Tell us what happened. We’ll help you find a way to contact the foundation and get started.",
    contactNote:
      "The foundation's hotline and messenger links will appear here once configured. If you are in immediate danger, contact your local emergency services.",
    formTitle: "Tell us what support you need",
    formText: "This is currently a demo form — no message will be sent.",
    nameField: "Your name",
    contactField: "Phone or preferred way to reach you",
    messageField: "Briefly describe your situation",
    consent: "I understand this is a demo form and no information will be sent.",
    submit: "Prepare a request",
    formWarning:
      "Sending is not set up yet. Do not enter passport details or attach documents.",
    formResult:
      "This form is not yet connected to the foundation's secure channel. Your details have not been sent.",
    footerTagline: "Social and legal support for migrants",
    footerLegal: "Privacy policy to be added before launch",
    readable: "Increase text size",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    navLabel: "Main navigation",
    languageLabel: "Website language",
    homeLabel: "CAF — home",
  },
};

const serviceNumbers = ["01", "02", "03", "04", "05", "06"];
const pagePaths = ["/", "/about", "/information", "/get-help", "/support", "/contacts"];
const languageListeners = new Set<() => void>();

export type SitePageKey = "home" | "about" | "information" | "get-help" | "support" | "contacts";

function subscribeToLanguage(listener: () => void) {
  languageListeners.add(listener);
  return () => languageListeners.delete(listener);
}

function getLanguageSnapshot(): Language {
  const savedLanguage = window.localStorage.getItem("safsupport-language");
  return languages.find((code) => code === savedLanguage) ?? "ru";
}

function getServerLanguageSnapshot(): Language {
  return "ru";
}

function saveLanguage(language: Language) {
  window.localStorage.setItem("safsupport-language", language);
  languageListeners.forEach((listener) => listener());
}

export default function SitePage({ page }: { page: SitePageKey }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerLanguageSnapshot,
  );
  const [largeText, setLargeText] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const copy = content[language];
  const pageIndex: Record<SitePageKey, number> = {
    home: 0,
    about: 1,
    information: 2,
    "get-help": 3,
    support: 4,
    contacts: 5,
  };
  const pageTitle = copy.nav[pageIndex[page]];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    if (!menuOpen) return;

    const mobileMenuQuery = window.matchMedia("(max-width: 1359px)");
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    mobileMenuQuery.addEventListener("change", closeOnDesktop);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      mobileMenuQuery.removeEventListener("change", closeOnDesktop);
    };
  }, [menuOpen]);

  return (
    <main lang={language} className={largeText ? "site site--large-text" : "site"}>
      <div className="utility-bar">
        <div className="container utility-inner">
          <span>{copy.trust}</span>
          <button
            className="text-size-toggle"
            type="button"
            onClick={() => setLargeText(!largeText)}
            aria-pressed={largeText}
          >
            <span aria-hidden="true">A</span> {copy.readable}
          </button>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label={copy.homeLabel}>
            <span className="brand-mark" aria-hidden="true">
              <Image
                className="brand-logo"
                src="/logotype/CAF-logotype.svg"
                alt=""
                width={40}
                height={30}
              />
            </span>
            <span className="brand-name">CAF</span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? copy.menuClose : copy.menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav
            id="primary-navigation"
            className={menuOpen ? "navigation navigation--open" : "navigation"}
            aria-label={copy.navLabel}
          >
            {copy.nav.map((item, index) => (
              <Link
                key={pagePaths[index]}
                href={pagePaths[index]}
                aria-current={pageIndex[page] === index ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="mobile-header-actions">
              <Link className="button button--urgent" href="/get-help" onClick={() => setMenuOpen(false)}>
                {copy.emergency}
              </Link>
            </div>
          </nav>
          <div className="header-actions">
            <label className="language-picker">
              <span className="visually-hidden">{copy.languageLabel}</span>
              <select
                value={language}
                onChange={(event) => {
                  const selected = languages.find((code) => code === event.target.value);
                  if (selected) saveLanguage(selected);
                }}
              >
                {languages.map((code) => (
                  <option value={code} key={code}>{content[code].name}</option>
                ))}
              </select>
            </label>
            <Link className="button button--urgent" href="/get-help">{copy.emergency}</Link>
          </div>
        </div>
      </header>

      {menuOpen && (
        <button
          className="menu-backdrop"
          type="button"
          aria-label={copy.menuClose}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {page !== "home" && <PageIntro eyebrow={copy.eyebrow} title={pageTitle} description={pageDescription(page, copy)} />}

      {page === "home" && <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{copy.eyebrow}</p>
            <h1>{copy.title}</h1>
            <p className="hero-description">{copy.intro}</p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/get-help">{copy.primary}<span aria-hidden="true">↗</span></Link>
              <Link className="button button--plain" href="/about">{copy.secondary}<span aria-hidden="true">→</span></Link>
            </div>
            <p className="hero-footnote"><span aria-hidden="true">✓</span> {copy.trust}</p>
          </div>
          <div className="hero-panel" aria-label={copy.heroNote}>
            <div className="hero-panel-top">
              <span className="panel-overline">{copy.heroNote}</span>
              <span className="panel-dot" aria-hidden="true" />
            </div>
            <div className="panel-message">
              <span className="panel-index">01 / 03</span>
              <p>{copy.steps[0][1]}</p>
            </div>
            <div className="panel-divider" />
            <div className="panel-bottom">
              <span className="panel-initials" aria-hidden="true">C</span>
              <span className="panel-caption">CAF<br />{copy.footerTagline}</span>
              <span className="panel-arrow" aria-hidden="true">↗</span>
            </div>
            <span className="panel-decoration" aria-hidden="true">C</span>
          </div>
        </div>
      </section>}

      {(page === "home" || page === "information") && <section className="help-section section-pad">
        <div className="container">
          {page === "home" && <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />{copy.eyebrow}</p>
              <h2>{copy.helpTitle}</h2>
            </div>
            <p className="section-intro">{copy.helpIntro}</p>
          </div>}
          <div className="services-grid">
            {copy.services.slice(0, page === "home" ? 3 : undefined).map(([title, description], index) => (
              <article className="service-card" key={title}>
                <span className="service-number">{serviceNumbers[index]}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="card-link" href="/get-help" aria-label={`${title} — ${copy.primary}`}>
                  <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
          </div>
          {page === "home" && <Link className="text-link help-link" href="/information">{copy.allHelp}<span aria-hidden="true"> →</span></Link>}
        </div>
      </section>}

      {page === "get-help" && <section className="process-section section-pad">
        <div className="container">
          <div className="process-heading">
            <p className="eyebrow eyebrow--light"><span className="eyebrow-line" />{copy.eyebrow}</p>
            <h2>{copy.processTitle}</h2>
          </div>
          <div className="steps-grid">
            {copy.steps.map(([title, description], index) => (
              <article className="step-card" key={title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>}

      {page === "get-help" && <section className="help-guidance section-pad">
        <div className="container guidance-layout">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" />{copy.emergency}</p>
            <h2>{copy.contactTitle}</h2>
            <p>{copy.contactNote}</p>
          </div>
          <Link className="button button--primary" href="/contacts">{copy.primary}<span aria-hidden="true">↗</span></Link>
        </div>
      </section>}

      {page === "about" && <section className="about-section section-pad">
        <div className="container about-layout">
          <div className="about-stamp" aria-hidden="true">
            <span className="stamp-letter">S</span>
            <span className="stamp-caption">PEOPLE<br />FIRST</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow"><span className="eyebrow-line" />{copy.aboutLabel}</p>
            <h2>{copy.aboutTitle}</h2>
            <p>{copy.aboutText}</p>
            <Link className="text-link" href="/get-help">{copy.aboutLink}<span aria-hidden="true"> →</span></Link>
          </div>
        </div>
      </section>}

      {page === "about" && <section className="about-details section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />{copy.aboutLabel}</p>
              <h2>{copy.aboutDetails[0][0]}</h2>
            </div>
            <p className="section-intro">{copy.aboutDetails[0][1]}</p>
          </div>
          <div className="about-documents">
            <h3>{copy.aboutDetails[1][0]}</h3>
            <p>{copy.aboutDetails[1][1]}</p>
            <p className="about-detail-note">{copy.contributeNote}</p>
          </div>
        </div>
      </section>}

      {page === "support" && <section className="contribute-section section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" />{copy.nav[4]}</p>
              <h2>{copy.contributeTitle}</h2>
            </div>
            <p className="section-intro">{copy.contributeIntro}</p>
          </div>
          <div className="contribute-grid">
            {copy.contributeCards.map(([title, description], index) => (
              <article className="contribute-card" key={title}>
                <span className="service-number">{serviceNumbers[index]}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <Link className="text-link" href="/contacts">{copy.contributeAction}<span aria-hidden="true"> →</span></Link>
              </article>
            ))}
          </div>
          <p className="contribute-note">{copy.contributeNote}</p>
        </div>
      </section>}

      {page === "contacts" && <section className="contact-section section-pad">
        <div className="container contact-layout">
          <div className="contact-copy">
            <p className="eyebrow eyebrow--light"><span className="eyebrow-line" />{copy.contactLabel}</p>
            <h2>{copy.contactTitle}</h2>
            <p className="contact-intro">{copy.contactText}</p>
            <p className="contact-note">{copy.contactNote}</p>
          </div>
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              setFormMessage(copy.formResult);
            }}
          >
            <h3>{copy.formTitle}</h3>
            <p className="form-description">{copy.formText}</p>
            <div className="form-fields-grid">
              <label>
                <span>{copy.nameField}</span>
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                <span>{copy.contactField}</span>
                <input type="text" name="contact" autoComplete="tel" required />
              </label>
            </div>
            <label>
              <span>{copy.messageField}</span>
              <textarea name="message" rows={5} required />
            </label>
            <label className="consent-label">
              <input type="checkbox" name="consent" required />
              <span>{copy.consent}</span>
            </label>
            <p className="form-warning">{copy.formWarning}</p>
            <button className="button button--primary form-submit" type="submit">{copy.submit}<span aria-hidden="true">↗</span></button>
            {formMessage && <p className="form-result" role="status">{formMessage}</p>}
          </form>
        </div>
      </section>}

      <footer className="site-footer">
        <div className="container footer-inner">
          <Link className="brand brand--footer" href="/">
            <span className="brand-mark" aria-hidden="true">
              <Image
                className="brand-logo"
                src="/logotype/CAF-logotype.svg"
                alt=""
                width={40}
                height={30}
              />
            </span>
            <span className="brand-name">CAF</span>
          </Link>
          <p>{copy.footerTagline}</p>
          <span className="footer-legal">{copy.footerLegal}</span>
          <span className="copyright">© CAF</span>
        </div>
      </footer>
    </main>
  );
}

function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}

function pageDescription(page: SitePageKey, copy: (typeof content)[Language]) {
  switch (page) {
    case "home":
      return copy.intro;
    case "about":
      return copy.aboutText;
    case "information":
      return copy.helpIntro;
    case "get-help":
    case "contacts":
      return copy.contactText;
    case "support":
      return copy.contributeIntro;
  }
}
