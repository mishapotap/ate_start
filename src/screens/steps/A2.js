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

export const A2 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    return (
        <Layout>
            <div class="step-title">
                Испытания СГО (Система герметичных охлаждений)
                <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            </div>
            <Aes step='a2' />
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
                                Испытания СГО (Система герметичных охлаждений)
                                <b>Подэтап А2</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.A3}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап А3</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.A1} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.A3} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А2</span> Подэтап</div>
                    <h3>Испытания СГО (Система герметичных охлаждений)</h3>
                    <div class='text'>
                        <div className='modal__subtext'>
                            Проверяется плотность и прочность герметичных ограждений (внутренней защитной оболочки).
                        </div>
                        <p>Проводится проверка герметичного ограждения на прочность и герметичность, выполняется замер утечек из гермоограждения, выполняется замеры и анализ динамики фактического напряженно-деформированного состояния конструкций защитной оболочки.</p>
                        <p><b>Герметичное ограждение</b> – совокупность элементов строительных и других конструкций, которые ограждают пространство вокруг реакторной установки или другого объекта, содержащего радиоактивные вещества и образуют предусмотренную проектом границу и препятствуют распространению радиоактивных веществ.</p>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.A3}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А3</span>
                        </Link>
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};
