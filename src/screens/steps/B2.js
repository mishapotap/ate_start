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

export const B2 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    return (
        <Layout>
            <div class="step-title">
            </div>
            <Aes step='b2' />
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
                                Вывод реактора на МКУ
                                <b>Подэтап Б2</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.V0}>
                                    <span>Смотреть далее</span>
                                    <span>Этап В</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.B1} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.V0} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>Б2</span> Подэтап</div>
                    <h3>Вывод реактора на МКУ</h3>
                    <div className='modal__row'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic} alt='' /> 
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
        </Layout>
    );
};
