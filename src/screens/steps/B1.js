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

import ReactorPic from '../../assets/img/reactor.jpg'

export const B1 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    return (
        <Layout>
            <div class="step-title">
            </div>
            <Aes step='b1' />
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
                                Загрузка реактора ядерным топливом и испытания в подкритическом состоянии
                                <b>Подтап Б1</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.B2}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап Б2</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.B0} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.B2} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>Б1</span> Подэтап</div>
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
        </Layout>
    );
};
