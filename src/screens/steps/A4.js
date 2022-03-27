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
import { Aes } from '../../components/Aes';
import { QuestionIcon } from '../../components/svg/QuestionIcon';
import { Modal } from '../../components/Modal/Modal';

export const A4 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    return (
        <Layout>
            <div class="step-title">
                
            </div>
            <Aes step='a4' />
            <Footer>
                <div className='footer__btns'>
                    <Button size={ButtonSize.m} onClick={() => {setIsStepModalOpened(true)}}><QuestionIcon /></Button>
                </div>
                <div className='footer__content'>
                    <div className='footer__left'>
                        <div className='footer__btn-steps'>
                            <Link to={routes.MAP}>
                                <Button size={ButtonSize.m}>Этапы пусконаладочных работ в структуре АЭС</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='footer__right'>
                        <div className='footer__links'>
                            <div className='footer__title'>
                                Ревизия основного оборудования
                                <b>Подэтап А4</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.B0}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап А5</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.A2} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.B0} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А4</span> Подэтап</div>
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
                            <span>Подэтап А5</span>
                        </Link>
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};
