export type NewsLanguage = "ru" | "uz" | "tg" | "ky" | "en";

type NewsTranslation = Record<NewsLanguage, string>;

type TestNewsItem = {
  id: string;
  publishedAt: string;
  date: NewsTranslation;
  category: NewsTranslation;
  title: NewsTranslation;
  excerpt: NewsTranslation;
};

export const testNews: TestNewsItem[] = [
  {
    id: "consultation-checklist",
    publishedAt: "2026-10-15",
    date: {
      ru: "15 октября 2026",
      uz: "2026-yil 15-oktabr",
      tg: "15 октябри 2026",
      ky: "2026-жылдын 15-октябры",
      en: "October 15, 2026",
    },
    category: {
      ru: "Правовая помощь",
      uz: "Huquqiy yordam",
      tg: "Кумаки ҳуқуқӣ",
      ky: "Укуктук жардам",
      en: "Legal support",
    },
    title: {
      ru: "Как подготовиться к консультации",
      uz: "Maslahatga qanday tayyorlanish kerak",
      tg: "Чӣ гуна ба машварат омода шудан лозим аст",
      ky: "Кеңеш алууга кантип даярдануу керек",
      en: "How to prepare for a consultation",
    },
    excerpt: {
      ru: "Собрали простые рекомендации: что рассказать специалисту и какие вопросы задать.",
      uz: "Mutaxassisga nimalarni aytish va qanday savollar berish bo‘yicha tavsiyalar.",
      tg: "Тавсияҳои сода: ба мутахассис чиро гуфтан ва кадом саволҳоро додан лозим аст.",
      ky: "Адиске эмнени айтып, кандай суроолорду берүү керектиги боюнча кеңештер.",
      en: "A few simple tips on what to tell a specialist and which questions to ask.",
    },
  },
  {
    id: "safe-housing",
    publishedAt: "2026-10-08",
    date: {
      ru: "8 октября 2026",
      uz: "2026-yil 8-oktabr",
      tg: "8 октябри 2026",
      ky: "2026-жылдын 8-октябры",
      en: "October 8, 2026",
    },
    category: {
      ru: "Полезная информация",
      uz: "Foydali ma’lumot",
      tg: "Маълумоти муфид",
      ky: "Пайдалуу маалымат",
      en: "Useful information",
    },
    title: {
      ru: "На что обратить внимание при поиске жилья",
      uz: "Uy-joy izlashda nimalarga e’tibor berish kerak",
      tg: "Ҳангоми ҷустуҷӯи манзил ба чӣ диққат додан лозим аст",
      ky: "Турак жай издөөдө эмнелерге көңүл буруу керек",
      en: "What to look for when searching for housing",
    },
    excerpt: {
      ru: "Подготовили памятку о договорённостях с арендодателем и важных условиях проживания.",
      uz: "Uy egasi bilan kelishuv va yashash shartlari haqida qisqa qo‘llanma.",
      tg: "Ёддошти кӯтоҳ дар бораи мувофиқа бо соҳиби манзил ва шартҳои зист.",
      ky: "Үй ээси менен макулдашуу жана жашоо шарттары тууралуу кыскача эскертме.",
      en: "A short guide to arrangements with landlords and important housing conditions.",
    },
  },
  {
    id: "know-your-rights",
    publishedAt: "2026-10-01",
    date: {
      ru: "1 октября 2026",
      uz: "2026-yil 1-oktabr",
      tg: "1 октябри 2026",
      ky: "2026-жылдын 1-октябры",
      en: "October 1, 2026",
    },
    category: {
      ru: "Работа и зарплата",
      uz: "Ish va maosh",
      tg: "Кор ва маош",
      ky: "Жумуш жана айлык",
      en: "Work and pay",
    },
    title: {
      ru: "Если задерживают зарплату: с чего начать",
      uz: "Maosh kechiktirilsa: nimadan boshlash kerak",
      tg: "Ҳангоми таъхири маош аз чӣ оғоз кардан лозим аст",
      ky: "Айлык кечиксе: эмнеден баштоо керек",
      en: "If your wages are delayed: where to start",
    },
    excerpt: {
      ru: "Разбираем, какие сведения о работе стоит сохранить и куда обратиться за консультацией.",
      uz: "Ish haqidagi qaysi ma’lumotlarni saqlash va maslahat uchun qayerga murojaat qilishni ko‘rib chiqamiz.",
      tg: "Мефаҳмонем, ки кадом маълумоти кориро нигоҳ доштан ва барои машварат ба куҷо муроҷиат кардан лозим аст.",
      ky: "Жумуш тууралуу кайсы маалыматтарды сактоо жана кеңеш үчүн кайда кайрылуу керектигин карайбыз.",
      en: "A guide to what work-related information to keep and where to ask for advice.",
    },
  },
];
