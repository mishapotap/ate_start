import React, {Component, Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import VideoContainer from '../../components/VideoContainer';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import Layout from '../../components/Layout';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { QuestionIcon } from '../../components/svg/QuestionIcon';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';

export const A4 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.A4;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                {/* <div class="step-title">Холодно-Горячая обкатка реакторной установки</div> */}
                <div class="step-title1">Подэтап А4</div>
            </div>
            {/* <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div> */}
            <Aes step='a4' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.A3} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап А3
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.B0} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Этап Б
                                <ArrowIcon />
                            </Button>
                        </Link>
                    </div>
                    <div className='footer__right'>
                        <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>ПНР в структуре создания АЭС</Button>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А4</div>подэтап</div>
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
                    <div className='modal__link'>
                        <Link to={routes.B0}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Б0</span>
                        </Link>
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </div>
    );
};
