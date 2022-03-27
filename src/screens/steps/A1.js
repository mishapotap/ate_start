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

export const A1 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    return (
        <Layout>
            <div class="step-title">
                Испытания и опробование оборудования
                <div class="step-title__details">Подробнее</div>
            </div>
            <Aes step='a1' />
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
                                Подготовительный этап
                                <b>Подэтап А1</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.A2}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап А2</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.A0} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.A2} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А1</span> Подэтап</div>
                    <h3>Испытания и опробование оборудования</h3>
                    <div class='text'>
                        <div className='modal__subtext'>
                            Подэтап, в течение которого, начиная с системы дистиллята, производится приемка технологических систем и оборудования реакторного отделения и машинного зала блока из монтажа в ПНР.
                        </div>
                        <ol>
                            <li>Выполняются пусконаладочные работы и испытания на системах и оборудовании для подтверждения проектной работы и готовности к выходу на номинальные параметры температуры-давления на следующем подэтапе – А-3.</li>
                            <li>Выполняются испытания систем безопасности на открытый реактор.</li>
                            <li>Выполняется загрузка имитационной активной зоны (имитаторами ТВС – тепловыделяющей сборки), по своим параметрам аналогичной настоящей активной зоне и последующая сборка реактора для проведения испытаний реакторной установки во время холодно-горячей обкатки.</li>
                            <li>Наладка перегрузочной машины и транспортно-технологического оборудования.</li>
                            <li>Наладка АСУ ТП (измерительные каналы, защиты и блокировки, сигнализация, схемы дистанционного управления механизмами и арматурой, пошаговых программ управления, архивация и пр.).</li>
                            <li>Выполняются работы на системах и оборудовании на завершающей стадии монтажа – послемонтажные очистки, гидравлические (пневматические) испытания и индивидуальные испытания и опробования оборудования.</li>
                            <li>Выполняется вибродиагностика оборудования и наладка опорно-подвесной системы.</li>
                            <li>Регистрация оборудования и систем, включая СГО, в органах надзора.</li>
                            <li>Проверяется плотность первого контура Р=35 кг/см².</li>
                            <li>Проводится поканальное опробование аварийных дизель-генераторов с работой на сеть и опробования схемы ступенчатого пуска механизмов (с реальным разворотом механизмов). </li>
                        </ol>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.A2}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А2</span>
                        </Link>
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};
