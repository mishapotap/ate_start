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

export const A2 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.A2;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                {/* <div class="step-title">Подготовительный этап</div> */}
                <div class="step-title1">Подэтап А2</div>
            </div>
            {/* <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div> */}
            <Aes step='a2' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.A1} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап А1
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.A3} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап А3
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
                    <div className='modal__stage-subtitle'><div>А2</div>подэтап</div>
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

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </div>
    );
};
