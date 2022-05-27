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

import ReactorPic from '../../assets/img/Scheme-2.gif'
import { Structure } from '../../components/Structure';

export const B1 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.B1;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                {/* <div className="step-title">Физический пуск</div> */}
                <div className="step-title1">Подэтап Б1</div>
            </div>
            {/* <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div> */}
            <Aes step='b1' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.B0} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Этап Б
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.B2} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап Б2
                                <ArrowIcon />
                            </Button>
                        </Link>
                    </div>
                    <div className='footer__right'>
                        <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>ПНР в структуре создания АЭС</Button>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>Б1</div>подэтап</div>
                    <h3>Загрузка реактора ядерным топливом и испытания в подкритическом состоянии</h3>
                    <div className='modal__row'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic} alt='' /> 
                        </div>
                        <div className='modal__col modal__col_right'>
                            <div className='text'>
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

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </div>
    );
};
