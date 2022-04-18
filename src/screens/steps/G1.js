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
import { Power } from '../../components/Power';
import { Structure } from '../../components/Structure';

export const G1 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.G1;
    }, []);

    return (
        <Fragment>
             <div class="step-title1">
                Подэтап Г1
            </div>
            <div class="step-title">
                Освоение мощности
                <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            </div>
            <Aes step='g1' />
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
                                Освоение мощности
                                <b>Подэтап Г1</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.G2}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап Г2</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.G0} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.G2} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}} className='size-l'>
                <div>
                    <div className='modal__stage-subtitle'><span>Г1</span> Подэтап</div>
                    <h3>Освоение мощности</h3>
                    <div class='text'>
                        <div className='modal__subtext'>
                            Освоение мощности блока АЭС от включения генератора в сеть до 100% номинальной мощности.<br />
                            Номинальная мощность (номинальный уровень) – это 100% проектная мощность реактора.
                        </div>
                        <ol>
                            <li>
                                Освоение 50% номинального уровня мощности
                                <Power percent={50} />
                            </li>
                            <li>Нейтронно-физические эксперименты;</li>
                            <li>Теплогидравлические и теплофизические эксперименты;</li>
                            <li>Испытание систем и оборудования турбины и других систем с выведенной УПЗ (ускоренной предупредительной защитой);</li>
                            <li>Настройка регуляторов, программ пошагового управления;</li>
                            <li>
                                Выполняются динамические испытания по проверки работы систем и оборудования при отключении (подключении) в стационарных и переходных режимах:
                                <ul>
                                    <li>Отключение одного ГЦН, двух ГЦН;</li>
                                    <li>Отключение питательного насоса;</li>
                                    <li>Отключение турбины как со срывом вакуума, так и без срыва;</li>
                                    <li>Полное обесточение блока с проверкой режимно естественной циркуляции.</li>
                                </ul>
                            </li>
                            <li>Выполняется проверка биологической защиты, проверяется радиационная обстановка в помещениях АЭС и за ее пределами.</li>
                            <li>
                                Освоение 75% номинального уровня мощности
                                <Power percent={75} />
                                <ul>
                                    <li>Испытания аналогичные уровню мощности 50% Nом за исключением – не делается испытание по полному обесточению блока.</li>
                                </ul>
                            </li>
                            <li>
                                Освоение 100% номинального уровня мощности
                                <ul>
                                    <li>Испытания аналогичные уровню мощности 75% Nом.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.G2}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Г2</span>
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
