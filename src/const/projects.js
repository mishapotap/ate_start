import Languages from './languages';

const { projectsData, productsData } = Languages;

export const locations = [
    {
        id:          1,
        name:        'Область карты 1',
        coordinates: {
            x: 700,
            y: 480,
        },
    },
    {
        id:          2,
        name:        'Область карты 2',
        coordinates: {
            x: 420,
            y: 620,
        },
    },
    {
        id:          3,
        name:        'Область карты 3',
        coordinates: {
            x: 1450,
            y: 440,
        },
    },
    {
        id:          4,
        name:        'Область карты 4',
        coordinates: {
            x: 1090,
            y: 690,
        },
    },
];

export const locationsPoints = [
    {
        id:          1,
        locationId:  1,
        coordinates: {
            x: -854,
            y: 78,
        },
        rotate: -15,
    },
    {
        id:          2,
        locationId:  1,
        coordinates: {
            x: -716,
            y: 38,
        },
        rotate: -15,
    },
    {
        id:          3,
        locationId:  1,
        coordinates: {
            x: -787,
            y: 206,
        },
        rotate: -15,
    },
    {
        id:          4,
        locationId:  1,
        coordinates: {
            x: -619,
            y: -26,
        },
        rotate: -15,
    },
    {
        id:          5,
        locationId:  1,
        coordinates: {
            x: -757,
            y: -150,
        },
        rotate: -15,
    },
    {
        id:          6,
        locationId:  2,
        coordinates: {
            x: -493,
            y: 73,
        },
        rotate: -14,
    },
    {
        id:          7,
        locationId:  2,
        coordinates: {
            x: -331,
            y: -55,
        },
        rotate: -14,
    },
    {
        id:          8,
        locationId:  2,
        coordinates: {
            x: -125,
            y: -10,
        },
        rotate: -13,
    },
    {
        id:          9,
        locationId:  3,
        coordinates: {
            x: 219,
            y: 168,
        },
        rotate: 9,
    },
    {
        id:          10,
        locationId:  3,
        coordinates: {
            x: 285,
            y: 256,
        },
        rotate: 10,
    },
    {
        id:          11,
        locationId:  4,
        coordinates: {
            x: 582,
            y: 41,
        },
        rotate: 14,
    },
];

