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

import ReactorPic from '../../assets/img/reactor.jpg'
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
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Блочная насосная станция</h3>
                    <div class='text'>
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isRdesOpened} onClose={() => {setIsRdesOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>РДЭС/БДЭС (UBN)</h3>
                    <div class='text'>
                        Предназначены для размещения оборудования системы аварийного электроснабжения и дизель-генератора, который является автономным источником электроснабжения потребителей собственных нужд АЭС, важных для безопасности и обеспечивающих сохранность основного оборудования в режиме обесточивания.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isElectric1Opened} onClose={() => {setIsElectric1Opened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Электрические здания </h3>
                    <div class='text'>
                        Предназначены для размещения электротехнических систем и систем контроля нормальной эксплуатации и включает в себя обеспечивающие системы вентиляции ,водоснабжения, канализации и пожаротушения.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isCleaningOpened} onClose={() => {setIsCleaningOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Здание химводоочистки (UGD)</h3>
                    <div class='text'>
                        Получение технической воды с заданными параметрами качества для потребителей АЭС
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isCleaning2Opened} onClose={() => {setIsCleaning2Opened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Очистные сооружения</h3>
                    <div class='text'>
                        Предназначены для очистки сточных вод, образующихся в ходе эксплуатации АЭС и в период выпадения дождей и таяния снега.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isPoolsOpened} onClose={() => {setIsPoolsOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Брызгальные бассейны</h3>
                    <div class='text'>
                        Резервуары с системой напорных трубопроводов, распределяющих охлаждаемую воду между разбрызгивающими соплами. Охлажденная вода подается через насосную станцию на ответственные потребители.
                    </div>
                </div>
            </Modal>

            <Modal 
                isOpened={isReactorOpened && step !== 'a3' && step !== 'a4' && step !== 'b1'} 
                onClose={() => {setIsReactorOpened(false)}}
            >
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Здание реактора (UJA)</h3>
                    <div class='text'>
                        Выполняется разборка реактора после ХГО, ревизия оборудования РУ и первого контура, оценка технического состояния после испытаний на ХГО. Выполняется подготовка грузо-подъемного и транспортно-технологического оборудования к загрузке ядерного топлива в реактор. Выполняются борным промывки реактора, систем первого контура и систем безопасности. Заканчиваются проверки и испытания систем АСУ ТП, ответственных за контроль работы реактора (АКНП, СУЗ, СВРК, СПНИ и тд). Энергоблок проходит проверку готовности регулирующими контролирующими органами и получает разрешение на начало загрузки ядерного топлива и физического пуска реактора.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a3'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А3.2</span> Подэтап</div>
                    <h3>Горячая обкатка реакторной установки</h3>
                    <div class='text'>
                        На «горячей фазе» выполняется разогрев РУ с имитационной зоной до номинальных параметрах и проверка параметров работы. Выполняются тензометрирование, теплогидравлические испытания, термометрирование, измерение пульсаций давления, вибраций и перемещений оборудования при разогреве, проверка соответствия полученных результатов проектным требованиям. В машзале выполняются подготовка и постановка турбины на валоповоротное устройство, набор вакуума в кондесаторах, испытания БРУ-К (быстродействующая редукционная установка сброса пара в конденсаторы турбины), наладка и испытания оборудования второго контура и турбинного отделения. Выполняется проверка систем электроснабжения собственных нужд, испытаний систем аварийного электроснабжения, в том числе испытания по кратковременному перерыву электропитания и полному обесточиванию.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isReactorOpened && step === 'a4'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А3.2</span> Подэтап</div>
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
            <Modal isOpened={isReactorOpened && step === 'b1'} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А3.2</span> Подэтап</div>
                    <h3>Загрузка реактора ядерным топливом и испытания в подкритическом состоянии</h3>
                    <div className='modal__row'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic} alt='' /> 
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

            <Modal isOpened={isSecondReactorOpened} onClose={() => {setIsSecondReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Вспомогательное реакторное здание (UKA)</h3>
                    <div class='text'>
                        Предназначено для размещения вспомогательных систем реакторного отделения, систем спецводоочистки и спецгазоочистки, переработки и хранения жидких радиоактивных отходов и систем вентиляции зоны контролируемого доступа.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isBoilerOpened} onClose={() => {setIsBoilerOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Пускорезервная котельная (UTH)</h3>
                    <div class='text'>
                        Котельная, обеспечивающая паровой нагрузкой (подачей пара технологическим потребителям) АЭС в период ее строительства, пуска, ремонта, проведения ПНР и на случай аварийного отключения АЭС.
                    </div>
                </div>
            </Modal>
            <Modal isOpened={isTurbineOpened} onClose={() => {setIsTurbineOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Здание турбины (машзал)</h3>
                    <div class='text'>
                        Размещает в себе оборудование турбинного цеха («второй контур», турбоагрегат, генератор и возбудитель, конденсаторы, насосное оборудование, теплообменники, сепаратор и т.д.).
                    </div>
                </div>
            </Modal>
        </div>
    );
};
