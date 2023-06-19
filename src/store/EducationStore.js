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
                        duration: 31,
                        title: "Сведение ордеров",
                        progress: 0,
                        url: "https://download1486.mediafire.com/zcxgtfs98b2gkGFJ-CLo8MXVuuHTj0zwbyabchyONfsDEgnP6z3rZ3CP7lZrqg0RxU2hEbXL6QzI_M2Qu8_FXGZ6QNKvnCqluE2hvPAffWE0Hw_aYtWdhwG2uWyAvVe-1N7aqiYIZtT9aiYmwiWawFtArjtViBPq4goJ2-ekTkbs6Q/2qyhtmkccq5rje7/1.1.mp4",
                        description:
                            "Преимущество крупного капитала на финансовых рынках.Механика рыночных колебаний и сведение ордеров.Лента и стакан как элемент сырой биржевой информации.Принцип двойного аукциона на финансовых рынках.",
                    },
                    {
                        id: 2,
                        duration: 15,
                        title: "Анализ рынков",
                        progress: 0,
                        url: "https://download1532.mediafire.com/76gdkfwlpqdgnPvhKWJjsVZxo4PaiRtCw27Z3zDw9SvTMULjIREVdNo89XyGvqcO6vhwVoeApSlgBqhQ-wWYQS-_WoA9KBg-EWvfiNADOedW0JOR-GIs6YTTaCJ6JKx2FbHw_ZX4jMt17u0bb38gxCiiajABn6PN4pGqP8RLD5lA5A/yjilb8audyh2rvi/1.2.mp4",
                        description:
                            "Новости как элемент неэффективного восприятия рынка.Тонкости фундаментального и технического анализа.Три измерения трейдинга",
                    },
                    {
                        id: 3,
                        duration: 16,
                        title: "Движение цены",
                        progress: 0,
                        url: "https://download844.mediafire.com/shvhzoby9ougNft_Th46yUdeHcvNiCwCzvDSOJkywRk1MnnPMIB4UQ70b41WOztuU4A2fRE6pyj1WH2NMVW9j6t5d9-KjuUONy17dIR4DAG7x4yWHM_FoWWib415TbLQkYhQtCmbCCiclhbQejhUi59AUbCY6XfRh0LsQT7YubbVhQ/0tp70syvclk4elz/1.3.mp4",
                        description:
                            "Цена и типы отображения.Логика формирования отдельной свечи.Статистика из исследования о свечных формациях.Фазы рынка и правила их чередования.Swing High & Swing Low. Углубленное понятие экстремума.Wyckoff Conception: Market Phases.",
                    },
                    {
                        id: 4,
                        duration: 24,
                        title: "Флет",
                        progress: 0,
                        url: "https://download1648.mediafire.com/ifih44a4szlgDCHGdX0DkUbFNXVhsxsLNXDgGm47Y-HyxwqvprSSiLyJSdd5qnUgrKkAfq3l8vUs6UyDoaO8gxXTfDG_Bt9sOZfwU0rAb2YK3p7q-EKmlGTHiOFZYr46m3oZBZvsjbxgzsKUKXhWek3gtrb2ZHtNgf110k5gPPxqug/v4q8xzs2fhff2vt/1.4.mp4",
                        description:
                            "Волатильность.Принцип сужения/расширение.Инструменты оценки волатильности.Логика образования флетов, глубинный смысл фазы.Методика Locked in Range.Переосмысление Locked in Range by Crypto Mentors.Манипуляции во флете как элемент теста ликвидности за границами справедливой стоимости инструмента.2 структуры выхода из диапазона: импульсный или через останавливающий объём Wyckoff Schematic.",
                    },
                    {
                        id: 5,
                        duration: 27,
                        title: "Тренд",
                        progress: 0,
                        url: "https://download1522.mediafire.com/bl7gx2exmbigyvmbapBy3tNX2aIFifz4ZOoyJt0qa_cgslrc3WLuv4c9A9Aa8HBxK3a4gWGm5B8Jvr4QcuVKqARrSOnJDIyMgfdEmtHHbDJJugkyVURHuWTG8ZoE742FGx4BUsNh4LIf-obgoQTY77Xti_dO7W-gM3Tq4EnymLcJ2w/zfwrbkuezcv43x1/1.5.mp4",
                        description:
                            "Принцип движения и структура тренда.Логика образования тренда, глубинный смысл фазы.Market Structure.Построение первостепенных трендовых линий.Reversal Trendlines, Trend Channels.Трендовая “перекупленность” и “перепроданность” по методу VSA.Расширение диапазона с тестом ликвидности.3 типа разворота тренда: Break of Market Structure (bos), cложный откат, через проторговку.",
                    },
                    {
                        id: 6,
                        duration: 36,
                        title: "Price Action",
                        progress: 0,
                        url: "https://download1478.mediafire.com/sx3db371ms6gwB2b69i-lifRYAuonv07SoV1uym-QcAouMVAKGs-V9PAoamryeisHYyFhvDf_DBgllQs7SfOGjeiT1rbMXJODre4MrN98ciZl85OeX2zy7KzlQH0wk4v0PAK_OkqA8tS4hOjMd2e0nzuXgO7zZqorPXiPWU5Ge2org/chmj2o0idap68w9/1.6.mp4",
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
                        duration: 6,
                        title: "Объёмы как основной элемент движения рынка",
                        progress: 0,
                        url: "https://download857.mediafire.com/eia2l1q0h4dgckKABfXeiFAXEog1IPemZZq9fssFYjIIvbszjQQ-R5PbetTJpj0MuqMIJDx11z70v8w4O1kUhE1XjQiTYBmD_Y_8_sInDPgiJ7SclLqR8Wv7aRor6kMEngOZqm6lnbkqzqhRr75mrsW2WPjjFQ2ZVLZMfRGJ_Pt56g/kzirl3z81b7qhto/2.7.mp4",
                        description:
                            "Первичное знакомство с вертикальным и горизонтальным объёмом.",
                    },
                    {
                        id: 8,
                        duration: 17,
                        title: "Побарный анализ. Часть №1",
                        progress: 0,
                        url: "https://download1514.mediafire.com/l6mwa1o3icigYMpnRTWHJf6atg1C3XCTugZcuI72RhaaGa0SZzVTz6tusqRPNom4SKDbV2Q3WCNwRcRe2NnYWHmniZwdlnnzeZUkfeqhzOQh197lJV34FUxY2BMhbyIyq3fqH0Own-2qcbCyUGApFZgbJ_VmW6n4b-gzWz0xgZzLQg/vi5zsb4dji951l5/2.8.mp4",
                        description:
                            "Все пункты побарного анализа со ссылкой на первоисточники.Размер бара (спред) как показатель силы стороны.Типы закрытия бара как показатель динамики.",
                    },
                    {
                        id: 9,
                        duration: 14,
                        title: "Побарный анализ. Часть №2",
                        progress: 0,
                        url: "https://download1483.mediafire.com/4nfe18xroq2giDR3nXxQxa7SAo7hZKWsenoHsOXyUaL059uImb3p_Q9hoiR3_2ZuKrSQXoACeqUY7L2nwUa3TbuG-ufKVGY_0P0fMCet8GtO58F6Wj-Lqu3XT5tGpMaxC2ADQuZQ97oGjWRkyHwVXYqWRUiBrP2MIY9WfgeXRs6vfQ/r13jel0y2uipzv1/2.9.mp4",
                        description:
                            "Вертикальная гистограмма объёма.Сопоставление усилия и результата.",
                    },
                    {
                        id: 10,
                        duration: 17,
                        title: "Побарный анализ. Часть №3",
                        progress: 0,
                        url: "https://download1647.mediafire.com/j3jci5mp0llg2czDgh6Dr-kiUvG6qucUmd5Myqzy1cPOY68Z3iqSCAmh51z8aRrjOuaE4E8LYbJKO5xxMp_bIh0iRU6KAP1NYkZBcWL_zNJsguovmtJPO5IqI9SlumWfs86yJkX3lHVL9-VLD6iSbvS7ocMeYYs7JBuRKeSuCdOmZg/u2ipbqf37jy0dxb/2.10.mp4",
                        description:
                            "Прогресс движения (от горизонтали, сравнение волн, сопоставление сторон).Результат пробоя - наличие инициативы захвата невыгодных ценовых отметок.",
                    },
                    {
                        id: 11,
                        duration: 17,
                        title: "Побарный анализ. Часть №4",
                        progress: 0,
                        url: "https://download1590.mediafire.com/b9ec0eve92agnqcYSZ0EZdG2ZAURFv0D875HHcAUXNOOkMpSGNj-p_NqMc27IagBkoFJyBMmDDWM5K8MOKPVkoqCAokZRTlonP5FOotxWcHgK-NydpYP04dCnfsXnd1gdvOJkgXMp7oVkqfiE1I0Rgfg0bnDcnsEXg7RQMiR43XFQA/8tgc78pdljt6bj9/2.11.mp4",
                        description: "Тени баров (хвосты).Возобновляемость цены.",
                    },
                    {
                        id: 12,
                        duration: 22,
                        title: "Уровни",
                        progress: 0,
                        url: "https://download1484.mediafire.com/d3tizbh9yuzgBoTPBuZsmppBgP4_RXyxbOzrssHvaoNjeyg9je81v9ckWiofx5fHhPqI0-l09MMj4kr5DI71SsdGDlcZm4nrCb_5rGiGogs8MrBsfwcQ9NVj_sHiTt1YbevbSHboOI7OrhgrlhSre1I7TwCZxLClJNAwJDnRwS72ZA/rw2tt1jpitqxyvn/2.12.mp4",
                        description:
                            "Правила формирования самых сильных уровней.Школы построения уровней.Уровень излома тренда (с проторговкой и без).Зеркальные ценовые уровни.Взаимодействие цены и горизонтального уровня.Ценовое паттерны перед пробоем уровня.Влияние вертикального объёма на силу уровня.Liquidity Pools: Equal Highs, Equal Lows.",
                    },
                    {
                        id: 13,
                        duration: 9,
                        title: "Индикаторы",
                        progress: 0,
                        url: "https://download843.mediafire.com/5xyqoorlipughnXLlcgj-37M02uKmt_hGgKoTYi7MDrNXM7SdhXQLz3ryOsRinzATXlBw1579k68izdC6QSC55b5AzZRfq2dv0D-NUjj_d68o6P2bxvKZhIZqzEd1_8BYSu0OGkzYYykqbZU1LWnoA9tgMeVYZ4wKsU9ga97jn87ZQ/p6kmxtyl47waph1/2.13.mp4",
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
                        duration: 6,
                        title: "Прямая биржевая информация/ Order Flow",
                        progress: 0,
                        url: "https://download1488.mediafire.com/0tvefi47raeg-AS0QZotS0wsmxB6ANMYK7CR0BgWb6dwqhPkBbExFX4BlWjJ2FZEOH0D4NGJBDzyh6oEyuA1doYVYcHNaiIM2UEf9m-8AedAYxaUvXRbdZSBUgQ5cKO60CJ5-SU7IcCrZgaaeZ6ygrKnGay4T8Gr1Z3GrbqcJSRkiQ/vjnhi5dskd03z71/3.14.mp4",
                        description:
                            "Ключевая информация из стакана и ленты.Извлечение информации из потока сделок.",
                    },
                    {
                        id: 15,
                        duration: 35,
                        title: "Кластерный анализ",
                        progress: 0,
                        url: "https://download1518.mediafire.com/7tusdipxahugBldq6YNAk4syOKamBnBbkGhzVBuBNAr_HracsigtPdhGffvzSl4hkQrwH5eXsYtfSa8j83n7uaz1CUD5ZZTuotsVXYFt9qTzSKvkkGAGs6eDPKnjaG-WlKZY2MBnP35YsUiTxpHGuxxnmpuDGJ0AwanYtZgr7u2l_Q/j7xk89jew68swg7/3.15.mp4",
                        description:
                            "Кластерный анализ как аналог инсайдерской торговли.Настройка кластеров.",
                    },
                    {
                        id: 16,
                        duration: 34,
                        title: "Формации кластерного анализа",
                        progress: 0,
                        url: "https://download1508.mediafire.com/g52mpnrpvyxgxtYTfj-i6vRLPlNGGAsXrfMdGK9z0wL8LmXRni4LTL_oBdHL8Cuu0ut6dr0E7dRUwGGf0l3UVTw_9UsV6OTfa9sdFRrvrhNYolGiHplQas1jQsSVJX_yaQEXU_6lnIyPkoywgMnab7gyMnqpkDT3bpFtzrlWt4qdTg/fwysh8qlhzqmx6l/3.16.mp4",
                        description:
                            "Позиционирование кластерных фильтраций.Паттерн «Фиксинг».Самые эффективные формации и правила работы с ними.",
                    },
                    {
                        id: 17,
                        duration: 18,
                        title: "Дельта",
                        progress: 0,
                        url: "https://download1650.mediafire.com/tzp8jbg27ugg-HYZTYQK5p8spuMkcmjnztDVkDhqNJ3PjIlunKJg7LoLYydUQuSmUF9XOqgO1dzXfh4V_JFvd0TCAykOxqicfqZRDL44L4lpJRRdlVLXwF-DFKDh2iNQ4vii9e9DKjBmkxcJ25tsljaxNnymYhiUB1zDSCA7XA1q0w/z3rd2dy8qe4fuk8/3.17.mp4",
                        description:
                            "Операционализация понятия и логика построения.Практическое применение столбиковой дельты для оценки контроля.",
                    },
                    {
                        id: 18,
                        duration: 15,
                        title: "Кумулятивная дельта",
                        progress: 0,
                        url: "https://download937.mediafire.com/6oe3tyh9c1ngGs5ig2f0QD_1infRA7ombzU9rXWS8RU56DeT98CJOf0faKYJSqcMjXKaS1jou8VR2t_L8xpesYcMbVl4KPPBqZTtjBMpTPZfjbRvnCSInbxVJcsWuLqPG8lATauk-QRHMkGUJWI5aCdCAciR53ZsLRIEgQEWXquVJA/0jz39qo4zt5cemw/3.18.mp4",
                        description:
                            "Принципы формирования и особенности отображения.Оценка агрессора в балансовых структурах.Дивергенции по кумулятивной дельте.",
                    },
                    {
                        id: 19,
                        duration: 19,
                        title: "Дельта: рыночная неэффективность",
                        progress: 0,
                        url: "https://download1980.mediafire.com/oayby1p2lmzgA1S0wrbskL_26wPXEyrCLLr1tDL3t7GLbbooBHohr6fYAPvXGHS5xXtlRakAOfHhLmFDxu-kqYn4F-0S6FigJq2F0X4slO3FD8vZjVXn6DCB_1lVOvh-n0xfNB7FZTUNORk6b9jBRUBKHL3DGnfno3_VdOA00J81zA/6zinc1efw08f2yn/3.19.mp4",
                        description:
                            "Логика появления нерезультативного агрессора.Инструменты поиска неэффективности.Интерпретация и практическое применение.",
                    },
                    {
                        id: 20,
                        duration: 26,
                        title: "Volume Profile",
                        progress: 0,
                        url: "https://download1349.mediafire.com/fhpedxnn2wygCD_NlxJqCKCTZ73qwpFan4hI4enA5l12eSwthcvYZxbH0aDREkYc3apUnS9_N8DkcQ5sTqcff6BbJa-91t6_V-5UuwC9kqm-C3uvE0qgO3urGcGoWF1OEuduQ9XRa5D1WbAU3SE6ilho_6HlctkYQIiJgfpaKFgTBQ/voyzeekedfarml2/3.20.mp4",
                        description:
                            "Что такое горизонтальный объём.Принципы построения Volume Profile.Важные элементы профиля.Взаимосвязь с теорией двойного аукциона.Анализ профилей с привязкой к временным периодам.Подтверждение фазы рынка при помощи POC и VA.",
                    },
                    {
                        id: 21,
                        duration: 22,
                        title: "Гибкий Volume Profile",
                        progress: 0,
                        url: "https://download1479.mediafire.com/2lotwmeew1fggHgt_y_WHnOqKT4_fy8Czcj7FFSNJzHrD_5QcshpHyDijy0ITgxfVKRkc_lVr9FrxvDXbcHFYRnKE1hJR59zKOJgRDJEoSvKMtbeyhGzkowKo1RryQFR3hG_JaDr95bAN3wwhSwpar2mi7O5LYV9JefQZfDlmvpj1Q/40onnca8te8kuza/3.21.mp4",
                        description:
                            "Принципы построения кастомных профилей.Интерпретация данных в зависимости от рыночной структуры.Нахождение объемных уровней крупных игроков.",
                    },
                    {
                        id: 22,
                        duration: 30,
                        title: "Системы координат",
                        progress: 0,
                        url: "https://download1594.mediafire.com/wo7pqhh8nl1gsBLosXkcJybdRAOMhJkycC6x7eDZrZPEr2ZwPsGHPc_7-s3HveNA2lKmaJwq9bAtsw9Ij_EsTRgqL_BK94qkuEQSFLlcBWNrwmG_FpYHxm9faEjUNdbT4yZ5QSZ9PGfHl9ega-B4IYkpyF5uIPTE_FI5LucbT0yjQQ/soun45tg9r4bpm7/3.22.mp4",
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
                        duration: 11,
                        title: "Сетапы на вход: смена чередования экстремумов",
                        progress: 0,
                        url: "https://download1530.mediafire.com/j1ciucfr0t3gI6MZ1QuHn6PB4uCJ5ULfchaBTEebzgjVvtT1wYoGg0kKQGsWkE-jEiA8FVYbn25IXkp5fXhQOGuFhmO9l2LTnJrVm03B2lnIDe4PXwVI1lDWq6Kc1pUoIYtzzyhtlWrIPw2XcvYLLiMNlH7xC-S8hzSvPqneEM_DqA/kswqvgzekqdp1v5/4.23.mp4",
                        description: "",
                    },
                    {
                        id: 24,
                        duration: 18,
                        title: "Сетапы на вход: тест накопления",
                        progress: 0,
                        url: "https://download1655.mediafire.com/g2k0s93g740g2gxskDkpt_Hl0FjOjicfVQiNdZFfUt5ezeJ5UdmjoXq8LW1nypnTbqPuYjy4NUvv0jovoB7its7Qgc7HCtJSVpMvvSYNrmArFrV6jSPtQsnC8V6bsEOAKNqsA58CuiNGPBpWbLnQppKM4u_BKV8LwB5YiHMLVMcYXg/nc07c1cm3i2fpxn/4.24.mp4",
                        description: "",
                    },
                    {
                        id: 25,
                        duration: 14,
                        title: "Сетапы на вход: пробой и ложный пробой",
                        progress: 0,
                        url: "https://download1474.mediafire.com/mvpc83h4rxzgFhN9jmTs7TZurAZSWRKoBekYj5ppRiVGIm1ulmIjx-VDp9cbH1eO8wYmPNB3EEOvd6zH5P1avbpFIIzBEWaH-q6HbnhkgldphgBTaTkpRiyDOxnzPXwfXoQFZHY3zBn7BrbB6JJJuor-LMMmHleolYWWsxhMX7lrWQ/k7xj7mvp359m7hc/4.25.mp4",
                        description: "",
                    },
                    {
                        id: 26,
                        duration: 26,
                        title: "Точки входа",
                        progress: 0,
                        url: "https://download1527.mediafire.com/eaa13vjb223g7FNSxZ6GqbuOl_oGCed4z24euqUmyF56oS3i-VrU6IwHIJvJWI-DfGQPO4g71ksEW66pv8HcvYoQkXKPR30Cx-FAPvpXGoM_4ybv4D_KLrPH5jGGAt25S3eVbhtFY-DW0HwikuQfQ_mGvSqXJZ-6kfb37EH4kyhA_w/38qyhbpeqvblcwy/4.26.mp4",
                        description:
                            "Footprint.Использование данных с Footprint как наиболее эффективный способ входа в сделку.Секрет идеальных точек входа.",
                    },
                    {
                        id: 27,
                        duration: 23,
                        title: "Готовый алгоритм",
                        progress: 0,
                        url: "https://download1530.mediafire.com/qcqw9iod23lgePQkXqn8Lc_2y72vQTv6DiUzNlCFLudCMb4RqHLw_wwGIAqAPfQFLRo6uWfGUWkJwq6K0Nhucky7mypQlZCkVBzg24kDLYdL6ZJNwhwLuAwJltOaUlAtGlVWI0y1pS20s8GvoA8cPVvd0dHzdoM3wfmEWoF947JFqw/bnuqin1pnu3xekx/4.27.mp4",
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
                        duration: 13,
                        title: "Risk Management",
                        progress: 0,
                        url: "https://download844.mediafire.com/dw7fyz5h7l8g2XCc2wQ5DSlInVN1dqFfnCfMbmyl_ZfwFlbnFdzsO_9mqGZqafNrDTU6vEsuA3d-bnxicTbrwcC404PclMRyuUDGMf_G2vd4hnKB6sUrXkbo1qWTWu7yCXSa_AJfnWdPjsjov2zQnh4QiJgLtwJsxyHaXypOUCkX_A/4hcij23189vhh8c/4.28.mp4",
                        description:
                            "Правильный расчет нагрузки на стоп.Понятие Risk/Reward.Долгосрочное управление капиталом.Генератор Монте-Карло.",
                    },
                    {
                        id: 29,
                        duration: 2,
                        title: "Управление позицией",
                        progress: 0,
                        url: "https://download855.mediafire.com/y10ju57hu41g5poQIsGdN25RNLfdQkVzkaZztNl7cMKu3iyXZ2Br__19tmrK_okFqAgBgrrFEbD3F5l7yLbTZ4isdk89v4YiqOPs7bpnzrnOBdxneM9-cmoVbv-faKh4GYV_PwD3seUMwNbp-O0GLWugplBaKreZ_PtxNZrP2S1xxg/rejln3ejxsvaybm/5.29.mp4",
                        description: "3 типа управления открытой позицией.",
                    },
                    {
                        id: 30,
                        duration: 7,
                        title: "Перед началом",
                        progress: 0,
                        url: "https://download946.mediafire.com/djcesddqtkzg0v40MrEIh5WmllQLiI99Y66tA9-b_Y_Ylx3SCtl5O6RcWgnRngQ0DABZY0WkjflSxBhj5Fnz4TfOqFAYGJRL2aJZNYVR9EV01zrlwxbFB4CfKceviNF732o3Vymln_v0GJEnNCKX2L-28VezLdjy6M5BydQewRP30g/6u12ptr2r5uqhux/5.30.mp4",
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