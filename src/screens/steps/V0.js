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

import ReactorPic from '../../assets/img/Scheme-4.gif'
import { Structure } from '../../components/Structure';

export const V0 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.V0;
    }, []);

    return (
        <Fragment>
             <div class="step-title1">
                Этап В
            </div>
            <div class="step-title">
                Энергетический пуск
                <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            </div>
            <Aes step='v0' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__left'>
                        <div className='footer__btn-structure short'>
                            <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>Положение АТЭ в структуре АЭС</Button>
                        </div>
                        <div className='footer__btn-steps'>
                            <Link to={routes.MAP}>
                                <Button size={ButtonSize.m}>Этапы пусконаладочных работ в структуре АЭС</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='footer__right'>
                        <div className='footer__links'>
                            <div className='footer__title'>
                                Энергетический пуск
                                <b>Этап В</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.G0}>
                                    <span>Смотреть далее</span>
                                    <span>Этап Г</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.B2} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.G0} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><span>В</span> Этап</div>
                    <h3>Энергетический пуск</h3>
                    <div className='modal__row'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic} alt='' /> 
                        </div>
                        <div className='modal__col modal__col_right'>
                            <div class='text'>
                                <div className='modal__subtext'>Ввод АЭС в эксплуатацию от завершения физического пуска реактора до начала выработки электроэнергии.</div>
                                <ul>
                                    <li>Поэтапный подъем мощности реактора до 30% со сбросом пара в конденсатор через БРУ-К;</li>
                                    <li>Толчок турбины и вывод на холостые обороты (балансировка при необходимости);</li>
                                    <li>Синхронизация турбогенератора с сетью;</li>
                                    <li>Сдача блока в опытно-промышленную эксплуатацию.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class='text' style={{marginTop: '60px'}}>
                        Выполняется повышение мощности реактора поэтапно до уровня 40 % от номинальной мощности. Выполняются проверки, испытаний и подтверждение достоверности данных с систем контроля и управления, испытаний основных регуляторов энергоблока, уровнемеров, отсечных и предохранительных устройств. Продолжаются физические испытания и эксперименты. Выполняется первый толчок турбины, разворот турбины, вывод турбины на номинальные обороты. Выполняется синхронизация и включение генератора в электрическую сеть, энергоблок начинает вырабатывать электроэнергию в энергосистему страны.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.G0}>
                            <span>Смотреть далее</span>
                            <span>Этап Г</span>
                        </Link>
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </Fragment>
    );
};
