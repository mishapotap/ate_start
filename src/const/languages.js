import appConfig from './config'

const Languages = {
    en: {
        resolutionWarning: 'The presentation works at a screen resolution of 1920х1080 or higher. Your device does not have access to screen resolution.',
        start: 'START',
        controls: 'CONTROLS',
        zetoPlant: '«ZETO» CJSC',
        products: 'PRODUCTS',
        equipment110: 'EQUIPMENT 110-220 kV',
        equipment330: 'EQUIPMENT 330-750 kV',
        equipment10: 'EQUIPMENT 10-35 kV',
        substations: 'APPLICATION ON WORK-SITES',
        substation110: 'AIS Substation 110 kV',
        substation220: 'GIS Substation 110 kV',
        substation330: 'AIS Substation 330 kV',
        projects: 'KEY PROJECTS',
        projectsTitle: 'PROJECTS',
        cooperation: 'COOPERATION AND INNOVATION',
        electrotechnicalCluster: 'ELECTROTECHNICAL CLUSTER',
        cluster: 'CLUSTER',
        technologyParkElektropolis: 'SCIENCE AND TECHNOLOGY PARK «ELEKTROPOLIS»',
        technologyPark: 'TECHNOPARK',
        dataCenter: 'DATA CENTER',
        review360: 'Review 360',
        description: 'Description',
        technicalCharacteristics: 'Technical characteristics',
        openMenu: 'TO OPEN THE MENU',
        closeMenu: 'TO CLOSE THE MENU',
        menu: 'MENU',
        location: 'Location',
        back: 'BACK',
        aboutZeto: 'ABOUT THE PLANT',
        developmentAndDesign: 'DEVELOPMENT AND DESIGN',
        trials: 'TESTS',
        constructionAndInstallation: 'CONSTRUCTION AND INSTALLATION',
        warrantyAndService: 'WARRANTY AND SERVICE',
        production: 'Production',
        
        workpieceProcessing: 'Workpiece processing',
        weldingOfBlanks: 'Welding of blanks, assemblies and parts',
        mechanicalRestorationWorks: 'Mechanical restoration/Machining works',
        coatingParts: 'Coating, painting parts and preparing for assembly',
        equipmentAssembly: 'Equipment assembly',
        
        projectsData: {
            100: {
                name: 'Simferopol Thermal Power Plant',
                description: {
                    title: 'Simferopol TPP (Crimea TPP JSC)',
                    location: 'Russia, Republic of Crimea, Simferopol.',
                },
                products: [
                    'Rigid bus',
                    'Disconnector RG with drives PD 144',
                    'SA 330 kV',
                    'Current transformer TOGF 330',
                    'Bus support',
                ]
            },
            101: {
                name: 'Substation 220 kV «Vetropark»',
                description: {
                    title: 'Substation 220 kV «Vetropark»\nState Corporation «Rosatom»',
                    location: 'Belorechensk, Republic of Adygea.',
                },
                products: [
                    'Set of rigid bus 220 kV',
                    'Unit RG-220 (three-pole disconnector RGN-220, drive PD-14-00, control unit)',
                    'Unit RG-220-SA',
                    'Unit VGT-circuit-breaker VGT-220 with drive',
                    'Three-pole disconnector RGN',
                    'SF6 current transformer TOGF-220',
                    'SF6 Voltage transformer ZNOG-220',
                    'Post insulator 220 kv',
                    'Surge-arrester OPN-P1-220',
                    'Disconnector RVO',
                ],
            },
            102: {
                name: 'Lebedinsky Mining and Processing Plant',
                description: {
                    title: 'Substation "Lebedy" 330 kV',
                    location: 'Gubkin, Belgorod region',
                },
                products: [
                    'Disconnector RPV.1 330 kV',
                    'Disconnector RG.2 330 kV',
                    'Disconnector RG-1a 330 kV',
                    'Disconnector RG-1b 330 kV',
                    'Current transformer 330 kV',
                    'Rigid bus 330 kV',
                    'Surge arrester 330 kV',
                ],
            },
            103: {
                name: 'Substation «Khovanskaya»',
                description: {
                    title: 'Substation «Khovanskaya» 110 kV',
                    location: 'New Moscow\nRussia, Moscow, Sosenskoye settlement, village Gazoprovod\nNote: Within the framework of the project, a 220 kV cable is being laid from the «Khovanskaya» substation under construction to the existing «Lesnaya» substation',
                },
                products: [
                    'SF6 column three-pole circuit-breaker 220 kV',
                    'Single-phase current transformer 220 kV ',
                    'Outdoor three-pole disconnector with e earthing blades 220 kV',
                    'Single-pole outdoor disconnector with earthing switch 220 kV',
                    'Busbar support',
                    'Outdoor inductive voltage transformer',
                    'Single- insulator tension string ',
                ],
            },
            114: {
                name: 'SS Lesnaya',
                description: {
                    title: 'SS Lesnaya 220 kV\nPJSC MOESK',
                    location: 'Novaya Moskva\nVillage Gazoprovod, Sosenskoye settlement, Mocsow, Russia.\nNote: as part of the project, a 220 kV cable is being laid from SS Khovanskaya under construction to the functioning SS Lesnaya',
                },
                products: [
                    'Rigid bus',
                    'Metal structure',
                    'three-pole disconnector',
                    'Single –pole disconnector ',
                    'single-pole current transformer TOGF',
                    'Circuit-breakers 220 kV',
                ],
            },
            115: {
                name: 'SS Khovanskaya',
                description: {
                    title: 'SS Khovanskaya 110 kV',
                    location: 'Novaya Moskva\nVillage Gazoprovod, Sosenskoye settlement, Mocsow, Russia.\nNote: as part of the project, a 220 kV cable is being laid from SS Khovanskaya under construction to the functioning SS Lesnaya',
                },
                products: [
                    'outdoor switchgear 110 kV',
                ],
            },
            104: {
                name: 'SS Zelenodolsky',
                description: {
                    title: 'Substation «Zelenodolskaya» 220 kV\n«Tatenergo» JSC',
                    location: 'Russia, Republic of Tatarstan, Zelenodolsk.',
                },
                products: [
                    'Rigid bus',
                    'Set of post insulators',
                    'metal structures',
                    'Disconnectors',
                    'Single-pole current transformer TOGF',
                    'Column SF6 circuit breaker 220 kV',
                    'Surge arrester',
                ],
            },
            105: {
                name: 'Talakhovskaya TPP',
                description: {
                    title: '«Kaliningrad Generation Company» OJSC',
                    location: `Russia, Kaliningrad region, Slavsky urban district, Oktyabrskoye village`,
                },
                products: [
                    'Circuit-breaker VGT-110 kV',
                    'Current transformer TOGF-110 kV',
                    'Disconnector RGP with drives PD-14',
                    'Surge arrester 110 kV',
                ],
            },
            106: {
                name: '«Pregolskaya» Thermal Power Plant',
                description: {
                    title: '«Pregolskaya» TPP 330\n«Kaliningrad Generation Company» OJSC',
                    location: 'Russia, Kaliningrad region, Kaliningrad, Lugovoe settlement.',
                },
                products: [
                    'Outdoor switchgear 330 kV (ORU-330 kV)',
                ],
            },
            107: {
                name: '«Mayakovskaya» Thermal Power Plant',
                description: {
                    title: '«Kaliningrad Generation Company» OJSC',
                    location: 'Russia, Kaliningrad region, Gusev',
                },
                products: [
                    'Circuit breaker VGT-110 kV',
                    'Current transformer TOGF -110 kV',
                    'Disconnector RGP with drives PD -14',
                    'Surge arrester 110 kV ',
                ],
            },
            108: {
                name: 'SS Zelenodolskaya',
                description: {
                    title: 'SS Zelenodolskaya\n220 kV\nTatenergo, limited company',
                    location: 'Zelenodolsk, the republic of Tatarstan, Russian',
                },
                products: [
                    'Rigid bus',
                    'Set of post insulators',
                    'metal structures',
                    'Disconnectors',
                    'Single-pole current transformer TOGF',
                    'Column SF6 circuit breaker 220 kV',
                    'Surge arrester',
                ],
            },
            109: {
                name: 'Substation «Vorkuta»',
                description: {
                    title: 'Substation Vorkuta 110 kV\nOboronenergo JSC',
                    location: 'Vorkuta, Komi Republic ',
                },
                products: [
                    'Disconnector RGP110',
                    'Compact module -Surge arrester unit ',
                    'metal structures',
                    'Unit of earthing switch and surge arrestor',
                ],
            },
            110: {
                name: 'Digital Substation «Sever»',
                description: {
                    title: 'Substation 110/35/10 kV\n«Gazprom» PJSC',
                    location: 'Yamal',
                },
                products: [
                    'GIS-110',
                ],
            },
            111: {
                name: 'Substation Mamakan',
                description: {
                    title: 'Substation (SS) Mamakan 110 kV\n«Polyus Zoloto» OJSC',
                    location: 'Bodaibo, Irkutsk region,\nRussia',
                },
                products: [
                    'Rigid bus',
                    'Disconnector unit 110 kV',
                    'SA unit 110 kV',
                    'Voltage transformer ZNOG',
                    'Circuit-breaker VGT 110',
                    'Insulator',
                    'Disconnector',
                    'Current transformer TOGF',
                ],
            },
            112: {
                name: 'Oil Refinery (NPS-5)',
                description: {
                    title: 'Oil refinery Plant (oil refinery station -5)\n«Transneft» PJSC\nComplete modular transformer substation for voltage 220/10 kV',
                    location: 'Irkutsk region',
                },
                products: [
                    'Set of rigid bus',
                    'metal structures',
                    'Surge arrester 220',
                    'Voltage transformer ZNOG 220',
                    'Circuit-breaker VGT-220',
                    'Insulator OSK-20-20',
                    'Disconnector 220',
                    'Current transformer TOGF',
                ],
            },
            113: {
                name: 'Komsomolsk Oil Refinery (NPS-3)',
                description: {
                    title: 'Komsomolsky oil refinery plant (ORS -3)\n«Transneft» PJSC\nComplete modular transformer substation for voltage 220/10 kV\n',
                    location: 'Far East, the area of Khabarovsk',
                },
                products: [
                    'Set of rigid busbar',
                    'Metal structures',
                    'Surge arrester 220',
                    'Voltage transformer ZNOG 220',
                    'Circuit-breaker VGT-330',
                    'Insulator OSK-20-20',
                    'Disconnector 220',
                    'Current transformer TOGF',
                ],
            }
        },
    
        productsData: {
            1: {
                name:    'SF6 column live-tank circuit breaker VGT-110 kV',
                short:   'Circuit Breaker VGT-110',
                html:    '<p>Gas-insulated column circuit breakers VGT-110 are manufactured:</p><ul><li>by three-pole model;</li><li>by single-pole model;</li></ul><p><b>Circuit breakers of the VGT series are designed:</b></p><ul><li>to perform commutation operations;</li><li>making and breaking;</li><li>for automatic reclosure cycles under specified conditions in normal and emergency modes.</li></ul><p>Network: three-phase alternating current, frequency 50 Hz, rated voltage 110 kV, with earthed neutral.</p>',
            },
            2: {
                name:    'SF6 dead-tank circuit breaker VTB-110 kV',
                html:    '<p>Dead-Tank SF6 circuit breakers VTB-110 type are designed:</p><ul><li>to perform switching operations making and breaking;</li><li>For auto reclosing cycles under specified conditions in normal and emergency modes;</li></ul><p><b>Network: </b>three-phase, alternating current, with grounded neutral (earth fault factor not higher than 1.4) at rated voltage 110 kV and rated frequency 50 Hz</p><p>Circuit breakers are intended for switching between the shunt reactor and the capacitor bank.</p>',
            },
            3: {
                name:    'Gas-filled current transformer of TOGF(P)-110 type',
                short:   'Gas-filled type current transformer TOGF(P)-110',
                html:    '<p>TOGF series current transformers are designed:</p><ul><li>for signal transmission of measuring information by measuring instruments and protection and control devices in open and closed switchgears of alternating current;</li><li>for rated frequency 50 Hz, for rated voltage 110 kV.</li></ul>',
            },
            4: {
                name:    'SF6 voltage transformer ZNOG-110 kV',
                html:    '<p>General-purpose inductive gas-filled voltage transformers of the ZNOG-110 series are intended:</p><ul><li>for transmitting a signal of measuring information to measuring instruments and protection, signaling and control devices in open and closed AC switchgears;</li><li>Frequency 50Hz, for rated voltage 110√3</li></ul>',
            },
            5: {
                name:    'Combined current and voltage SF6 transformer TGK-110 kV',
                html:    '<p>Transformers TGK-110 kV series are designed to transmit measurement information signal to measuring instruments and protection and control devices in open and closed AC devices<br>Frequency 50 Hz for rated voltage 110 kV</p>',
            },
            6: {
                name:    'Disconnector horizontal center-break of  RG-110 type',
                short:   'Disconnector RG-110',
                html:    '<p>Disconnectors of the horizontal center break type RG-110 are designed:</p><ul><li>for commutation of de-energized sections of electrical circuits that are energized;</li><li>for earthing disconnected sections using earthing switches.</li></ul><p>Disconnectors are also used to disconnect the no-load currents of transformers and the charging currents of overhead and cable lines.</p>',
            },
            7: {
                name:    'Vertical break pantograph type disconnector RPV-110 kV',
                html:    '<p>Vertical break pantograph type disconnectors RPV-110 kV are designed:</p><ul><li>for commutation of de-energized sections of an electrical circuit that are energized;</li><li>for earthing disconnected sections with earthing switches.</li></ul><p>The disconnector can be used to disconnect the no-load currents of transformers and the charging currents of overhead and cable lines.</p>',
            },
            8: {
                name:    'Surge arrester with porcelain insulation OPN-110 kV',
                html:    '<p>Surge arresters with porcelain insulation OPN-110 kV are designed: to protect electrical equipment for voltage classes 110 kV of the second (550A) and third (850A) class in terms of throughput, operating in a network with an effectively grounded neutral (ground fault factor not higher than 1, 4), against lightning and switching surges.</p><p>Surge arresters  of OPNN-F series are designed: to protect the grounded neutral of transformers for voltage class 110 kV, included in this neutral, from lightning and switching surges.</p>',
            },
            9: {
                name:    'SF6 gas insulated switchgear GIS 110/220',
                html:    '<p>GIS is a gas-insulated high-voltage switchgear designed for receiving, distributing and transmitting electrical energy in three-phase alternating current networks, frequency 50 Hz, rated voltage 110 and 220 kV.</p><p>A GIS bay of the YATE-110L/2500U2 type is a complex of modules:</p><ul><li>circuit breakers, combined disconnectors-earthing switches;</li><li>high-speed earthing switch;</li><li>current transformers;</li><li>connecting elements, cable or air inlets, current conductors, placed in a metal sheath filled with sulfur hexafluoride.</li></ul><p>The switchgear with bays YATE-110L/2500 manufactured by the ZETO plant is designed for use as part of substations and power plants in the open air, at an ambient temperature of up to minus 45°C.</p>',
            },
            10: {
                name:    'SF6 column live-tank circuit breaker VGT-220 kV',
                html:    '<p>SF6 column live-tank circuit breakers VGT-220 are manufactured as: </p><ul><li>three-pole version;</li><li>one-pole version.</li></ul><p>VGT series circuit breakers are designed:</p><ul><li>to perform switching operations making and breaking;</li><li>for AR cycles under specified conditions in normal and emergency modes</li></ul><p>Network: three-phase alternating current, frequency 50 Hz, rated voltage 220 kV, with earthed neutral.</p>',
            },
            11: {
                name:    'SF6 dead-tank circuit breaker VTB-220 kV',
                html:    '<p>SF6 dead-tank circuit breakers VTB-220 kV are designed for: </p><ul><li>to perform switching operations making and breaking under specified conditions in normal and emergency modes in three-phase alternating current networks with grounded neutral (ground fault factor not higher than 1.4) at a rated voltage of 220 kV and a rated frequency of 50 Hz. </li><li>circuit breaker is equipped with built-in current transformers.</li></ul><p>Dead-tank circuit breakers VTB-220 are three-pole automatic compression circuit breakers designed for outdoor installation, where SF6 gas or its mixture with tetrafluoromethane is used as an insulating and arc extinguishing agent.</p><p>Circuit breakers have one hydraulic drive for all phases, that allows them to switch electrical circuits in normal and emergency operating modes, as well as operate in automatic reclosure cycles in networks of three-phase alternating current with a frequency of 50 Hz and a rated voltage of 220 kV.</p>',
            },
            12: {
                name:    'SF6 current transformer TOGF(P)-220 kV',
                html:    '<p>Gas-filled current transformers type TOGF(P)-220 are designed for: </p><ul><li>transmitting a signal of measuring information to measuring instruments and protection and control devices in open and closed AC switchgears</li><li>Frequency 50 Hz, for rated voltage 220 kV</li></ul>',
            },
            13: {
                name:    'SF6 voltage transformer ZNOG-220 kV',
                html:    '<p>General purpose gas-filled inductive voltage transformers ZNOG-220 kV are designed:</p><ul><li>for transmitting a signal of measuring information to measuring instruments and protection, signaling and control devices in open and closed AC switchgears;</li><li>frequency 50 Hz for rated voltage 220√3 kV</li></ul>',
            },
    
            15: {
                name:    'Vertical break pantograph type disconnector RPV-220 kV',
                html:    '<p>Vertical break pantograph type disconnectors RPV-220 kV are designed:</p><ul><li>for commutation de-energized sections of the electrical circuit that are energized </li><li>for earthing disconnected sections using a earthing switch</li></ul><p>Disconnectors can be used to disconnect the no-load currents of transformers and the charging currents of overhead and cable lines</p>',
            },
            16: {
                name:    'Surge arrester with porcelain insulation OPN-220 kV',
                html:    '<p>Surge arresters with porcelain insulation OPN-220 kV are designed:</p><ul><li>To protect voltage classes 220 kV electrical equipment of the second (550 A) and third (850 A) class in terms of throughput capacity, operating in a network with an effectively grounded neutral (ground fault factor not higher than 1.4), from lightning and switching overvoltages.</li></ul>',
            },
            17: {
                name:    'SF6 column live-tank circuit breaker VGT-330 kV',
                html:    '<p>The circuit breakers are designed to perform switching operations making and breaking, as well as AR cycles under specified conditions in normal and emergency modes in three-phase alternating current networks with a frequency of 50 Hz and a rated voltage of 330 kV with a grounded neutral.</p><p>The circuit breakers are designed to operate under conditions of normal values of environmental climatic factors in accordance with GOST 15150 and GOST 15543.1 - climatic version U or UKHL*, location category 1.</p><p>In all not specified cases, the circuit breakers comply with the requirements of GOST R 52565 "Alternating current circuit breakers for voltage from 3 to 750 kV".</p>',
            },
            18: {
                name:    'SF6 column live-tank circuit breaker VGT-500kV',
                html:    '<p>The circuit breakers are designed to perform switching operations making and breaking, as well as AR cycles under specified conditions in normal and emergency modes in three-phase alternating current networks with a frequency of 50 Hz and a rated voltage of 330 kV with a grounded neutral.</p><p>The circuit breakers are designed to operate under conditions of normal values of environmental climatic factors in accordance with GOST 15150 and GOST 15543.1 - climatic version U or UKHL*, location category 1.</p><p>In everything not specified, the circuit breakers comply with the requirements of GOST R 52565 "Alternating current circuit breakers for voltage from 3 to 750 kV".</p>',
            },
            19: {
                name:    'SF6 current transformer TOGF(P)-330 kV',
                html:    '<p>SF6 current transformers TOGF(P)-330 kV are designed for:</p><ul><li>for transmitting a signal of measuring information to measuring instruments and protection and control devices in open AC switchgears;</li><li>frequency 50 Hz, for rated voltage 330 kV.</li></ul>',
            },
            20: {
                name:    'SF6 current transformer TOGF(P)-500 kV',
                html:    '<p>SF6 current transformers TOGF(P)-500 kV are designed: </p><ul><li>for transmitting a signal of measuring information to measuring instruments and protection and control devices in open AC switchgears; </li><li>frequency 50 Hz, for rated voltage 500 kV.</li></ul>',
            },
            21: {
                name:    'Capacitive voltage transformer ETN-ZETO-330 kV',
                html:    '<p>Measuring voltage transformers of capacitive type are scale measuring transducers and are intended for operation in electrical networks of 330 kV AC with a frequency of 50 Hz.</p><p>The principle of a capacitive voltage transformer is based on a two-stage voltage reduction. A capacitive voltage divider is used as the first stage. The second stage is an electromagnetic type transformer.</p><p>The main task of capacitive voltage transformers is the commercial accounting of electricity, as well as the transmission of a signal of measuring information to devices, protection and control devices. With these transformers it is also possible to organize high-frequency communication.</p>',
            },
            22: {
                name:    'Capacitive voltage transformer ETN-500',
                html:    '<p>Measuring voltage transformers of capacitive type are scale measuring transducers and are designed for operation in electrical networks of 500 kV AC with a frequency of 50 Hz.</p><p>The principle of a capacitive voltage transformer is based on a two-stage voltage reduction. A capacitive voltage divider is used as the first stage. The second stage is an electromagnetic type transformer.</p><p>The main task of capacitive voltage transformers is the commercial accounting of electricity, as well as the transmission of a signal of measuring information to devices, protection and control devices. With these transformers it is also possible to organize high-frequency communication.</p>',
            },
            23: {
                name:    'Horizontal center break disconnector RG-330 kV',
                html:    '<p>Horizontal center break disconnectors RG-330 kV are designed: </p><ul><li>for commutation of de-energized sections of electrical circuits that are energized; </li><li>for earthing disconnected sections with earthing switches</li></ul><p>Disconnectore are made in the form of individual poles of a horizontally rotary type.</p><p>Disconnectors are manufactured with one or two earthing switches.\n</p>',
            },
            24: {
                name:    'Horizontal center break disconnector RG-500 kV\n',
                html:    '<p>Horizontal center break disconnectors RG-500 kV are designed:</p><ul><li>for commutation of de-energized sections of electrical circuits that are energized; </li><li>for earthing disconnected sections with earthing switches.</li></ul><p>Disconnectore are made in the form of individual poles of a horizontally rotary type.</p><p>Disconnectors are manufactured with one or two earthing switches.</p>',
            },
            25: {
                name:    'Vertical break pantograph type disconnector RPV-330 kV',
                html:    '<p>Vertical break pantograph type disconnectors RPV-330 kV are designed: </p><ul><li>for commutation of de-energized sections of electrical circuits that are energized;</li><li>for earthing disconnected sections using a earthing switch.</li></ul><p>Disconnectors can be used to disconnect the no-load currents of transformers and the charging currents of overhead and cable lines.</p>',
            },
            26: {
                name:    'Vertical break pantograph type disconnector RPV-500 kV',
                html:    '<p>Vertical break pantograph type disconnectors RPV-500 kV are designed: </p><ul><li>for commutation of de-energized sections of electrical circuits that are energized; </li><li>for earthing disconnected sections using a earthing switch.</li></ul><p>Disconnectors can be used to disconnect the no-load currents of transformers and the charging currents of overhead and cable lines.</p>',
            },
            27: {
                name:    'Knee-break horizontal disconnector RPG-330 kV',
                html:    '<p>Knee-break horizontal disconnector RPG-330 kV are designed: </p><ul><li>for commutation of de-energized sections of the electrical circuit that are energized.</li></ul><p>Disconnectors are made in the form of individual poles. Disconnector pole is a device with a contact blade that folds in a vertical plane, which is mounted on one of the two support insulators. A fixed contact of the disconnector is installed on the second support insulator. The movement from the drive to the contact blade is transmitted through the rotary insulator by a system of rods and levers.</p><p>Disconnectors are manufactured with one or two earthing switches. Between the contact blade and the earthing switches are provided: mechanical, electrical and electromagnetic interlocks. The support porcelain insulators of the disconnectors are mounted on the support posts included in the scope of supply.</p>',
            },
            28: {
                name:    'Knee-break  horizontal disconnector RPG-500 kV',
                html:    '<p>Knee-break horizontal disconnectors  RPG-500 kV are designed: </p><ul><li>for commutation of de-energized sections of the electrical circuit that are under voltage; </li><li>for earthing disconnected sections with earthing switches</li></ul><p>Disconnectors are made in the form of individual poles. The disconnector pole is a device with a contact blade that folds in a vertical plane, that is mounted on one of the two support insulators.</p><p>Support porcelain insulators of the disconnectors are mounted on the support posts included in the scope of supply.</p>',
            },
            29: {
                name:    'Knee-break horizontal disconnector  RPG-750 kV',
                html:    '<p>Semi-pantograph type disconnectors with horizontal break RPG-750 kV are designed:</p><ul><li>for commutation of de-energized sections of the electrical circuit that are under voltage; </li><li>for earthing disconnected sections with earthing switches.</li></ul><p>Disconnectors are made in the form of individual poles. The disconnector pole is a device with a contact blade that folds in a vertical plane, that is mounted on one of the two support insulators. A fixed contact of the disconnector is installed on the second support insulator. The movement from the drive to the contact blade is transmitted through the rotary insulator by a system of rods and levers.</p><p>Disconnectors are manufactured with one or two earthing switches. Between the contact blade and the earthing switches are provided: mechanical, electrical and electromagnetic interlocks. The support porcelain insulators of the disconnectors are mounted on the support posts included in the scope of supply.</p>',
            },
            30: {
                name:    'Surge arrester with polymeric insulation OPN-330 kV\n',
                html:    '<p>Surge arresters with polymeric external insulation OPN-330 kV are designed: </p><ul><li>to protect the insulation of electrical equipment for voltage classes of 330 kV AC, power frequency 50 Hz, operating in networks with grounded neutral (ground fault factor not higher than 1.4), from lightning and switching voltages.</li></ul><p>Surge arresters are connected in parallel to the protected object.</p>',
            },
            31: {
                name:    'Surge arrester with polymeric insulation OPN-500',
                html:    '<p>Surge arresters with polymeric external insulation OPN-500 kV are designed: </p><ul><li>to protect the insulation of electrical equipment for voltage classes of 500 kV AC, industrial frequency 50 Hz, operating in networks with grounded neutral (ground fault factor not higher than 1.4), from lightning and switching voltages.</li></ul><p>Surge arresters are connected in parallel to the protected object.</p>',
            },
            32: {
                name:    'Post insulators OSK series',
                html:    '<p>OSK series insulators, types: OSK2-10-A-2UKHL1, OSK5-35-A-3UKHL1, OSK5-35-B-3UKHL1; OSK10-110-A-2UKHL1, OSK10-110-B-2UKHL1, OSK10-110-V-2UKHL1, OSK10-110-G-3UKHL1.</p><p>Intended: for insulation and fastening of current-carrying parts in electrical equipment and switchgears of power stations and substations and overhead lines for a voltage of 10, 35 and 110 kV, with a frequency of up to 100 Hz.</p>',
            },
            33: {
                name:    'Disconnectors RLND-10 kV series',
                html:    '<p>Disconnectors RLND-10 series are designed:</p><ul><li>for commutation of de-energized sections of the high voltage circuit; </li><li>for earthing disconnected sections with of stationary earthing switches.</li></ul>',
            },
            34: {
                name:    'Horizontal center break disconnector RG-35 kV (UKHL 1)',
                html:    '<p>Horizontal center break disconnector RG-35 kV (UKHL 1) are designed:</p><ul><li>for commutation of de-energized sections of electrical circuits that are energized;</li><li>for earthing of disconnected sections with earthing switches.</li></ul><p>Disconnectors are also used to disconnect the no-load currents of transformers and the charging currents of overhead and cable lines.</p>',
            },
            35: {
                name:    'Overhead Line insulators LK-70/35 (UKHL1), 35 kV',
                html:    '<p>Overhead Line insulators LK-70/35 (UKHL1), rod, polymeric, type LK, designed: </p><ul><li>for insulation and fastening of wires of overhead power lines, in switchgears of power plants and substations of alternating current with a voltage of 35 kV, other models from this line up to 500 kV and a frequency of up to 100 Hz.</li></ul>',
            },
            36: {
                name:    'Block module outdoor switchgear 110 kV, layout solutions for outdoor switchgear 110 kV',
                html:    '<p>The outdoor switchgear is made of blocks with mounted high-voltage devices and busbar elements. Depending on the implemented substation scheme. The units consist of a disconnector - current transformer - circuit breaker or disconnector - surge arrester - voltage transformer.</p><p>The modules are designed for receiving and distributing electrical energy of three-phase alternating current with a frequency of 50 Hz, rated voltage of 110 kV, as part of a substation and is used to supply commercial and utility users, agricultural areas and large buildings, as well as on the 110 kV side of large network substations and, at appropriate conditions in power plants.</p><p>The concept of the module makes it possible to make a 110 kV outdoor switchgear of any configuration (both standard and individual schemes).</p>',
            },
            37: {
                name:    'Block module outdoor switchgear 220 kV, layout solutions for outdoor switchgear 220 kV',
                html:    '<p>The outdoor switchgear is made of blocks with mounted high-voltage devices and busbar elements. Depending on the implemented substation scheme. The units consist of a disconnector - current transformer - circuit breaker or disconnector - surge arrester - voltage transformer.</p><p>The modules are designed for receiving and distributing electrical energy of three-phase alternating current with a frequency of 50 Hz, rated voltage of 220 kV, as part of a substation and is used for power supply of commercial and utility users, agricultural areas and large buildings, as well as on the 220 kV side of large network substations and, at appropriate conditions in power plants.</p><p>The concept of the module makes it possible to make a 220 kV outdoor switchgear of any configuration (both standard and individual schemes).</p>',
            },
            38: {
                name:    'Compact module outdoor switchgear 110 kV, layout solutions for outdoor switchgear 110 kV',
                html:    '<p>The modules are designed for receiving and distributing electrical energy of three-phase alternating current with a frequency of 50 Hz, rated voltage of 110 kV, as part of a substation and is used to supply power to industrial and municipal consumers, agricultural areas and large buildings, as well as on the 110 kV side of large network substations and, at appropriate conditions in power plants.</p><p>The concept of the module makes it possible to perform outdoor switchgear-110 kV of any configuration (both standard and individual schemes).</p>',
            },
            39: {
                name:    'Complete switchgears KRU ZETO-6(10), 20 kV',
                html:    '<p>Complete switchgears KRU ZETO series with voltage of 6 and 10 kV are intended for switchgears of alternating three-phase current with a frequency of 50 Hz of systems with isolated neutral or grounded through an arcing reactor.</p><p>Type of climatic version U and UKHL with temperature restrictions, placement category 3 and 4 in accordance with GOST 15150-69 and GOST 15543.1-89, while: </p><ul><li>value of ambient air temperature from minus 25°С to plus 40°С;</li><li>sea level  altitude is not more than 1000 m;</li><li>the environment is not explosive, does not contain conductive dust, aggressive vapors and gases in concentrations that destroy metals and insulation; </li><li>nominal operating mode - continuous; </li><li>working position in space - vertical, permissible deviation - no more than 2 degrees vertically.</li></ul>',
            }
        },
        
        keyProjects: {
            info1: '<b>During the operation of the ZETO plant,</b><br />equipment was supplied to more than<br /><b>100,000</b> facilities in Russia and abroad',
            info2: '<b>Every year the ZETO plant supplies</b><br />equipment to more than 2,000 facilities <br />in Russia and abroad',
        }
    },

    ru: {
        resolutionWarning: 'Презентация работает при разрешении экрана 1920х1080 пикселей и выше.\nВаше устройство не поддерживает данное разрешение экрана.',
        start: 'СТАРТ',
        controls: 'УПРАВЛЕНИЕ',
        zetoPlant: 'ЗАВОД «ЗЭТО»',
        products: 'ПРОДУКЦИЯ',
        equipment110: 'ОБОРУДОВАНИЕ 110-220 кВ',
        equipment330: 'ОБОРУДОВАНИЕ 330–750 кВ',
        equipment10: 'ОБОРУДОВАНИЕ 10-35 кВ',
        substations: 'ПРИМЕНЕНИЕ НА ОБЪЕКТАХ',
        substation110: 'Подстанция ОРУ 110 кВ',
        substation220: 'Подстанция КРУЭ 110 кВ',
        substation330: 'Подстанция ОРУ 330 кВ',
        projects: 'КЛЮЧЕВЫЕ ПРОЕКТЫ',
        projectsTitle: 'ПРОЕКТЫ',
        cooperation: 'КООПЕРАЦИЯ И ИННОВАЦИИ',
        electrotechnicalCluster: 'ЭЛЕКТРОТЕХНИЧЕСКИЙ КЛАСТЕР',
        cluster: 'КЛАСТЕР',
        technologyParkElektropolis: 'ТЕХНОПАРК «ЭЛЕКТРОПОЛИС»',
        technologyPark: 'ТЕХНОПАРК',
        dataCenter: 'ДАТА ЦЕНТР',
        review360: 'Обзор 360',
        description: 'Описание',
        technicalCharacteristics: 'Технические характеристики',
        openMenu: 'ОТКРЫТЬ МЕНЮ',
        closeMenu: 'ЗАКРЫТЬ МЕНЮ',
        menu: 'МЕНЮ',
        location: 'Местоположение',
        back: 'НАЗАД',
        aboutZeto: 'О ЗАВОДЕ',
        developmentAndDesign: 'РАЗРАБОТКА И ПРОЕКТИРОВАНИЕ',
        trials: 'ИСПЫТАНИЯ',
        constructionAndInstallation: 'СТРОИТЕЛЬСТВО И МОНТАЖ',
        warrantyAndService: 'ГАРАНТИИ И СЕРВИС',
        production: 'Производство',
    
        workpieceProcessing: 'Обработка заготовок',
        weldingOfBlanks: 'Сварка заготовок, узлов и деталей',
        mechanicalRestorationWorks: 'Механическая обработка',
        coatingParts: 'Покрытие, покраска деталей и подготовка к сборке',
        equipmentAssembly: 'Сборка оборудования',

        projectsData: {
            100: {
                name: 'Симферопольская ТЭЦ',
                description: {
                    title: 'Симферопольская ТЭЦ\n(АО КрымТЭЦ)',
                    location: 'Россия, Республика Крым,\nСимферополь',
                },
                products: [
                    // 'Жесткая ошиновка',
                    // 'Разъединитель РГ с приводами ПД 144',
                    // 'Ограничитель напряжения 330 кВ',
                    'Трансформатор тока ТОГФ 330',
                    // 'Шинная опора',
                ]
            },
            101: {
                name: 'ПС 220 кВ «Ветропарк»',
                description: {
                    title: 'ПС 220 кВ «Ветропарк»\nГоскорпорация «Росатом»',
                    location: 'Белореченск, Республика Адыгея',
                },
                products: [
                    // 'Комплект ошиновки жесткой 220 кВ',
                    // 'Блок РГ -220 (разъединитель трехполюсный РГН -220, привод ПД-14-00, блок управления)',
                    // 'Блок РГ-220-ОПН',
                    // 'Блок ВГТ- выключатель ВГТ-220 с приводом',
                    // 'Ограничитель перенапряжения ОПН - П1-220',
                    // 'Разъединитель трехполюсный РГН',
                    'Трансформатор тока элегазовый ТОГФ -220',
                    'Трансформатор напряжения элегазовый ЗНОГ -220',
                    // 'Опорный изолятор -220 кВ',
                    // 'Разъединитель РВО',
                ],
            },
            102: {
                name: 'Лебединский ГОК',
                description: {
                    title: 'Лебединский ГОК.\nПодстанция «Лебеди»\n330 кВ',
                    location: 'Губкин, Белгородская область',
                },
                products: [
                    // 'Разъединитель РПВ.1 330 кВ',
                    // 'Разъединитель РГ.2 330 кВ',
                    'Разъединитель РГ-1а 330 кВ',
                    'Разъединитель РГ-1б 330 кВ',
                    // 'Трансформатор тока 330 кВ',
                    'Ошиновка жесткая 330 кВ',
                    // 'Ограничитель перенапряжения 330 кВ',
                ],
            },
            103: {
                name: 'Подстанция «Хованская»',
                description: {
                    title: 'Подстанция «Хованская» 220 кВ,\nПАО «МОЭСК»',
                    location: 'Новая Москва\nРоссия, Москва, поселение Сосенское, посёлок Газопровод\nПримечание: В рамках проекта выполняется прокладка кабеля 220 кВ от строящейся ПС Хованская до действующей ПС Лесная',
                },
                products: [
                    // 'Выключатель элегазовый колонковый трехполюсный 220 кВ',
                    // 'Трансформатор тока однофазный 220 кВ',
                    // 'Разъединитель трехполюсный, наружной установки с 2-мы заземляющими ножами 220 кВ',
                    // 'Разъединитель однополюсный, наружной установки с одним заземляющим ножом 220 кВ',
                    'Шинная опора',
                    // 'Трансформатор напряжения индуктивный, наружной установки',
                    // 'Гирлянда изоляторов натяжная одноцепная',
                ],
            },
            104: {
                name: 'ПС Зеленодольская',
                description: {
                    title: 'ПС Зеленодольская 220 кВ\nАО «Татэнерго»',
                    location: 'Россия, Республика Татарстан, Зеленодольск',
                },
                products: [
                    // 'Разъединители',
                    // 'Трансформатор тока однополюсный ТОГФ',
                    // 'Выключатель колонковый элегазовый ВГТ 220 кВ',
                    // 'ОПН',
                    // 'Ошиновка жесткая',
                    // 'Блок опорных изоляторов',
                    // 'Металлоконструкции',
                ],
            },
            105: {
                name: 'Талаховская ТЭС',
                description: {
                    title: 'Талаховская ТЭС\nОАО «Калининградская генерирующая компания»',
                    location: 'Россия, Калининградская область, Славский городской округ, поселок Октябрьское',
                },
                products: [
                    // 'Выключатель ВГТ-110 кВ',
                    // 'Трансформатор тока ТОГФ-110 кВ',
                    // 'Разъединитель РГП с приводами ПД-14',
                    // 'Ограничитель перенапряжения 110 кВ',
                ],
            },
            106: {
                name: 'ТЭС Прегольская',
                description: {
                    title: 'ТЭС «Прегольская» 330\nОАО «Калининградская генерирующая компания»',
                    location: 'Россия, Калининградская область, г. Калининград\nпоселок Луговое',
                },
                products: [
                    // 'Открытое распределительное устройство 330 кВ (ОРУ-330 КВ)',
                ],
            },
            107: {
                name: 'Маяковская ТЭС',
                description: {
                    title: 'Маяковская ТЭС\nОАО «Калининградская генерирующая компания»',
                    location: 'Россия, Калининградская область, Гусев',
                },
                products: [
                    // 'Выключатель ВГТ-110 кВ',
                    // 'Трансформатор тока ТОГФ-110 кВ',
                    // 'Разъединитель РГП с приводами ПД-14',
                    // 'Ограничитель перенапряжения 110 кВ',
                ],
            },
            108: {
                name: 'ПС Зеленодольская',
                description: {
                    title: 'ПС Зеленодольская 220 кВ\nАО «Татэнерго»',
                    location: 'Россия, Республика Татарстан, Зеленодольск',
                },
                products: [
                    // 'Разъединители',
                    // 'Трансформатор тока однополюсный ТОГФ',
                    // 'Выключатель колонковый элегазовый ВГТ 220 кВ',
                    // 'ОПН',
                    'Ошиновка жесткая',
                    // 'Блок опорных изоляторов',
                    // 'Металлоконструкции',
                ],
            },
            109: {
                name: 'ПС Воркута',
                description: {
                    title: 'ПС Воркута 110 кВ\nАО «Оборонэнерго»',
                    location: 'Воркута, Республика Коми',
                },
                products: [
                    // 'Разъединитель РГП 110',
                    // 'Блок КМ-ОПН',
                    // 'Металлоконструкции',
                    // 'Блок ЗОН и ОПНН',
                ],
            },
            110: {
                name: 'ЦПС Север',
                description: {
                    title: 'ПС 110/35/10кВ\n«ЦПС-Север»\nПАО «Газпром»',
                    location: 'Ямал',
                },
                products: [
                    // 'КРУЭ-110',
                ],
            },
            111: {
                name: 'ПС Мамакан',
                description: {
                    title: 'Подстанция (ПС) Мамакан 110 кВ\nОАО «Полюс Золото»',
                    location: 'Бодайбо, Иркутская область, Россия',
                },
                products: [
                    // 'Блок ОПН 110 кВ',
                    // 'Трансформатор напряжения ЗНОГ',
                    // 'Трансформатор тока ТОГФ',
                    // 'Выключатель ВГТ 110',
                    // 'Разъединитель',
                    'Ошиновка жесткая',
                    // 'Блок разъединителя 110 кВ',
                    'Изолятор',
                ],
            },
            112: {
                name: 'Нефтеперекачивающая станция (НПС-5)',
                description: {
                    title: 'Нефтеперекачивающая станция (НПС-5)\nПАО «Транснефть»\nПодстанция комплектная трансформаторная блочная на напряжение 220/10 кВ',
                    location: 'Иркутская область',
                },
                products: [
                    // 'Трансформатор напряжения ЗНОГ 220',
                    // 'Выключатель ВГТ-220',
                    // 'Разъединитель 220',
                    // 'Трансформатор тока ТОГФ',
                    // 'Изолятор ОСК-20-20',
                    'Комплект ошиновки жесткой',
                    // 'Металлоконструкции',
                    // 'Ограничитель перенапряжения 220',
                ],
            },
            113: {
                name: 'Комсомольский НПЗ (НПС-3)',
                description: {
                    title: 'Комсомольский НПЗ\nПАО «Транснефть»\nПодстанция комплектная трансформаторная блочная на напряжение 220/10 кВ',
                    location: 'Дальний Восток, в районе Хабаровска',
                },
                products: [
                    // 'Трансформатор напряжения ЗНОГ 220',
                    // 'Выключатель ВГТ-220',
                    // 'Разъединитель 220',
                    // 'Трансформатор тока ТОГФ',
                    'Комплект ошиновки жесткой',
                    // 'Металлоконструкции',
                    // 'Ограничитель перенапряжения 220',
                    // 'Изолятор ОСК-20-20',
                ],
            },
            114: {
                name: 'ПС Лесная',
                description: {
                    title: 'ПС Лесная 220 кВ\nПАО «МОЭСК»',
                    location: 'Новая Москва\nРоссия, Москва, поселение Сосенское, посёлок Газопровод\nПримечание: В рамках проекта выполняется прокладка кабеля 220 кВ от строящейся ПС Хованская до действующей ПС Лесная',
                },
                products: [
                    // 'Разъединитель трехполюсный',
                    // 'Трансформатор тока однополюсный ТОГФ',
                    // 'Выключатели 220 кВ',
                    // 'Разъединитель однополюсный',
                    'Ошиновка жесткая',
                    // 'Металлоконструкции',
                ],
            },
            115: {
                name: 'Подстанция «Хованская»',
                description: {
                    title: 'Подстанция «Хованская» 110 кВ',
                    location: 'Новая Москва\nРоссия, Москва, поселение Сосенское, посёлок Газопровод\nПримечание: В рамках проекта выполняется прокладка кабеля 220 кВ от строящейся ПС Хованская до действующей ПС Лесная',
                },
                products: [
                    // 'Открытое распределительное устройство (ОРУ) 110 Кв',
                ],
            },
            116: {
                name: 'ПС Мамакан',
                description: {
                    title: 'Подстанция (ПС) Мамакан 220 кВ\nОАО «Полюс Золото»',
                    location: 'Бодайбо, Иркутская область, Россия',
                },
                products: [
                    // 'Блок ОПН 220 кВ',
                    // 'Трансформатор напряжения ЗНОГ',
                    // 'Трансформатор тока ТОГФ',
                    // 'Выключатель ВГТ 22 0',
                    // 'Разъединитель',
                    'Блок разъединителя 220 кВ',
                    'Изолятор',
                ],
            },
        },
        
        productsData: {
            1: {
                name:    'Выключатель элегазовый колонковый типа ВГТ-110',
                short:   'Выключатель ВГТ-110',
                desc:    'Выключатели серии ВГТ изготавливаются как в трехполюсном так и в однополюсном исполнении предназначены, для выполнения коммутационных операций (включений и отключений), а также циклов АПВ при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока 50 Гц с номинальным напряжением 110 кВ с заземленной нейтралью.',
                html:    '<p><b>Выключатель элегазовый колонковый типа ВГТ-110,</b> изготавливается:</p><ul><li>в <b>трехполюсном</b> исполнении;</li><li>в <b>однополюсном</b> исполнении;</li></ul><p><b>предназначен:</b></p><ul><li>для выполнения <b>коммутационных операций</b> (включений и отключений);</li><li>для <b>циклов АПВ</b> при заданных условиях в нормальных и аварийных режимах;</li></ul><p><b>Сеть: трехфазная</b>, переменного тока <b>50 Гц</b>, с номинальным напряжением <b>110 кВ</b>, с заземленной нейтралью.</p>',
            },
            2: {
                name:    'Выключатель элегазовый баковый типа ВТБ-110',
                desc:    'Выключатель элегазовый ВТБ-110III (в дальнейшем именуемый – «выключатель») предназначен для выполнения коммутационных операций (включений и отключений), а также циклов АПВ при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока с заземленной нейтралью (коэффициент замыкания на землю не выше 1,4) при номинальном напряжении 110 кВ и номинальной частоте 50 Гц. Выключатель не предназначен для коммутации шунтирующего реактора, и конденсаторной батареи.',
                html:    '<p><b>Выключатель элегазовый баковый типа ВТБ-110</b> предназначен:</p><ul><li>для <b>выполнения коммутационных операций</b> (включений и отключений);</li><li>для <b>циклов АПВ</b> при заданных условиях в нормальных и аварийных режимах;</li></ul><p><b>Сеть: трехфазная,</b> переменного тока, с заземленной нейтралью (коэффициент замыкания на землю <b>не выше 1,4</b>), при номинальном напряжении <b>110 кВ</b> и номинальной частоте <b>50 Гц.</b></p><p><b>Выключатель</b> предназначен для коммутации шунтирующего реактора, и конденсаторной батареи.</p>',
            },
            3: {
                name:    'Трансформатор тока газонаполненный типа ТОГФ(П)-110',
                short:   'Трансформатор ТОГФ-110',
                desc:    'Трансформаторы тока серии ТОГФ предназначены для передачи сигнала измерительной информации измерительным приборами и устройствам защиты и управления в открытых и закрытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 110, 220 кВ.',
                html:    '<p><b>Трансформаторы тока серии ТОГФ</b> предназначены:</p><ul><li>для <b>передачи сигнала измерительной информации</b> измерительным приборам и устройствам защиты и управления в открытых и закрытых распределительных устройствах переменного тока;</li><li>частота <b>50 Гц,</b> на номинальное напряжение <b>110 кВ.</b></li></ul><p>В качестве изолирующей среды используется элегаз (SF6) или азот.</p>',
            },
            4: {
                name:    'Трансформатор напряжения газонаполненный типа ЗНОГ-110',
                desc:    'Трансформаторы напряжения индуктивные газонаполненные серии ЗНОГ-110 (в дальнейшем «трансформатор напряжения») общего назначения, предназначенные для передачи сигнала измерительной информации измерительным приборам и устройствам защиты, сигнализации и управления в открытых и закрытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 110/√3 кВ.',
                html:    '<p><b>Трансформаторы напряжения индуктивные газонаполненные серии ЗНОГ-110</b> общего назначения предназначены:</p><ul><li>для <b>передачи сигнала измерительной информации</b> измерительным приборам и устройствам защиты, сигнализации и управления в открытых и закрытых распределительных устройствах переменного тока;</li><li>частота <b>50 Гц</b>, на номинальное напряжение <b>110/√3 кВ.</b></li></ul>',
            },
            5: {
                name:    'Комбинированный трансформатор тока и напряжения газонаполненный типа ТГК-110',
                short:   'Трансформатор ТГК-110',
                desc:    'Трансформаторы серии ТГК-110 предназначены для передачи сигнала измерительной информации измерительным приборам и устройствам защиты и управления в открытых и закрытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 110 кВ.',
                html:    '<p><b>Трансформаторы серии ТГК-110</b> предназначен:</p><ul><li>для <b>передачи сигнала измерительной информации</b> измерительным приборам и устройствам защиты и управления в открытых и закрытых распределительных устройствах переменного тока;</li><li>частота <b>50 Гц</b>, на номинальное напряжение <b>110 кВ.</b></li></ul>',
            },
            6: {
                name:    'Разъединитель горизонтально-поворотный типа РГ-110',
                short:   'Разъединитель РГ-110',
                desc:    'Разъединители предназначены для включения и отключения обесточенных участков электрических цепей, находящихся под напряжением, а также заземления отключенных участков при помощи заземлителей. Разъединители также используют для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.',
                html:    '<p><b>Разъединитель горизонтально-поворотный типа РГ-110</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрических цепей, находящихся под напряжением;</li><li>для <b>заземления отключенных участков</b> при помощи заземлителей.</li></ul><p><b>Разъединители</b> также используют для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.</p>',
            },
            7: {
                name:    'Разъединитель пантографного типа с вертикальным разрывом типа РПВ-110',
                short:   'Разъединитель РПВ-110',
                desc:    'Включение и отключение обесточенных участков электрической цепи, находящихся под напряжением. — Заземление отключенных участков при помощи заземлителя. — Отключение токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.',
                html:    '<p><b>Разъединитель пантографного типа с вертикальным разрывом типа РПВ-110</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрической цепи, находящихся под напряжением;</li><li>для <b>заземления отключенных участков</b> при помощи заземлителя.</li></ul><p><b>Разъединитель</b> может использоваться для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.</p>',
            },
            8: {
                name:    'Ограничитель перенапряжения типа ОПН-110',
                desc:    'Ограничители перенапряжения предназначен для защиты электрооборудования на классы напряжения 110 кВ второго (550 А) и третьего (850 А) класса по пропускной способности, работающего в сети с эффективно заземленной нейтралью (коэффициент замыкания на землю не выше 1,4), от грозовых и коммутационных перенапряжений. Ограничители перенапряжений серии ОПНН—Ф предназначен для защиты разземленной нейтрали трансформаторов на класс напряжения 110 кВ, включенных в эту нейтраль, от грозовых и коммутационных перенапряжений.',
                html:    '<p><b>Ограничитель перенапряжения типа ОПН-110</b> предназначен:</p><ul><li>для <b>защиты электрооборудования</b> на класс напряжения <b>110 кВ</b> второго (550 А) и третьего (850 А) класса по пропускной способности, работающего в сети с эффективно заземленной нейтралью (коэффициент замыкания на землю <b>не выше 1,4</b>), от грозовых и коммутационных перенапряжений.</li></ul><p><b>Ограничитель перенапряжений серии ОПНН—Ф</b> предназначен:</p><ul><li>для <b>защиты разземленной нейтрали трансформаторов</b> на класс напряжения <b>110 кВ</b>, включенных в эту нейтраль, от грозовых и коммутационных перенапряжений.</li></ul>',
            },
            9: {
                name:    'Комплектное распределительное устройство с элегазовой изоляцией типа КРУЭ-110/220',
                short:   'Распределительное устройство КРУЭ-110/220',
                desc:    'КРУЭ это высоковольтное распределительное устройство с газовой изоляцией, предназначенное для приема, распределения и передачи электрической энергии в сетях трехфазного переменного тока частоты 50 Гц номинального напряжения 110 кВ. Ячейка КРУЭ типа ЯТЭ-110Л/2500У2 представляет собой комплекс модулей: выключателей, совмещенных разъединителей-заземлителей, быстро действующего заземлителя, трансформаторов тока, соединительных элементов, вводов кабельных или воздушных, токопроводов и др., помещенных в металлическую оболочку, заполненную шестифтористой серой. Распределительное устройство с ячейками ЯТЭ-110Л/2500 производства ЗАО «ЗЭТО» разработано для применения в составе подстанций и электростанций на открытом воздухе при температуре окружающего воздуха до минус 45 °С.',
                html:    '<p><b>КРУЭ</b> это <b>высоковольтное распределительное устройство с газовой изоляцией</b>, предназначенное для приема, распределения и передачи электрической энергии в сетях <b>трехфазного переменного тока</b>, частоты <b>50 Гц</b>, номинального напряжения <b>110 кВ.</b></p><p><b>Ячейка КРУЭ типа ЯТЭ-110Л/2500У2</b> представляет собой комплекс модулей:</p><ul><li>выключателей, совмещенных разъединителей-заземлителей;</li><li>быстро действующего заземлителя;</li><li>трансформаторов тока;</li><li>соединительных элементов, вводов кабельных или воздушных, токопроводов, помещенных в металлическую оболочку, заполненную шестифтористой серой.</li></ul><p>Распределительное устройство с <b>ячейками ЯТЭ-110Л/2500</b> производства <b>завода «ЗЭТО»</b> разработано для применения в составе подстанций и электростанций на <b>открытом воздухе</b>, при <b>температуре окружающего воздуха до минус 45 °С</b>.</p>',
            },
            10: {
                name:    'Выключатель элегазовый колонковый типа ВГТ-220',
                desc:    'Выключатели серии ВГТ изготавливаются как в трехполюсном так и в однополюсном исполнении  предназначены для выполнения коммутационных операций (включений и отключений), а также циклов АПВ при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока частоты 50 Гц с номинальным напряжением 220 кВ с заземленной нейтралью.',
                html:    '<p><b>Выключатель элегазовый колонковый типа ВГТ-220</b> изготавливается:</p><ul><li>в <b>трехполюсном</b> исполнении;</li><li>в <b>однополюсном</b> исполнении;</li></ul><p><b>Выключатели серии ВГТ</b> предназначены:</p><ul><li>для выполнения <b>коммутационных операций</b> (включений и отключений);</li><li>для <b>циклов АПВ</b> при заданных условиях в нормальных и аварийных режимах.</li></ul><p><b>Сеть: трехфазного переменного тока</b>, частота <b>50 Гц</b> с номинальным напряжением <b>220 кВ</b>, с заземленной нейтралью.</p>',
            },
            11: {
                name:    'Выключатель элегазовый баковый ВТБ-220',
                desc:    'ВТБ-220',
                html:    '<p><b>Выключатель элегазовый ВТБ-220</b> предназначен:</p><ul><li>для выполнения коммутационных операций (включения и отключения) при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока с заземленной нейтралью (коэффициент замыкания на землю не выше 1,4) при номинальном напряжении 220 кВ и номинальной частоте 50 Гц.</li><li>выключатель оборудован встроенными трансформаторами тока. </li></ul><p>Выключатели баковые серии ВТБ-220 являются трехполюсными автоматическими компрессионными выключателями в исполнении для наружной установки, где в качестве изолирующего и дугогасящего средства применяется элегаз или его смесь с тетрафторметаном.</p><p>Выключатели имеют один гидравлический привод на все фазы, что позволяет им выполнять коммутации электрических цепей при нормальных и аварийных режимах работы, а также работать в циклах АПВ в сетях трехфазного переменного тока частоты 50 Гц с номинальным напряжением 220 кВ.</p>',
            },
            12: {
                name:    'Трансформатор тока газонаполненный типа ТОГФ-220',
                desc:    'Трансформаторы тока серии ТОГФ предназначены для передачи сигнала измерительной информации измерительным приборами и устройствам защиты и управления в открытых и закрытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 220 кВ.',
                html:    '<p><b>Трансформатор тока газонаполненный типа ТОГФ-220</b> предназначен:</p><ul><li>для <b>передачи сигнала измерительной информации</b> измерительным приборами и устройствам защиты и управления в открытых и закрытых распределительных устройствах переменного тока;</li><li>частота <b>50 Гц</b>, на номинальное напряжение <b>220 кВ</b>.</li></ul>',
            },
            13: {
                name:    'Трансформатор напряжения газонаполненный типа ЗНОГ-220',
                desc:    'Трансформаторы напряжения индуктивные газонаполненные серии ЗНОГ-220 (в дальнейшем «трансформатор напряжения») общего назначения, предназначенные для передачи сигнала измерительной информации измерительным приборам и устройствам защиты, сигнализации и управления в открытых и закрытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 220/√3 кВ.',
                html:    '<p><b>Трансформатор напряжения индуктивный газонаполненный, серии ЗНОГ-220</b> общего назначения, предназначен:</p><ul><li>для <b>передачи сигнала измерительной информации</b> измерительным приборам и устройствам защиты, сигнализации и управления в открытых и закрытых распределительных устройствах переменного тока;</li><li>частота <b>50 Гц</b>, на номинальное напряжение <b>220/√3 кВ</b>.</li></ul>',
            },
            
            15: {
                name:    'Разъединитель пантографного типа с вертикальным разрывом типа РПВ-220',
                desc:    'Включение и отключение обесточенных участков электрической цепи, находящихся под напряжением. — Заземление отключенных участков при помощи заземлителя. — Отключение токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.',
                html:    '<p><b>Разъединитель пантографного типа с вертикальным разрывом типа РПВ-220</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрической цепи, находящихся под напряжением;</li><li>для <b>заземления отключенных</b> участков при помощи заземлителя.</li></ul><p><b>Разъединитель</b> может использоваться для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.</p>',
            },
            16: {
                name:    'Ограничитель перенапряжения типа ОПН-220',
                desc:    'Ограничитель перенапряжения типа ОПН-220 предназначен для защиты электрооборудования на классы напряжения 220 кВ второго (550 А) и третьего (850 А) класса по пропускной способности, работающего в сети с эффективно заземленной нейтралью (коэффициент замыкания на землю не выше 1,4), от грозовых и коммутационных перенапряжений. Ограничители перенапряжений серии ОПНН—Ф предназначены для защиты разземленной нейтрали трансформаторов на класс напряжения 220 кВ, включенных в эту нейтраль, от грозовых и коммутационных перенапряжений.',
                html:    '<p><b>Ограничитель перенапряжения типа ОПН-220</b> предназначен:</p><ul><li>для <b>защиты электрооборудования</b> на классы напряжения <b>220 кВ</b> второго (550 А) и третьего (850 А) класса по пропускной способности, работающего в сети с эффективно заземленной нейтралью (коэффициент замыкания на землю <b>не выше 1,4</b>), от грозовых и коммутационных перенапряжений.</li></ul><p><b>Ограничитель перенапряжений серии ОПНН—Ф</b> предназначен:</p><ul><li>для <b>защиты разземленной нейтрали трансформаторов</b> на класс напряжения <b>220 кВ</b>, включенных в эту нейтраль, от грозовых и коммутационных перенапряжений.</li></ul>',
            },
            17: {
                name:    'Выключатель колонковый ВГТ-330',
                short:   'Выключатель ВГТ-330',
                desc:    'Выключатели серии ВГТ изготавливаются как в трехполюсном так и в однополюсном исполнении  предназначены для выполнения коммутационных операций (включений и отключений), а также циклов АПВ при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока частоты 50 Гц с номинальным напряжением 330 кВ с заземленной нейтралью.',
                html:    '<p>Выключатели предназначены для выполнения коммутационных операций (включений и отключений), а также циклов АПВ при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока частоты 50 Гц с номинальным напряжением 330 кВ с заземленной нейтралью.</p><p>Выключатели предназначены для работы в условиях нормальных значений климатических факторов внешней среды в соответствии с ГОСТ 15150 и ГОСТ 15543.1-климатическое исполнение У или УХЛ*, категория размещения 1.</p><p>Во всем неоговоренном выключатели соответствуют требованиям ГОСТ Р 52565 «Выключатели переменного тока на напряжения от 3 до 750 кВ.</p>',
            },
            18: {
                name:    'Выключатель колонковый ВГТ-500',
                desc:    'Выключатели серии ВГТ изготавливаются как в трехполюсном так и в однополюсном исполнении  предназначены для выполнения коммутационных операций (включений и отключений), а также циклов АПВ при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока частоты 50 Гц с номинальным напряжением 500 кВ с заземленной нейтралью.',
                html:    '<p>Выключатели предназначены для выполнения коммутационных операций (включений и отключений), а также циклов АПВ при заданных условиях в нормальных и аварийных режимах в сетях трехфазного переменного тока частоты 50 Гц с номинальным напряжением 500 кВ с заземленной нейтралью. </p><p>Выключатели предназначены для работы в условиях нормальных значений климатических факторов внешней среды в соответствии с ГОСТ 15150 и ГОСТ 15543.1-климатическое исполнение У или УХЛ*, категория размещения 1.</p><p>Во всем неоговоренном выключатели соответствуют требованиям ГОСТ Р 52565 «Выключатели переменного тока на напряжения от 3 до 750 кВ.</p>',
            },
            19: {
                name:    'Трансформатор тока газонаполненный типа ТОГФ-330',
                short:   'Трансформатор ТОГФ-330',
                desc:    'Трансформатор тока серии ТОГФ-330 предназначен для передачи сигнала измерительной информации измерительным приборам и устройствам защиты и управления в открытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 330 кВ.',
                html:    '<p><b>Трансформатор тока газонаполненный типа ТОГФ-330</b> предназначен:</p><ul><li>для <b>передачи сигнала измерительной информации</b> измерительным приборам и устройствам защиты и управления в открытых распределительных устройствах переменного тока;</li><li>частота <b>50 Гц</b>, на номинальное напряжение <b>330 кВ</b>.</li></ul>',
            },
            20: {
                name:    'Трансформатор тока газонаполненный типа ТОГФ(П)-500',
                desc:    'ТОГФ-500Трансформатор тока серии ТОГФ-500 предназначен для передачи сигнала измерительной информации измерительным приборам и устройствам защиты и управления в открытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 500 кВ.',
                html:    '<p><b>Трансформатор тока газонаполненный типа ТОГФ(П)-500</b> предназначен:</p><ul><li>для <b>передачи сигнала измерительной информации</b> измерительным приборам и устройствам защиты и управления в открытых распределительных устройствах переменного тока; </li><li>частота <b>50 Гц</b>, на номинальное напряжение <b>500 кВ</b>.</li></ul>',
            },
            21: {
                name:    'Трансформатор напряжения емкостной ЕТН-ЗЭТО-330',
                desc:    'Трансформаторы напряжения серии ЕТН предназначены для передачи сигнала измерительной информации измерительным приборам (преобразователям) и устройствам защиты и управления в открытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 330 кВ. Основная задача емкостных трансформаторов напряжения - коммерческий учет электроэнергии, а также передача сигнала измерительной информации приборам, устройствам защиты и управления, обеспечения высокочастотной связи(30 кГц-500 кГц), в электрических системах переменного тока частотой 50-60 Гц с номинальным напряжением 110 – 500 кВ.',
                html:    '<p>Измерительные трансформаторы напряжения емкостного типа являются масштабными измерительными преобразователями и предназначены для работы в электрических сетях 330 кВ переменного тока частотой 50 Гц.</p><p>В основе принципа действия емкостного трансформатора напряжения лежит двухступенчатое понижение напряжения. В качестве первой ступени используется емкостной делитель напряжения, вторая ступень представляет собой трансформатор электромагнитного типа.</p><p>Основной задачей емкостных трансформаторов напряжения, является коммерческий учет электроэнергии, а также передача сигнала измерительной информации приборам, устройствам защиты и управления. При помощи данных трансформаторов также возможно организовать высокочастотную связь.</p>',
            },
            22: {
                name:    'Трансформатор напряжения емкостной ЕТН-ЗЭТО-500',
                desc:    'Трансформаторы напряжения серии ЕТН предназначены для передачи сигнала измерительной информации измерительным приборам (преобразователям) и устройствам защиты и управления в открытых распределительных устройствах переменного тока частоты 50 Гц на номинальное напряжение 330 кВ. Основная задача емкостных трансформаторов напряжения - коммерческий учет электроэнергии, а также передача сигнала измерительной информации приборам, устройствам защиты и управления, обеспечения высокочастотной связи(30 кГц-500 кГц), в электрических системах переменного тока частотой 50-60 Гц с номинальным напряжением 110 – 500 кВ.',
                html:    '<p>Измерительные трансформаторы напряжения емкостного типа являются масштабными измерительными преобразователями и предназначены для работы в электрических сетях 500 кВ переменного тока частотой 50 Гц.</p><p>В основе принципа действия емкостного трансформатора напряжения лежит двухступенчатое понижение напряжения. В качестве первой ступени используется емкостной делитель напряжения, вторая ступень представляет собой трансформатор электромагнитного типа.</p><p>Основной задачей емкостных трансформаторов напряжения, является коммерческий учет электроэнергии, а также передача сигнала измерительной информации приборам, устройствам защиты и управления. При помощи данных трансформаторов также возможно организовать высокочастотную связь.</p>',
            },
            23: {
                name:    'Разъединитель горизонтально-поворотный типа РГ-330',
                short:   'Разъединитель РГ-330',
                desc:    'РГ-330',
                html:    '<p><b>Разъединитель горизонтально-поворотный типа РГ-330</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрических цепей, находящихся под напряжением;</li><li>для <b>заземления отключенных участков</b> при помощи заземлителей.</li></ul><p><b>Разъединитель</b> выполнен в виде отдельных полюсов горизонтально-поворотного типа.</p><p><b>Разъединитель</b> изготавливается с <b>одним</b> или <b>двумя</b> заземлителями.</p>',
            },
            24: {
    
                name:    'Разъединитель горизонтально-поворотный типа РГ-500',
                desc:    'Разъединители предназначены для включения и отключения обесточенных участков электрических цепей, находящихся под напряжением, а также заземления отключенных участков при помощи заземлителей. Разъединители выполнены в виде отдельных полюсов горизонтально-поворотного типа. В зависимости от заказа разъединители изготовливаются с одним или двумя заземлителями.',
                html:    '<p><b>Разъединитель горизонтально-поворотный типа РГ-500</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрических цепей, находящихся под напряжением,</li><li>для <b>заземления отключенных участков</b> при помощи заземлителей.</li></ul><p><b>Разъединитель</b> выполнен в виде отдельных полюсов горизонтально-поворотного типа.</p><p><b>Разъединитель</b> изготавливается с <b>одним</b> или <b>двумя</b> заземлителями.</p>',
            },
            25: {
                name:    'Разъединитель пантографного типа с вертикальным разрывом типа РПВ-330',
                short:   'Разъединитель РПВ-330',
                desc:    'Включение и отключение обесточенных участков электрической цепи, находящихся под напряжением. — Заземление отключенных участков при помощи заземлителя. — Отключение токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.',
                html:    '<p><b>Разъединитель пантографного типа с вертикальным разрывом типа РПВ-330</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрической цепи, находящихся под напряжением;</li><li>для <b>заземления отключенных участков</b> при помощи заземлителя.</li></ul><p><b>Разъединитель</b> может использоваться для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.</p>',
            },
            26: {
                name:    'Разъединитель пантографного типа с вертикальным разрывом типа РПВ-500',
                desc:    'Включение и отключение обесточенных участков электрической цепи, находящихся под напряжением. — Заземление отключенных участков при помощи заземлителя. — Отключение токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.',
                html:    '<p><b>Разъединитель пантографного типа с вертикальным разрывом типа РПВ-500</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрической цепи, находящихся под напряжением;</li><li>для <b>заземления отключенных участков</b> при помощи заземлителя.</li></ul><p><b>Разъединитель</b> может использоваться для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.</p>',
            },
            27: {
                name:    'Разъединитель полупантографного типа с горизонтальным разрывом типа РПГ-330',
                desc:    'Разъединители предназначены для включения и отключения обесточенных участков электрической цепи, находящихся под напряжением. Разъединители изготавливаются в виде отдельных полюсов. Полюс разъединителя представляет собой аппарат со складывающимся в вертикальной плоскости контактным ножом, который устанавливается на одном из двух опорных изоляторов. На втором опорном изоляторе устанавливается неподвижный контакт разъединителя. Движение от привода на контактный нож передается через поворотный изолятор системой тяг и рычагов. Разъединители в зависимости от заказа изготавливаются с одним или двумя заземлителями. Между контактным ножом и заземлителями предусмотрены механическая, электрическая и электромагнитная блокировки. Управление контактным ножом и заземлителями осуществляется электродвигательными приводами типа ПД—11УХЛ1 с дистанционным управлением. Приводы комплектуются коммутирующими устройствами типа КСАМ 12 и модернизированной электромагнитной блокировкой. Опорные фарфоровые изоляторы разъединителей устанавливаются на опорные стойки, входящие в комплект поставки.',
                html:    '<p><b>Разъединитель полупантографного типа с горизонтальным разрывом типа РПГ-330</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрической цепи, находящихся под напряжением.</li></ul><p><b>Разъединитель</b> изготавливается в виде отдельных полюсов. <b>Полюс разъединителя</b> представляет собой аппарат со складывающимся в вертикальной плоскости контактным ножом, который устанавливается на одном из двух опорных изоляторов. На втором опорном изоляторе устанавливается неподвижный контакт разъединителя. Движение от привода на контактный нож передается через поворотный изолятор системой тяг и рычагов. </p><p><b>Разъединитель</b> изготавливается с <b>одним</b> или <b>двумя</b> заземлителями. Между контактным ножом и заземлителями предусмотрены: механическая, электрическая и электромагнитная блокировки. Опорные фарфоровые изоляторы разъединителей устанавливаются на опорные стойки, входящие в комплект поставки.</p>',
            },
            28: {
                name:    'Разъединитель полупантографного типа с горизонтальным разрывом типа РПГ-500',
                desc:    'Разъединители предназначены для включения и отключения обесточенных участков электрической цепи, находящихся под напряжением, a также заземления отключенных участков при помощи заземлителей. Разъединители изготавливаются в виде отдельных полюсов. Полюс разъединителя представляет собой аппарат со складывающимся в вертикальной плоскости контактным ножом, который устанавливается на одном из двух опорных изоляторов. На втором опорном изоляторе устанавливается неподвижный контакт разъединителя. Движение от привода на контактный нож передается через поворотный изолятор системой тяг и рычагов. Разъединители в зависимости от заказа изготавливаются с одним или двумя заземлителями. Между контактным ножом и заземлителями предусмотрены механическая, электрическая и электромагнитная блокировки. Управление контактным ножом и заземлителями осуществляется электродвигательными приводами типа ПД—11УХЛ1 с дистанционным управлением. Приводы комплектуются коммутирующими устройствами типа КСАМ 12 и модернизированной электромагнитной блокировкой. Опорные фарфоровые изоляторы разъединителей устанавливаются на опорные стойки, входящие в комплект поставки.',
                html:    '<p><b>Разъединитель полупантографного типа с горизонтальным разрывом типа РПГ-500</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрической цепи, находящихся под напряжением; </li><li>для <b>заземления отключенных участков</b> при помощи заземлителей.</li></ul><p>Разъединитель изготавливается в виде <b>отдельных полюсов</b>. <b>Полюс разъединителя</b> представляет собой аппарат со складывающимся в вертикальной плоскости контактным ножом, который устанавливается на одном из двух опорных изоляторов.</p><p>Опорные фарфоровые изоляторы разъединителей устанавливаются на опорные стойки, входящие в комплект поставки.</p>',
            },
            29: {
                name:    'Разъединитель полупантографного типа с горизонтальным разрывом типа РПГ-750',
                desc:    'Разъединители предназначены для включения и отключения обесточенных участков электрической цепи, находящихся под напряжением, a также заземления отключенных участков при помощи заземлителей. Разъединители изготавливаются в виде отдельных полюсов. Полюс разъединителя представляет собой аппарат со складывающимся в вертикальной плоскости контактным ножом, который устанавливается на одном из двух опорных изоляторов. На втором опорном изоляторе устанавливается неподвижный контакт разъединителя. Движение от привода на контактный нож передается через поворотный изолятор системой тяг и рычагов. Разъединители в зависимости от заказа изготавливаются с одним или двумя заземлителями. Между контактным ножом и заземлителями предусмотрены механическая, электрическая и электромагнитная блокировки. Управление контактным ножом и заземлителями осуществляется электродвигательными приводами типа ПД—11УХЛ1 с дистанционным управлением. Приводы комплектуются коммутирующими устройствами типа КСАМ 12 и модернизированной электромагнитной блокировкой. Опорные фарфоровые изоляторы разъединителей устанавливаются на опорные стойки, входящие в комплект поставки.',
                html:    '<p><b>Разъединитель полупантографного типа с горизонтальным разрывом типа РПГ-750</b> предназначен:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрической цепи, находящихся под напряжением;</li><li>для <b>заземления отключенных участков</b> при помощи заземлителей.</li></ul><p><b>Разъединители</b> изготавливаются в виде <b>отдельных полюсов</b>. <b>Полюс разъединителя</b> представляет собой аппарат со складывающимся в вертикальной плоскости контактным ножом, который устанавливается на одном из двух опорных изоляторов. На втором опорном изоляторе устанавливается неподвижный контакт разъединителя. Движение от привода на контактный нож передается через поворотный изолятор системой тяг и рычагов. </p><p>Разъединитель изготавливаются с <b>одним</b> или <b>двумя</b> заземлителями. Между контактным ножом и заземлителями предусмотрены механическая, электрическая и электромагнитная блокировки. Опорные фарфоровые изоляторы разъединителей устанавливаются на опорные стойки, входящие в комплект поставки.</p>',
            },
            30: {
                name:    'Ограничитель перенапряжения с полимерной внешней изоляцией ОПН-330',
                desc:    'Ограничитель перенапряжения с полимерной внешней изоляцией ОПН-330 предназначен для защиты изоляции электрооборудования на классы напряжения 330 и 500 кВ переменного тока промышленной частоты 50 Гц, работающего в сетях с заземленной нейтралью (коэффициент замыкания на землю не выше 1,4), от грозовых и коммутационных перенапряжений. Ограничители перенапряжений подключаются параллельно защищаемому объекту.',
                html:    '<p><b>Ограничитель перенапряжения с полимерной внешней изоляцией ОПН-330</b> предназначен:</p><ul><li>для <b>защиты изоляции электрооборудования</b> на классы напряжения <b>330 кВ</b> переменного тока, промышленной частоты <b>50 Гц</b>, работающего в сетях с заземленной нейтралью (коэффициент замыкания на землю <b>не выше 1,4</b>), от грозовых и коммутационных перенапряжений.</li></ul><p><b>Ограничитель</b> перенапряжений подключаются параллельно защищаемому объекту.</p>',
            },
            31: {
                name:    'Ограничитель перенапряжения с полимерной внешней изоляцией ОПН-500',
                title:   'ОПН-500',
                desc:    'Ограничители перенапряжений нелинейные с полимерной внешней изоляцией предназначены для защиты изоляции электрооборудования на классы напряжения 330 и 500 кВ переменного тока промышленной частоты 50 Гц, работающего в сетях с заземленной нейтралью (коэффициент замыкания на землю не выше 1,4), от грозовых и коммутационных перенапряжений. Ограничители перенапряжений подключаются параллельно защищаемому объекту.',
                html:    '<p><b>Ограничитель перенапряжения с полимерной внешней изоляцией ОПН-500</b> предназначен:</p><ul><li>для <b>защиты изоляции электрооборудования</b> на классы напряжения <b>500 кВ</b> переменного тока, промышленной частоты <b>50 Гц</b>, работающего в сетях с заземленной нейтралью (коэффициент замыкания на землю <b>не выше 1,4</b>), от грозовых и коммутационных перенапряжений.</li></ul><p><b>Ограничитель</b> перенапряжений подключаются параллельно защищаемому объекту.</p>',
            },
            32: {
                name:    'Изоляторы опорные серии ОСК',
                desc:    'Изоляторы опорные серии ОСК (типы: ОСК2—10—А—2УХЛ1, ОСК5—35—А—3УХЛ1, ОСК5—35—Б—3УХЛ1, ОСК10—110—А—2УХЛ1, ОСК10—110—Б—2УХЛ1, ОСК10—110—В—2УХЛ1, ОСК10—110—Г—3УХЛ1) предназначены для изоляции и крепления токоведущих частей в электрических аппаратах и распределительных устройствах электрических станций и подстанций и ВЛ на напряжение 10, 35 и 110 кВ с частотой до 100 Гц.',
                html:    '<p><b>Изоляторы опорные серии ОСК</b>, типы: </p><ul><li>ОСК2—10—А—2УХЛ1, ОСК5—35—А—3УХЛ1, ОСК5—35—Б—3УХЛ1; </li><li>ОСК10—110—А—2УХЛ1, ОСК10—110—Б—2УХЛ1, ОСК10—110—В—2УХЛ1, ОСК10—110—Г—3УХЛ1;</li></ul><p>предназначены: </p><ul><li>для <b>изоляции и крепления</b> токоведущих частей в электрических аппаратах и распределительных устройствах электрических станций и подстанций и <b>ВЛ</b>, на напряжение <b>10</b>, <b>35</b> и <b>110 кВ</b>, с частотой до <b>100 Гц</b>.</li></ul>',
            },
            33: {
                name:    'Разъединители серии РЛНД-10',
                desc:    'Разъединители серии РЛНД—10 предназначены для включения и отключения обесточенных участков цепи высокого напряжения, а также заземления отключенныхучастков при помощи стационарных заземлителей.',
                html:    '<p><b>Разъединители серии РЛНД—10</b> предназначены:</p><ul><li>для <b>включения и отключения</b> обесточенных участков цепи высокого напряжения;</li><li>для <b>заземления отключенных участков</b> при помощи стационарных заземлителей.</li></ul>',
            },
            34: {
                name:    'Разъединители горизонтально-поворотного типа РГ-35 (УХЛ1)',
                desc:    'Разъединители предназначены для включения и отключения обесточенных участков электрических цепей, находящихся под напряжением, а также заземления отключенных участков при помощи заземлителей. Разъединители также используют для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.',
                html:    '<p><b>Разъединители горизонтально-поворотного типа РГ-35 (УХЛ1)</b> предназначены:</p><ul><li>для <b>включения и отключения</b> обесточенных участков электрических цепей, находящихся под напряжением;</li><li>для <b>заземления отключенных участков</b> при помощи заземлителей.</li></ul><p><b>Разъединители</b> также используют для отключения токов холостого хода трансформаторов и зарядных токов воздушных и кабельных линий.</p>',
            },
            35: {
                name:    'Изоляторы линейные подвесные ЛК-70/35 (УХЛ1), 35 кВ',
                desc:    'Изоляторы линейные подвесные стержневые полимерные типа ЛК предназначены для изоляции и крепления проводов воздушных линий электропередачи и в распределительных устройствах электростанций и подстанций переменного тока напряжением от 35 до 500 кВ частотой до 100 Гц.',
                html:    '<p><b>Изоляторы линейные подвесные ЛК-70/35 (УХЛ1)</b>, стержневые, полимерные, типа <b>ЛК</b>, предназначены:</p><ul><li>для <b>изоляции и крепления</b> проводов воздушных линий электропередачи, в распределительных устройствах электростанций и подстанций переменного тока напряжением от <b>35</b> до <b>500 кВ</b>, частотой до <b>100 Гц</b>.</li></ul>',
            },
            36: {
                name:    'БМ - ОРУ 110кВ, компоновочные решения для ОРУ',
                desc:    'ОРУ выполняются из блоков со смонтированными аппаратами высокого напряжения и элементов ошиновки. В зависимости...',
                html:    '<p><b>БМ - ОРУ 110кВ, компоновочные решения для ОРУ</b></p><p>ОРУ выполняются из блоков со смонтированными аппаратами высокого напряжения и элементов ошиновки. В зависимости от реализуемой схемы подстанции. Блоки состоят из разъединителя – трансформатора тока – выключателя или разъединителя–ограничителя перенапряжения-трансформатора напряжения.</p><p>Модули предназначены для приема и распределения электрической энергии трехфазного переменного тока частотой 50 Гц, номинальным напряжением 110 кВ, в составе подстанции и используется для электроснабжения промышленных и коммунальных потребителей, сельскохозяйственных районов и крупных строительств, а также на стороне 110 кВ крупных сетевых подстанций и, при соответствующих условиях, на электрических станциях.</p><p>Концепция модуля позволяет выполнять ОРУ–110 кВ любой конфигурации (как по стандартным, так и по индивидуальным схемам).</p>',
            },
            37: {
                name:    'БМ - ОРУ 220кВ, компоновочные решения для ОРУ',
                desc:    'ОРУ выполняются из блоков со смонтированными аппаратами высокого напряжения и элементов ошиновки. В зависимости...',
                html:    '<p><b>БМ - ОРУ 220кВ, компоновочные решения для ОРУ</b></p><p>ОРУ выполняются из блоков со смонтированными аппаратами высокого напряжения и элементов ошиновки. В зависимости от реализуемой схемы подстанции. Блоки состоят из разъединителя – трансформатора тока – выключателя или разъединителя–ограничителя перенапряжения-трансформатора напряжения.</p><p>Модули предназначены для приема и распределения электрической энергии трехфазного переменного тока частотой 50 Гц, номинальным напряжением 220 кВ, в составе подстанции и используется для электроснабжения промышленных и коммунальных потребителей, сельскохозяйственных районов и крупных строительств, а также на стороне 220 кВ крупных сетевых подстанций и, при соответствующих условиях, на электрических станциях.</p><p>Концепция модуля позволяет выполнять ОРУ–220 кВ любой конфигурации (как по стандартным, так и по индивидуальным схемам).</p>',
            },
            38: {
                name:    'КМ - ОРУ 110 кВ, компоновочные решения для ОРУ',
                desc:    'Модули предназначены для приема и распределения электрической энергии трехфазного переменного тока частотой 50 Гц...',
                html:    '<p><b>КМ - ОРУ 110 кВ, компоновочные решения для ОРУ</b></p><p>Модули предназначены для приема и распределения электрической энергии трехфазного переменного тока частотой 50 Гц, номинальным напряжением 110 кВ, в составе подстанции и используется для электроснабжения промышленных и коммунальных потребителей, сельскохозяйственных районов и крупных строительств, а также на стороне 110 кВ крупных сетевых подстанций и, при соответствующих условиях, на электрических станциях.</p><p>Концепция модуля позволяет выполнять ОРУ–110 кВ любой конфигурации (как по стандартным, так и по индивидуальным схемам). </p>',
            },
            39: {
                name:    'КРУ ZETO-6(10), 20 кВ, комплектные распределительные устройства',
                desc:    'Комплектные распределительные устройства серии КРУ ZETO напряжением 6 и 10 кВ предназначены для распределительных устройств переменного трехфазного тока частотой 50 Гц систем с изолированной нейтралью или заземленной через дугогасительный реактор.',
                html:    '<p>Комплектные распределительные устройства серии КРУ ZETO напряжением 6 и 10 кВ предназначены для распределительных устройств переменного трехфазного тока частотой 50 Гц систем с изолированной нейтралью или заземленной через дугогасительный реактор.</p><p>Вид климатического исполнения У и УХЛ с ограничениями по температуре, категория размещения 3 и 4 по ГОСТ 15150-69 и ГОСТ 15543.1-89, при этом:</p><ul><li>значение температуры окружающего воздуха от минус 25°С до плюс 40°С.</li><li>высота над уровнем моря не более 1000 м.</li><li>окружающая среда не взрывоопасная, не содержащая токопроводящей пыли, агрессивных паров и газов, в концентрациях, разрушающих металлы и изоляцию.</li><li>номинальный режим работы — продолжительный.</li><li>рабочее положение в пространстве — вертикальное, допустимое отклонение - не более 2 градусов от вертикали.</li></ul>',
            }
        },
        
        keyProjects: {
            info1: '<b>За время работы завода «ЗЭТО»</b><br />оборудование поставлялось<br />более чем на <b>100 000 объектов</b> России и зарубежья',
            info2: '<b>Ежегодно завод «ЗЭТО»</b><br />поставляет оборудование<br />более чем на <b>2000 объектов</b> в России и за рубеж',
        }
    },
}

export default Languages[appConfig.locale]