export const projects = [
    {
        id:                  100, // Симферопольская
        locationId:          1,
        name:                projectsData[ 100 ].name,
        labelPositionNumber: 2,
        coordinates:         {
            x: -385,
            y: -35,
        },
        point: {
            width:  128,
            height: 172,
        },
        description: projectsData[ 100 ].description,
        // products: projectsData[100].products,
        products:    [
            19,
            // ...projectsData[ 100 ].products,
            
            12,
            13,
        ],
    },
    {
        id:                  101, // Ветропарк
        locationId:          1,
        name:                projectsData[ 101 ].name,
        labelPositionNumber: 2,
        coordinates:         {
            x: -359,
            y: 274,
        },
        point: {
            width:  135,
            height: 194,
        },
        description: projectsData[ 101 ].description,
        // products: projectsData[101].products,
        products:    [
            3,
            10,
            12,
            13,
            // 14,
            16,
            // ...projectsData[ 101 ].products,
            37,
        ],
    },
    {
        id:                  102, // Лебединский
        locationId:          1,
        name:                projectsData[ 102 ].name,
        labelPositionNumber: 0,
        coordinates:         {
            x: -93,
            y: -25,
        },
        point: {
            width:  128,
            height: 172,
        },
        description: projectsData[ 102 ].description,
        // products: projectsData[102].products,
        products:    [
            23,
            25,
            // ...projectsData[ 102 ].products,
    
            1,
            3,
            4,
            6,
            19,
            30,
            38,
        ],
    },
    {
        id:                  103, // Хованская
        locationId:          1,
        name:                projectsData[ 103 ].name,
        labelPositionNumber: 3,
        coordinates:         {
            x: 137,
            y: -94,
        },
        point: {
            width:  128,
            height: 172,
        },
        description: projectsData[ 103 ].description,
        // products: projectsData[103].products,
        products:    [
            // 3,
            // 10,
            // 12,
    
            12,
            13,
            37,
            
            // 14,
            // ...projectsData[ 103 ].products,
        ],
    },
    {
        id:                  104, // Зеленодольская
        locationId:          1,
        name:                projectsData[ 104 ].name,
        labelPositionNumber: 3,
        coordinates:         {
            x: 317,
            y: 192,
        },
        point: {
            width:  135,
            height: 194,
        },
        description: projectsData[ 104 ].description,
        // products: projectsData[104].products,
        products:    [
            // 3,
            10,
            12,
            // 14,
            16,
            // ...projectsData[ 104 ].products,
            
            37,
        ],
    },
    {
        id:                  105, // Талаховская
        locationId:          1,
        name:                projectsData[ 105 ].name,
        labelPositionNumber: 2,
        coordinates:         {
            x: 16,
            y: -368,
        },
        point: {
            width:  75,
            height: 100,
        },
        description: projectsData[ 105 ].description,
        // products: projectsData[105].products,
        products:    [
            // 1,
            // 3,
            // 12,
            // ...projectsData[ 105 ].products,
            
            38,
        ],
    },
    {
        id:                  106, // Прегольская
        locationId:          1,
        name:                projectsData[ 106 ].name,
        labelPositionNumber: 0,
        coordinates:         {
            x: -74,
            y: -364,
        },
        point: {
            width:  75,
            height: 100,
        },
        description: projectsData[ 106 ].description,
        // products:    projectsData[ 106 ].products,
        products:    [
            19,
            27,
            25,
            23,
            30,
        ],
    },
    {
        id:                  107, // Маяковская
        locationId:          1,
        name:                projectsData[ 107 ].name,
        labelPositionNumber: 3,
        coordinates:         {
            x: -31,
            y: -421,
        },
        point: {
            width:  75,
            height: 100,
        },
        description: projectsData[ 107 ].description,
        // products: projectsData[107].products,
        products:    [
            1,
            3,
            12,
            // ...projectsData[ 107 ].products,
        ],
    },
    {
        id:                  108, // Зеленодольская
        locationId:          2,
        name:                projectsData[ 108 ].name,
        labelPositionNumber: 1,
        coordinates:         {
            x: -496,
            y: 300,
        },
        point: {
            width:  158,
            height: 205,
        },
        description: projectsData[ 108 ].description,
        // products: projectsData[108].products,
        products:    [
            3,
            10,
            12,
            // 14,
            16,
            // ...projectsData[ 108 ].products,
        ],
    },
    {
        id:                  109, // Воркута
        locationId:          2,
        name:                projectsData[ 109 ].name,
        labelPositionNumber: 2,
        coordinates:         {
            x: -324,
            y: -6,
        },
        point: {
            width:  147,
            height: 180,
        },
        description: projectsData[ 109 ].description,
        // products:    projectsData[ 109 ].products,
        products:    [
            9, // КРУЭ-110кВ
            6, // ??? РГП2-110/1000-40 УХЛ1 ПРГ 00 01
            8, // ??? ОПН 10-0,38 кВ
        ],
    },
    {
        id:                  110, // Север
        locationId:          2,
        name:                projectsData[ 110 ].name,
        labelPositionNumber: 3,
        coordinates:         {
            x: 82,
            y: -52,
        },
        point: {
            width:  148,
            height: 184,
        },
        description: projectsData[ 110 ].description,
        // products: projectsData[110].products,
        products:    [
            9
        ],
    },
    {
        id:                  111, // Мамакан 110
        locationId:          3,
        name:                projectsData[ 111 ].name,
        labelPositionNumber: 1,
        coordinates:         {
            x: -26,
            y: 108,
        },
        point: {
            width:  150,
            height: 184,
        },
        description: projectsData[ 111 ].description,
        // products: projectsData[111].products,
        products:    [
            // 1,
            // 3,
            // 4,
            // 6,
            // 8,
            // 12,
            // 16,
            
            // ...projectsData[ 111 ].products,
            
            37,
            38,
        ],
    },
    {
        id:                  112, // НПС-5
        locationId:          3,
        name:                projectsData[ 112 ].name,
        labelPositionNumber: 2,
        coordinates:         {
            x: -100,
            y: -28,
        },
        point: {
            width:  144,
            height: 175,
        },
        description: projectsData[ 112 ].description,
        // products: projectsData[112].products,
        products:    [
            // 3,
            13,
            10,
            12,
            // 14,
            // ...projectsData[ 112 ].products,
        ],
    },
    {
        id:                  113, // НПС-3
        locationId:          4,
        name:                projectsData[ 113 ].name,
        labelPositionNumber: 3,
        coordinates:         {
            x: -216,
            y: -86,
        },
        point: {
            width:  144,
            height: 175,
        },
        description: projectsData[ 113 ].description,
        // products: projectsData[113].products,
        products:    [
            // 3,
            
            // 13,
            // 10,
            // 12,
            
            // 14,
            // ...projectsData[ 113 ].products,
    
            38,
        ],
    },
    {
        id:                  114, // Лесная
        locationId:          1,
        name:                projectsData[ 114 ].name,
        labelPositionNumber: 0,
        coordinates:         {
            x: 137,
            y: -94,
        },
        point: {
            width:  128,
            height: 172,
        },
        description: projectsData[ 114 ].description,
        // products: projectsData[114].products,
        products:    [
            // 3,
            
            // 10,
            // 12,
            
            // 14,
            // ...projectsData[ 114 ].products,
            
            37,
        ],
    },
    // {
    //     id:                  115, // Хованская
    //     locationId:          1,
    //     name:                projectsData[ 115 ].name,
    //     labelPositionNumber: 1,
    //     coordinates:         {
    //         x: 137,
    //         y: -94,
    //     },
    //     point: {
    //         width:  128,
    //         height: 172,
    //     },
    //     description: projectsData[ 115 ].description,
    //     // products:    projectsData[ 115 ].products,
    //     products:    [],
    // },
    // {
    //     id: 116, // Мамакан 220
    //     locationId: 1,
    //     name: projectsData[116].name,
    //     labelPositionNumber: 1,
    //     coordinates: {
    //         x: 137,
    //         y: -94,
    //     },
    //     point: {
    //         width: 128,
    //         height: 172,
    //     },
    //     description: projectsData[116].description,
    //     // products: projectsData[116].products,
    //     products: [
    //         3,
    //         8,
    //         10,
    //         12,
    //         13,
    //         14,
    //         16,
    //         ...projectsData[116].products
    //     ],
    // },
];

