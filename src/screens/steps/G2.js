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

import ReactorPic from '../../assets/img/reactor.jpg'
import { Structure } from '../../components/Structure';

export const G2 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.G2;
    }, []);

    return (
        <Fragment>
             <div class="step-title1">
                Подэтап Г2
            </div>
            <div class="step-title">
                Комплексное опробование блока АЭС на номинальной мощности
                <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            </div>
            <Aes step='g2' />
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
                                Комплексное опробование блока АЭС на номинальной мощности
                                <b>Подэтап Г2</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.FINAL}>
                                    <span>Смотреть далее</span>
                                    <span>Промышленная эксплуатация</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.G1} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.FINAL} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>Г2</span> Подэтап</div>
                    <h3>Комплексное опробование блока АЭС на номинальной мощности</h3>
                    <div class='text'>
                        <div className='modal__subtext'>
                            Выполняется нормальная и непрерывная работа основного оборудования энергоблока в течении 15 суток при постоянной или поочередной работе всего вспомогательного оборудования по проектной схеме на номинальной мощности
                        </div>
                        <ul>
                            <li>Проводится комплексное 15 суточное опробование блока на номинальной мощности (сдаточные испытания) – нормальная и непрерывная работа основного оборудования энергоблока в течении 15 суток при постоянной или поочередной работе всего вспомогательного оборудования по проектной схеме на номинальной мощности в базисном режиме, осуществляется поддержание проектных технико-экономических показателей и характеристик с целью определения готовности блока к промышленной эксплуатации.</li>
                            <li>Проводится приемка блока приемочной комиссией в постоянную эксплуатацию.</li>
                        </ul>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.FINAL}>
                            <span>Смотреть далее</span>
                            <span>Промышленная эксплуатация</span>
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
