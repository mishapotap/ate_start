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

export const A3 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.A3;
    }, []);

    return (
        <Fragment>
             <div class="step-title1">
                Подэтап А3
            </div>
            <div class="step-title">
                Холодно-Горячая обкатка реакторной установки
                <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            </div>
            <Aes step='a3' />
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
                                Холодно-Горячая обкатка реакторной установки
                                <b>Подэтап А3</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.A4}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап А4</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.A2} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.A4} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><div>А3</div>подэтап</div>
                    <h3>Холодно-Горячая обкатка реакторной установки</h3>
                    <div class='text'>
                        Подэтап, в течение которого проводится циркуляционная промывка первого контура и гидравлические испытания трубопроводов и оборудования, наладка, испытания и опробование технологических систем и оборудования, электрооборудования и АСУ ТП при работе на номинальных параметрах первого контура с загруженными в реактор имитаторами топливных кассет с целью подтверждения проектных характеристик систем и оборудования реакторной установки
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.A4}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А4</span>
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
