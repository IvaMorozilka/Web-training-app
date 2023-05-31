import {makeAutoObservable} from "mobx";

export default class EducationStore {
    constructor() {
        this._educationData = [
            {
                blockId: 1,
                blockTitle: "Анализ ценовых колебаний",
                blockProgress: 0,
                lessons: [
                    {
                        id: 1,
                        title: "Сведение ордеров",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Преимущество крупного капитала на финансовых рынках.Механика рыночных колебаний и сведение ордеров.Лента и стакан как элемент сырой биржевой информации.Принцип двойного аукциона на финансовых рынках.",
                    },
                    {
                        id: 2,
                        title: "Анализ рынков",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=Wy2-BaGMPHc",
                        description:
                            "Новости как элемент неэффективного восприятия рынка.Тонкости фундаментального и технического анализа.Три измерения трейдинга",
                    },
                    {
                        id: 3,
                        title: "Движение цены",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=Nq2sDZIvwDE",
                        description:
                            "Цена и типы отображения.Логика формирования отдельной свечи.Статистика из исследования о свечных формациях.Фазы рынка и правила их чередования.Swing High & Swing Low. Углубленное понятие экстремума.Wyckoff Conception: Market Phases.",
                    },
                    {
                        id: 4,
                        title: "Флет",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Волатильность.Принцип сужения/расширение.Инструменты оценки волатильности.Логика образования флетов, глубинный смысл фазы.Методика Locked in Range.Переосмысление Locked in Range by Crypto Mentors.Манипуляции во флете как элемент теста ликвидности за границами справедливой стоимости инструмента.2 структуры выхода из диапазона: импульсный или через останавливающий объём Wyckoff Schematic.",
                    },
                    {
                        id: 5,
                        title: "Тренд",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Принцип движения и структура тренда.Логика образования тренда, глубинный смысл фазы.Market Structure.Построение первостепенных трендовых линий.Reversal Trendlines, Trend Channels.Трендовая “перекупленность” и “перепроданность” по методу VSA.Расширение диапазона с тестом ликвидности.3 типа разворота тренда: Break of Market Structure (bos), cложный откат, через проторговку.",
                    },
                    {
                        id: 6,
                        title: "Price Action",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Контекст - Сетап - Сигнал (+ специализированная литература).Элемент методики: Углы атаки.Элемент методики: Моментум.Принцип завершения тренда: Ускорение и закругление тренда.Элемент методики: Проекция цены.Элемент методики: Глубина.Тормозные конструкции как показатель инициативы.Average Daily Range Блок.",
                    },
                ],
            },
            {
                blockId: 2,
                blockTitle: "Взаимосвязь объёма и цены",
                blockProgress: 0,
                lessons: [
                    {
                        id: 7,
                        title: "Объёмы как основной элемент движения рынка",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Первичное знакомство с вертикальным и горизонтальным объёмом.",
                    },
                    {
                        id: 8,
                        title: "Побарный анализ. Часть №1",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=Wy2-BaGMPHc",
                        description:
                            "Все пункты побарного анализа со ссылкой на первоисточники.Размер бара (спред) как показатель силы стороны.Типы закрытия бара как показатель динамики.",
                    },
                    {
                        id: 9,
                        title: "Побарный анализ. Часть №2",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=Nq2sDZIvwDE",
                        description:
                            "Вертикальная гистограмма объёма.Сопоставление усилия и результата.",
                    },
                    {
                        id: 10,
                        title: "Побарный анализ. Часть №3",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Прогресс движения (от горизонтали, сравнение волн, сопоставление сторон).Результат пробоя - наличие инициативы захвата невыгодных ценовых отметок.",
                    },
                    {
                        id: 11,
                        title: "Побарный анализ. Часть №4",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description: "Тени баров (хвосты).Возобновляемость цены.",
                    },
                    {
                        id: 12,
                        title: "Уровни",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Правила формирования самых сильных уровней.Школы построения уровней.Уровень излома тренда (с проторговкой и без).Зеркальные ценовые уровни.Взаимодействие цены и горизонтального уровня.Ценовое паттерны перед пробоем уровня.Влияние вертикального объёма на силу уровня.Liquidity Pools: Equal Highs, Equal Lows.",
                    },
                    {
                        id: 13,
                        title: "Индикаторы",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Правила применения индикаторов.Дивергенции.Бонусный урок. Полезные ресурсы.Полезные источники информации для криптотрейдера.",
                    },
                ],
            },
            {
                blockId: 3,
                blockTitle: "Продвинутые методики объемного анализа и OrderFlow",
                blockProgress: 0,
                lessons: [
                    {
                        id: 14,
                        title: "Прямая биржевая информация/ Order Flow",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Ключевая информация из стакана и ленты.Извлечение информации из потока сделок.",
                    },
                    {
                        id: 15,
                        title: "Кластерный анализ",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Кластерный анализ как аналог инсайдерской торговли.Настройка кластеров.",
                    },
                    {
                        id: 16,
                        title: "Формации кластерного анализа",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Позиционирование кластерных фильтраций.Паттерн «Фиксинг».Самые эффективные формации и правила работы с ними.",
                    },
                    {
                        id: 17,
                        title: "Дельта",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Операционализация понятия и логика построения.Практическое применение столбиковой дельты для оценки контроля.",
                    },
                    {
                        id: 18,
                        title: "Кумулятивная дельта",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Принципы формирования и особенности отображения.Оценка агрессора в балансовых структурах.Дивергенции по кумулятивной дельте.",
                    },
                    {
                        id: 19,
                        title: "Дельта: рыночная неэффективность",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Логика появления нерезультативного агрессора.Инструменты поиска неэффективности.Интерпретация и практическое применение.",
                    },
                    {
                        id: 20,
                        title: "Volume Profile",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Что такое горизонтальный объём.Принципы построения Volume Profile.Важные элементы профиля.Взаимосвязь с теорией двойного аукциона.Анализ профилей с привязкой к временным периодам.Подтверждение фазы рынка при помощи POC и VA.",
                    },
                    {
                        id: 21,
                        title: "Гибкий Volume Profile",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Принципы построения кастомных профилей.Интерпретация данных в зависимости от рыночной структуры.Нахождение объемных уровней крупных игроков.",
                    },
                    {
                        id: 22,
                        title: "Системы координат",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Принципы построения кастомных профилей.Интерпретация данных в зависимости от рыночной структуры.Нахождение объемных уровней крупных игроков.",
                    },
                ],
            },
            {
                blockId: 4,
                blockTitle: "Анализ ценовых колебаний",
                blockProgress: 0,
                lessons: [
                    {
                        id: 23,
                        title: "Сетапы на вход: смена чередования экстремумов",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "",
                    },
                    {
                        id: 24,
                        title: "Сетапы на вход: тест накопления",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "",
                    },
                    {
                        id: 25,
                        title: "Сетапы на вход: пробой и ложный пробой",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "",
                    },
                    {
                        id: 26,
                        title: "Точки входа",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Footprint.Использование данных с Footprint как наиболее эффективный способ входа в сделку.Секрет идеальных точек входа.",
                    },
                    {
                        id: 27,
                        title: "Готовый алгоритм",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Пошаговый алгоритм от открытия графика до точки входа.",
                    },
                ],
            },
            {
                blockId: 5,
                blockTitle: "Анализ ценовых колебаний",
                blockProgress: 0,
                lessons: [
                    {
                        id: 28,
                        title: "Risk Management",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Правильный расчет нагрузки на стоп.Понятие Risk/Reward.Долгосрочное управление капиталом.Генератор Монте-Карло.",
                    },
                    {
                        id: 29,
                        title: "Управление позицией",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "3 типа управления открытой позицией.",
                    },
                    {
                        id: 30,
                        title: "Перед началом",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Журнал сделок с Notion.Журнал торговых возможностей.Создание торгового плана на день.Алгоритм бэктеста.",
                    },
                ],
            },
        ];
        this._currentLesson = {};
        makeAutoObservable(this);
    }

    get educationData() {
        return this._educationData;
    }

    get currentUrl() {
        return this._currentLesson.url;
    }

    get currentLesson() {
        return this._currentLesson;
    }

    get currentLessonDescription() {
        console.log(this._currentLesson.description);
        return this._currentLesson.description;
    }

    setEducationData(value) {
        this._educationData = value;
    }

    setCurrentLesson(lesson) {
        this._currentLesson = lesson;
    }
}