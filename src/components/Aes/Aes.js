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

import AesPic from '../../assets/img/aes.png'
import { Modal } from '../Modal/Modal';

export const Aes = () => {
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
            <Modal isOpened={isReactorOpened} onClose={() => {setIsReactorOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>Здание реактора (UJA)</h3>
                    <div class='text'>
                        Выполняется разборка реактора после ХГО, ревизия оборудования РУ и первого контура, оценка технического состояния после испытаний на ХГО. Выполняется подготовка грузо-подъемного и транспортно-технологического оборудования к загрузке ядерного топлива в реактор. Выполняются борным промывки реактора, систем первого контура и систем безопасности. Заканчиваются проверки и испытания систем АСУ ТП, ответственных за контроль работы реактора (АКНП, СУЗ, СВРК, СПНИ и тд). Энергоблок проходит проверку готовности регулирующими контролирующими органами и получает разрешение на начало загрузки ядерного топлива и физического пуска реактора.
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