export const products = [
    {
        id:      1,
        section: '110-220',
        title:   'ВГТ-110',
        photo:   'VGT_110',
        pdf:     'Элегазовый_колонковый_выключатель_ВГТ_110.pdf',
        ...productsData[1],
    },
    {
        id:      2,
        section: '110-220',
        title:   'ВТБ-110',
        photo:   'VTB_110',
        pdf:     'ВТБ-110.pdf',
        ...productsData[2],
    },
    {
        id:      3,
        section: '110-220',
        title:   'ТОГФ-110',
        photo:   'TOGF_110',
        pdf:     'ЗЭТО_ТОГФ_110-220_2017.pdf',
        ...productsData[3],
    },
    {
        id:      4,
        section: '110-220',
        title:   'ЗНОГ-110',
        photo:   'ZNOG_110',
        pdf:     'ЗНОГ-110,220.pdf',
        ...productsData[4],
    },
    {
        id:      5,
        section: '110-220',
        title:   'ТГК-110',
        photo:   'TGK_110',
        pdf:     'ТГК.pdf',
        ...productsData[5],
    },
    {
        id:      6,
        section: '110-220',
        title:   'РГ-110',
        photo:   'RG_110',
        pdf:     'ЗЭТО_РГ_110-220_2017.pdf',
        ...productsData[6],
    },
    {
        id:      7,
        section: '110-220',
        title:   'РПВ-110',
        photo:   'RPV_110',
        pdf:     'РПВ_110-220.pdf',
        ...productsData[7],
    },
    {
        id:      8,
        section: '110-220',
        title:   'ОПН-110',
        photo:   'OPN_110',
        pdf:     'ОПН_110-500.pdf ',
        ...productsData[8],
    },
    {
        id:      9,
        section: '110-220',
        title:   'КРУЭ-110/220',
        photo:   'KREU_110',
        pdf:     'ЗЭТО_КРУЭ_2017.pdf',
        ...productsData[9],
    },
    {
        id:      10,
        section: '110-220',
        title:   'ВГТ-220',
        photo:   'VGT_220',
        ...productsData[10],
    },
    {
        id:      11,
        section: '110-220',
        title:   'ВТБ-220',
        photo:   'VTB_220',
        pdf:     'ЗЭТО_ТОГФ_110-220_2017.pdf',
        ...productsData[11],
    },
    {
        id:      12,
        section: '110-220',
        title:   'ТОГФ-220',
        photo:   'TOGF_220',
        pdf:     'ЗЭТО_ТОГФ_110-220_2017.pdf',
        ...productsData[12],
    },
    {
        id:      13,
        section: '110-220',
        title:   'ЗНОГ-220',
        photo:   'ZNOG_220',
        pdf:     'ЗНОГ-110,220.pdf',
        ...productsData[13],
    },
    // {
    //     id:      14,
    //     section: '110-220',
    //     title:   'РГ-220',
    //     photo:   'RG_220',
    //     name:    'Разъединитель горизонтально-поворотный типа РГ-220',
    //     desc:    'Разъединители предназначены для включения и отключения обесточенных участков электрических цепей, находящихся под напряжением, а также заземления отключенных участков при помощи заземлителей. Разъединители также используют для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.',
    //     html:    '<p><b>Разъединитель горизонтально-поворотный типа РГ-220</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрических цепей, находящихся под напряжением;</li><li>для <b>заземления отключенных</b> участков при помощи заземлителей.</li></ul><p><b>Разъединители</b> также используют для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.</p>',
    //     pdf:     'ЗЭТО_РГ_110-220_2017.pdf',
    // },
    {
        id:      15,
        section: '110-220',
        title:   'РПВ-220',
        photo:   'RPV_220',
        pdf:     'РПВ_110-220.pdf',
        ...productsData[15],
    },
    {
        id:      16,
        section: '110-220',
        title:   'ОПН-220',
        photo:   'OPN_220',
        ...productsData[16],
    },
    {
        id:      17,
        section: '330-750',
        title:   'ВГТ-330',
        photo:   'VGT_330',
        ...productsData[17],
    },
    {
        id:      18,
        section: '330-750',
        title:   'ВГТ-500',
        photo:   'VGT_500',
        ...productsData[18],
    },
    {
        id:      19,
        section: '330-750',
        title:   'ТОГФ-330',
        photo:   'TOGF_330',
        pdf:     'ТОГФ_330.pdf',
        ...productsData[19],
    },
    {
        id:      20,
        section: '330-750',
        title:   'ТОГФ-500',
        photo:   'TOGF_500',
        ...productsData[20],
    },
    {
        id:      21,
        section: '330-750',
        title:   'ЕТН-330',
        photo:   'ETN_330',
        ...productsData[21],
    },
    {
        id:      22,
        section: '330-750',
        title:   'ЕТН-500',
        photo:   'ETN_500',
        ...productsData[22],
    },
    {
        id:      23,
        section: '330-750',
        title:   'РГ-330',
        photo:   'RG_330',
        pdf:     'РГ-330',
        ...productsData[23],
    },
    {
        id:      24,
        section: '330-750',
        title:   'РГ-500',
        photo:   'RG_500',
        pdf:     'РГ_330-500.pdf',
        ...productsData[24],
    },
    {
        id:      25,
        section: '330-750',
        title:   'РПВ-330',
        photo:   'RPV_330',
        pdf:     'РПВ_330-500.pdf',
        ...productsData[25],
    },
    {
        id:      26,
        section: '330-750',
        title:   'РПВ- 500',
        photo:   'RPV_500',
        pdf:     'РПВ_330-500.pdf',
        ...productsData[26],
    },
    {
        id:      27,
        section: '330-750',
        title:   'РПГ-330',
        photo:   'RPG_330',
        pdf:     'РПГ_330-750.pdf',
        ...productsData[27],
    },
    {
        id:      28,
        section: '330-750',
        title:   'РПГ-500',
        photo:   'RPG_500',
        pdf:     'РПГ_330-750.pdf',
        ...productsData[28],
    },
    {
        id:      29,
        section: '330-750',
        title:   'РПГ-750',
        photo:   'RPG_750',
        pdf:     'РПГ_330-750.pdf',
        ...productsData[29],
    },
    {
        id:      30,
        section: '330-750',
        title:   'ОПН-330',
        photo:   'OPN_330',
        pdf:     'ОПН_110-500.pdf',
        ...productsData[30],
    },
    {
        id:      31,
        section: '330-750',
        photo:   'OPN_500',
        pdf:     'ОПН_110-500.pdf',
        ...productsData[31],
    },
    {
        id:      32,
        section: '10-35',
        title:   'ОСК 5-35',
        photo:   'OSK_5_35',
        ...productsData[32],
    },
    {
        id:      33,
        section: '10-35',
        title:   'РЛНД-10',
        photo:   'RLND_10',
        ...productsData[33],
    },
    {
        id:      34,
        section: '10-35',
        title:   'РГ-35',
        photo:   'RG_35',
        ...productsData[34],
    },
    {
        id:      35,
        section: '10-35',
        title:   'ЛК-70/35',
        photo:   'LK_70_35',
        ...productsData[35],
    },
    {
        id:      36,
        section: '110-220',
        title:   'БМ - ОРУ 110кВ',
        photo:   'BM_ORU_110',
        pdf: false,
        ...productsData[36],
    },
    {
        id:      37,
        section: '110-220',
        title:   'БМ - ОРУ 220кВ',
        photo:   'BM_ORU_220',
        pdf: false,
        ...productsData[37],
    },
    {
        id:      38,
        section: '110-220',
        title:   'КМ - ОРУ 110кВ',
        photo:   'KM_ORU_110',
        pdf: false,
        ...productsData[38],
    },
    {
        id:      39,
        section: '10-35',
        title:   'КРУ ZETO-6(10), 20 кВ',
        photo:   'КRU_ZETO_6_10',
        ...productsData[39],
    },
];
