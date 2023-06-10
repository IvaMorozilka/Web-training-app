import {makeAutoObservable} from "mobx";
import {isEmptyArray, isLastElementEqual} from "../utils/helpers";

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
                        duration: 28,
                        title: "Сведение ордеров",
                        progress: 0,
                        url: "https://youtu.be/z9TU--BE4vY",
                        description:
                            "Преимущество крупного капитала на финансовых рынках.Механика рыночных колебаний и сведение ордеров.Лента и стакан как элемент сырой биржевой информации.Принцип двойного аукциона на финансовых рынках.",
                    },
                    {
                        id: 2,
                        duration: 15,
                        title: "Анализ рынков",
                        progress: 0,
                        url: "https://download1532.mediafire.com/l7k1kbyaylcgxPBsXN_BLf-YhTQ3Nus8x2GlGh-BKASVVMx-d2BdboHzyTHenUc3IPwQv0Z4B8OyEBXgzfRUQTYSg_FkQa2Y8Vx_YbbQY_BbKnt-5iqLCK5LO0dg0FLsQNph2R7LUY-Mk6y6ZG5a-9Qo6K99RdHzpZ5-FHGRhoJVng/xreosjr31bubxgc/2.mp4",
                        description:
                            "Новости как элемент неэффективного восприятия рынка.Тонкости фундаментального и технического анализа.Три измерения трейдинга",
                    },
                    {
                        id: 3,
                        duration: 16,
                        title: "Движение цены",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=Nq2sDZIvwDE",
                        description:
                            "Цена и типы отображения.Логика формирования отдельной свечи.Статистика из исследования о свечных формациях.Фазы рынка и правила их чередования.Swing High & Swing Low. Углубленное понятие экстремума.Wyckoff Conception: Market Phases.",
                    },
                    {
                        id: 4,
                        duration: 24,
                        title: "Флет",
                        progress: 0,
                        url: "https://youtu.be/son0lkFs_PI",
                        description:
                            "Волатильность.Принцип сужения/расширение.Инструменты оценки волатильности.Логика образования флетов, глубинный смысл фазы.Методика Locked in Range.Переосмысление Locked in Range by Crypto Mentors.Манипуляции во флете как элемент теста ликвидности за границами справедливой стоимости инструмента.2 структуры выхода из диапазона: импульсный или через останавливающий объём Wyckoff Schematic.",
                    },
                    {
                        id: 5,
                        duration: 27,
                        title: "Тренд",
                        progress: 0,
                        url: "https://youtu.be/QRuE72MAcsw",
                        description:
                            "Принцип движения и структура тренда.Логика образования тренда, глубинный смысл фазы.Market Structure.Построение первостепенных трендовых линий.Reversal Trendlines, Trend Channels.Трендовая “перекупленность” и “перепроданность” по методу VSA.Расширение диапазона с тестом ликвидности.3 типа разворота тренда: Break of Market Structure (bos), cложный откат, через проторговку.",
                    },
                    {
                        id: 6,
                        duration: 35,
                        title: "Price Action",
                        progress: 0,
                        url: "https://youtu.be/8dGbs4Tu78s",
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
                        duration: 0,
                        title: "Объёмы как основной элемент движения рынка",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Первичное знакомство с вертикальным и горизонтальным объёмом.",
                    },
                    {
                        id: 8,
                        duration: 0,
                        title: "Побарный анализ. Часть №1",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=Wy2-BaGMPHc",
                        description:
                            "Все пункты побарного анализа со ссылкой на первоисточники.Размер бара (спред) как показатель силы стороны.Типы закрытия бара как показатель динамики.",
                    },
                    {
                        id: 9,
                        duration: 0,
                        title: "Побарный анализ. Часть №2",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=Nq2sDZIvwDE",
                        description:
                            "Вертикальная гистограмма объёма.Сопоставление усилия и результата.",
                    },
                    {
                        id: 10,
                        duration: 0,
                        title: "Побарный анализ. Часть №3",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Прогресс движения (от горизонтали, сравнение волн, сопоставление сторон).Результат пробоя - наличие инициативы захвата невыгодных ценовых отметок.",
                    },
                    {
                        id: 11,
                        duration: 0,
                        title: "Побарный анализ. Часть №4",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description: "Тени баров (хвосты).Возобновляемость цены.",
                    },
                    {
                        id: 12,
                        duration: 0,
                        title: "Уровни",
                        progress: 0,
                        url: "../blablabla.mp4",
                        description:
                            "Правила формирования самых сильных уровней.Школы построения уровней.Уровень излома тренда (с проторговкой и без).Зеркальные ценовые уровни.Взаимодействие цены и горизонтального уровня.Ценовое паттерны перед пробоем уровня.Влияние вертикального объёма на силу уровня.Liquidity Pools: Equal Highs, Equal Lows.",
                    },
                    {
                        id: 13,
                        duration: 0,
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
                        duration: 0,
                        title: "Прямая биржевая информация/ Order Flow",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Ключевая информация из стакана и ленты.Извлечение информации из потока сделок.",
                    },
                    {
                        id: 15,
                        duration: 0,
                        title: "Кластерный анализ",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Кластерный анализ как аналог инсайдерской торговли.Настройка кластеров.",
                    },
                    {
                        id: 16,
                        duration: 0,
                        title: "Формации кластерного анализа",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Позиционирование кластерных фильтраций.Паттерн «Фиксинг».Самые эффективные формации и правила работы с ними.",
                    },
                    {
                        id: 17,
                        duration: 0,
                        title: "Дельта",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Операционализация понятия и логика построения.Практическое применение столбиковой дельты для оценки контроля.",
                    },
                    {
                        id: 18,
                        duration: 0,
                        title: "Кумулятивная дельта",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Принципы формирования и особенности отображения.Оценка агрессора в балансовых структурах.Дивергенции по кумулятивной дельте.",
                    },
                    {
                        id: 19,
                        duration: 0,
                        title: "Дельта: рыночная неэффективность",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Логика появления нерезультативного агрессора.Инструменты поиска неэффективности.Интерпретация и практическое применение.",
                    },
                    {
                        id: 20,
                        duration: 0,
                        title: "Volume Profile",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Что такое горизонтальный объём.Принципы построения Volume Profile.Важные элементы профиля.Взаимосвязь с теорией двойного аукциона.Анализ профилей с привязкой к временным периодам.Подтверждение фазы рынка при помощи POC и VA.",
                    },
                    {
                        id: 21,
                        duration: 0,
                        title: "Гибкий Volume Profile",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Принципы построения кастомных профилей.Интерпретация данных в зависимости от рыночной структуры.Нахождение объемных уровней крупных игроков.",
                    },
                    {
                        id: 22,
                        duration: 0,
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
                blockTitle: "Формирование системы. С голого графика до точки входа",
                blockProgress: 0,
                lessons: [
                    {
                        id: 23,
                        duration: 0,
                        title: "Сетапы на вход: смена чередования экстремумов",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "",
                    },
                    {
                        id: 24,
                        duration: 0,
                        title: "Сетапы на вход: тест накопления",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "",
                    },
                    {
                        id: 25,
                        duration: 0,
                        title: "Сетапы на вход: пробой и ложный пробой",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "",
                    },
                    {
                        id: 26,
                        duration: 0,
                        title: "Точки входа",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Footprint.Использование данных с Footprint как наиболее эффективный способ входа в сделку.Секрет идеальных точек входа.",
                    },
                    {
                        id: 27,
                        duration: 0,
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
                blockTitle: "Менеджмент в трейдинге",
                blockProgress: 0,
                lessons: [
                    {
                        id: 28,
                        duration: 0,
                        title: "Risk Management",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Правильный расчет нагрузки на стоп.Понятие Risk/Reward.Долгосрочное управление капиталом.Генератор Монте-Карло.",
                    },
                    {
                        id: 29,
                        duration: 0,
                        title: "Управление позицией",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description: "3 типа управления открытой позицией.",
                    },
                    {
                        id: 30,
                        duration: 0,
                        title: "Перед началом",
                        progress: 0,
                        url: "https://www.youtube.com/watch?v=RGF2mC-o0rE",
                        description:
                            "Журнал сделок с Notion.Журнал торговых возможностей.Создание торгового плана на день.Алгоритм бэктеста.",
                    },
                ],
            },
        ];
        this._history = [];
        makeAutoObservable(this);
    }

    get history() {
        return this._history;
    }

    get educationData() {
        return this._educationData;
    }

    lastHistory(offset) {
        return isEmptyArray(this._history) || this._history.slice(offset - 1)[0];
    }

    addHistory(value) {
        if (isLastElementEqual(this._history, value)) return;
        this._history = [...this._history, value];
    }

    setEducationData(value) {
        this._educationData = value;
    }


    updateLessonProgress(id, progress) {
        const lessonMap = new Map();
        for (let i = 0; i < this._educationData.length; i++) {
            const block = this._educationData[i];
            for (let j = 0; j < block.lessons.length; j++) {
                const lesson = block.lessons[j];
                lessonMap.set(lesson.id, lesson);
            }
        }
        const lesson = lessonMap.get(id);
        if (lesson && lesson.progress < progress) {
            lesson.progress = progress;
        }
    }

    updateBlockProgress(lessonId) {
        // Находим блок, содержащий урок с lessonId
        const block = this._educationData.find((b) => b.lessons.some((l) => l.id === lessonId));
        // Если блок не найден, возвращаем false
        if (!block) {
            return false;
        }
        // Вычисляем общий прогресс блока
        const totalProgress = block.lessons.reduce((acc, lesson) => acc + lesson.progress, 0);
        // Обновляем поле blockProgress
        block.blockProgress = Math.round((totalProgress / (block.lessons.length * 100)) * 100);
        // Возвращаем true, чтобы показать, что блок был успешно обновлен
        return true;
    }
}