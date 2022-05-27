import React, {Component, Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import VideoContainer from '../../components/VideoContainer';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import Layout from '../../components/Layout';
import { ArrowIcon } from '../../components/svg/ArrowIcon';

import './Aes.scss'
import { AesSvg } from './svg/AesSvg';

import ReactorPic1 from '../../assets/img/Scheme-2.gif'
import ReactorPic2 from '../../assets/img/Scheme-3.gif'
import ReactorPic3 from '../../assets/img/Scheme-4.gif'

import Gradeer from "../../assets/img/aes/1.png"
import TurbinBuild from "../../assets/img/aes/2.png"
import ReactorBuild from "../../assets/img/aes/3.png"
import ReactorHelpBuild from "../../assets/img/aes/4.png"
import Pool from "../../assets/img/aes/5.png"
import CleaningBuild from "../../assets/img/aes/6.png"
import RdesBdes from "../../assets/img/aes/7.png"
import ChemicalCleaning from "../../assets/img/aes/8.png"
import StartReserve from "../../assets/img/aes/9.png"
import ElectricBuild from "../../assets/img/aes/10.png"


import { Modal } from '../Modal/Modal';

export const Aes = (props) => {
    const {step} = props;
    const [isPumpOpened, setIsPumpOpened] = useState(false);
    const [isRdesOpened, setIsRdesOpened] = useState(false);
    const [isElectric1Opened, setIsElectric1Opened] = useState(false);
    const [isElectric2Opened, setIsElectric2Opened] = useState(false);
    const [isCleaningOpened, setIsCleaningOpened] = useState(false);
    const [isCleaning2Opened, setIsCleaning2Opened] = useState(false);
    const [isPoolsOpened, setIsPoolsOpened] = useState(false);
    const [isReactorOpened, setIsReactorOpened] = useState(false);
    const [isSecondReactorOpened, setIsSecondReactorOpened] = useState(false);
    const [isBoilerOpened, setIsBoilerOpened] = useState(false);
    const [isTurbineOpened, setIsTurbineOpened] = useState(false);
    

    const onPumpClick = () => {
        setIsPumpOpened(!isPumpOpened);
    };
    const onRdesClick = () => {
        setIsRdesOpened(!isRdesOpened);
    };
    const onElectric1Click = () => {
        setIsElectric1Opened(!isElectric1Opened);
    };
    const onElectric2Click = () => {
        setIsElectric1Opened(!isElectric1Opened);
    };
    const onCleaningClick = () => {
        setIsCleaningOpened(!isCleaningOpened);
    };
    const onCleaning2Click = () => {
        setIsCleaning2Opened(!isCleaning2Opened);
    };
    const onPoolsClick = () => {
        setIsPoolsOpened(!isPoolsOpened);
    };
    const onReactorClick = () => {
        setIsReactorOpened(!isReactorOpened);
    };
    const onSecondReactorClick = () => {
        setIsSecondReactorOpened(!isSecondReactorOpened);
    };
    const onBoilerClick = () => {
        setIsBoilerOpened(!isBoilerOpened);
    };
    const onTurbineClick = () => {
        setIsTurbineOpened(!isTurbineOpened);
    };

    return (
        <div className='aes'>
            {/* <div className='aes__pic'>
                <img alt='' src={AesPic} />
            </div> */}
            <AesSvg className='aes__svg'
                step={step}
                onPumpClick={onPumpClick}
                onRdesClick={onRdesClick}
                onElectric1Click={onElectric1Click}
                onElectric2Click={onElectric2Click}
                onCleaningClick={onCleaningClick}
                onCleaning2Click={onCleaning2Click}
                onPoolsClick={onPoolsClick}
                onReactorClick={onReactorClick}
                onSecondReactorClick={onSecondReactorClick}
                onBoilerClick={onBoilerClick}
                onTurbineClick={onTurbineClick}
            />

            <Modal isOpened={isPumpOpened} onClose={() => {setIsPumpOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Градирня</h3>
                    <img class='modal__image' src={Gradeer} alt="Градирня" />
                    <div class='text'>
                        Градирня (охладительная башня)-устройство для охлаждения большого количества воды направленным потоком атмосферного воздуха.
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isRdesOpened && step !== 'a3'} onClose={() => {setIsRdesOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>РДЭС/БДЭС (UBN)</h3>
                    <img class='modal__image' src={RdesBdes} alt="РДЭС/БДЭС" />
                    <div class='text'>
                        Предназначены для размещения оборудования системы аварийного электроснабжения и дизель-генератора, который является автономным источником электроснабжения потребителей собственных нужд АЭС, важных для безопасности и обеспечивающих сохранность основного оборудования в режиме обесточивания.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isRdesOpened && step === 'a3'} onClose={() => {setIsRdesOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А3.1</div>подэтап</div>
                    <h3>Гидравлические испытания и циркуляционная промывка первого контура</h3>
                    <div class='text'>
                        Выполняются гидравлические испытания первого контура и парогенераторов по второму контуру на плотность (3,2 МПа и 1,96 МПа), наработка ГЦНА (гшлавный циркуляционный насосный агрегат), комплексные испытания систем безопасности, наладка и поддержания водно-химического режима РУ (реакторной установки), первого контура и парогенератора. Выполняется циркуляционная промывка первого контура.
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isElectric1Opened} onClose={() => {setIsElectric1Opened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Электрические здания</h3>
                    <img class='modal__image' src={ElectricBuild} alt="Электрические здания" />
                    <div class='text'>
                        Предназначены для размещения электротехнических систем и систем контроля нормальной эксплуатации и включает в себя обеспечивающие системы вентиляции ,водоснабжения, канализации и пожаротушения.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isCleaningOpened} onClose={() => {setIsCleaningOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Здание химводоочистки (UGD)</h3>
                    <img class='modal__image' src={ChemicalCleaning} alt="Здание химводоочистки" />
                    <div class='text'>
                        Получение технической воды с заданными параметрами качества для потребителей АЭС
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isCleaning2Opened} onClose={() => {setIsCleaning2Opened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Очистные сооружения</h3>
                    <img class='modal__image' src={CleaningBuild} alt="Очистные сооружения" />
                    <div class='text'>
                        Предназначены для очистки сточных вод, образующихся в ходе эксплуатации АЭС и в период выпадения дождей и таяния снега.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isPoolsOpened} onClose={() => {setIsPoolsOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Брызгальные бассейны</h3>
                    <img class='modal__image' src={Pool} alt="Брызгальные бассейны" />
                    <div class='text'>
                        Резервуары с системой напорных трубопроводов, распределяющих охлаждаемую воду между разбрызгивающими соплами. Охлажденная вода подается через насосную станцию на ответственные потребители.
                    </div>
                </div>
            </Modal>

            <Modal 
                isOpened={isReactorOpened && step !== 'a2' && step !== 'a3' && step !== 'a4' && step !== 'b0' && step !== 'b1' && step !== 'b2'} 
                onClose={() => {setIsReactorOpened(false)}}
            >
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Здание реактора (UJA)</h3>
                    <img class='modal__image' src={ReactorBuild} alt="Здание реактора" />
                    <div class='text'>
                    Выполняется разборка реактора после ХГО, ревизия оборудования РУ и первого контура, оценка технического состояния после испытаний на ХГО. Выполняется подготовка грузо-подъемного и транспортно-технологического оборудования к загрузке ядерного топлива в реактор. Выполняются борным промывки реактора, систем первого контура и систем безопасности. Заканчиваются проверки и испытания систем АСУ ТП, ответственных за контроль работы реактора (АКНП, СУЗ, СВРК, СПНИ и тд). Энергоблок проходит проверку готовности регулирующими контролирующими органами и получает разрешение на начало загрузки ядерного топлива и физического пуска реактора.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a2'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А2</div>подэтап</div>
                    <h3>Испытания СГО (Система герметичных охлаждений)</h3>
                    <div class='text'>
                        <div className='modal__subtext'>
                            Проверяется плотность и прочность герметичных ограждений (внутренней защитной оболочки).
                        </div>
                        <p>Проводится проверка герметичного ограждения на прочность и герметичность, выполняется замер утечек из гермоограждения, выполняется замеры и анализ динамики фактического напряженно-деформированного состояния конструкций защитной оболочки.</p>
                        <p><b>Герметичное ограждение</b> – совокупность элементов строительных и других конструкций, которые ограждают пространство вокруг реакторной установки или другого объекта, содержащего радиоактивные вещества и образуют предусмотренную проектом границу и препятствуют распространению радиоактивных веществ.</p>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.A3}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А3</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a3'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А3.2</div>подэтап</div>
                    <h3>Горячая обкатка реакторной установки</h3>
                    <div className='modal__subtext'>До ее начала - наложение теплоизоляции на первый контур и парогенератор и монтаж приводов СУЗ. Возможно проведение первой ревизии (обследование) оборудования.</div>
                    <div class='text'>
                        На «горячей фазе» выполняется разогрев РУ с имитационной зоной до номинальных параметрах и проверка параметров работы. Выполняются тензометрирование, теплогидравлические испытания, термометрирование, измерение пульсаций давления, вибраций и перемещений оборудования при разогреве, проверка соответствия полученных результатов проектным требованиям. В машзале выполняются подготовка и постановка турбины на валоповоротное устройство, набор вакуума в кондесаторах, испытания БРУ-К (быстродействующая редукционная установка сброса пара в конденсаторы турбины), наладка и испытания оборудования второго контура и турбинного отделения. Выполняется проверка систем электроснабжения собственных нужд, испытаний систем аварийного электроснабжения, в том числе испытания по кратковременному перерыву электропитания и полному обесточиванию.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a4'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А4</div> Подэтап</div>
                    <h3>Ревизия основного оборудования</h3>
                    <div class='text'>
                        <div className='modal__subtext'>Подэтап, в течение которого производятся ревизия основного оборудования после ХГО.</div>
                        <ul>
                            <li>Выполняется разборка реактора после ХГО, ревизия дефектного и выбранного оборудования оборудования РУ и первого контура, оценка технического состояния после испытаний на ХГО.</li>
                            <li>Выполняется подготовка грузоподъемного и транспортно-технологического оборудования к загрузке ядерного топлива в реактор.</li>
                            <li>Выполняются промывки реактора борным раствором, а также систем первого контура и систем безопасности. Создаются регламентные запасы борного раствора.</li>
                            <li>Заканчиваются проверки и испытания различных систем АСУ ТП (<b>АСУ ТП - автоматизированные системы управления технологическими процессами</b>), ответственных за контроль работы реактора. Энергоблок проходит проверку готовности регулирующими контролирующими органами и получает разрешение на начало загрузки ядерного топлива и физического пуска реактора.</li>
                        </ul>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'b0'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>Б</div>этап</div>
                    <h3>Физический пуск</h3>
                    <div class='text'>
                        Этап ввода блока АЭС в эксплуатацию, включающий загрузку реактора ядерным топливом, достижение критического состояния реактора и выполнение необходимых физических экспериментов на уровне мощности, при котором теплоотвод от реак4тора осуществляется за счет естественных теплопотерь.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.B1}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Б1</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'b1'} onClose={() => {setIsReactorOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>Б1</div>подэтап</div>
                    <h3>Загрузка реактора ядерным топливом и испытания в подкритическом состоянии</h3>
                    <div className='modal__row'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic1} alt='' /> 
                        </div>
                        <div className='modal__col modal__col_right'>
                            <div class='text'>
                                <ul>
                                    <li>Первая загрузка ядерного топлива в активную зону;</li>
                                    <li>Сборка реактора, разогрев до номинальных параметров I контура;</li>
                                    <li>Уплотнение реактора</li>
                                    <li>Проверка трубопроводов и оборудования 1-го контура на плотность</li>
                                    <li>Теплофизические и теплогидравлические эксперименты</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.B2}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Б2</span>
                        </Link>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'b2'} onClose={() => {setIsReactorOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>Б2</div>подэтап</div>
                    <h3>Вывод реактора на МКУ</h3>
                    <div className='modal__row_block'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic2} alt='' /> 
                        </div>
                        <div className='modal__col modal__col_right'>
                            <div class='text'>
                                <div className='modal__subtext'>Достижение критического состояния реактора и выполнение физических экспериментов на МКУ (мин. контролируемый уровень мощности)</div>
                                <ul>
                                    <li>Первый вывод реактора в критическое состояние (управляемая ядерная реакция);</li>
                                    <li>Проводятся физические испытания и подтверждаются нейтронно-физические характеристики активной зоны</li>
                                    <li>Комплексная проверка АКНП (аппаратура контроля нейтронного потока), СУЗ (система управления и защиты), защит и блокировок, в т.ч. проверка правильного функционирования систем АСУ ТП и систем контроля нейтронной мощности, в том числе тарировка измерителей</li>
                                    <li>Физические эксперименты на мощности до 1% от номинальной.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.V0}>
                            <span>Смотреть далее</span>
                            <span>Подэтап В</span>
                        </Link>
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isSecondReactorOpened} onClose={() => {setIsSecondReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Вспомогательное реакторное здание (UKA)</h3>
                    <img class='modal__image' src={ReactorHelpBuild} alt="Вспомогательное реакторное здание" />
                    <div class='text'>
                        Предназначено для размещения вспомогательных систем реакторного отделения, систем спецводоочистки и спецгазоочистки, переработки и хранения жидких радиоактивных отходов и систем вентиляции зоны контролируемого доступа.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isBoilerOpened} onClose={() => {setIsBoilerOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Пускорезервная котельная (UTH)</h3>
                    <img class='modal__image' src={StartReserve} alt="Пускорезервная котельная" />
                    <div class='text'>
                        Котельная, обеспечивающая паровой нагрузкой (подачей пара технологическим потребителям) АЭС в период ее строительства, пуска, ремонта, проведения ПНР и на случай аварийного отключения АЭС.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isTurbineOpened} onClose={() => {setIsTurbineOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Здание турбины (машзал)</h3>
                    <img class='modal__image' src={TurbinBuild} alt="Здание турбины" />
                    <div class='text'>
                        Размещает в себе оборудование турбинного цеха («второй контур», турбоагрегат, генератор и возбудитель, конденсаторы, насосное оборудование, теплообменники, сепаратор и т.д.).
                    </div>
                </div>
            </Modal>
        </div>
    );
};
