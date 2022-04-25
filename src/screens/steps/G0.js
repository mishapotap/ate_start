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

import ReactorPic from '../../assets/img/Scheme-full.gif'
import { Structure } from '../../components/Structure';

export const G0 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.G0;
    }, []);

    return (
        <Fragment>
             <div class="step-title1">
                Этап Г
            </div>
            <div class="step-title">
                Опытно-промышленная эксплуатация
                <div class="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            </div>
            <Aes step='g0' />
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
                                Опытно-промышленная эксплуатация
                                <b>Этап Г</b>
                            </div>
                            <div className='footer__link'>
                                <Link to={routes.G1}>
                                    <span>Смотреть далее</span>
                                    <span>Подэтап Г1</span>
                                </Link>        
                            </div>
                        </div>
                        <div className='footer__pagebuttons'>
                            <Link to={routes.V0} className='footer__pagebutton _prev'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                            <Link to={routes.G1} className='footer__pagebutton _next'>
                                <Button size={ButtonSize.m}><ArrowIcon /></Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>Г</div>этап</div>
                    <h3>Опытно-промышленная эксплуатация</h3>
                    <div className='modal__row'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic} alt='' /> 
                        </div>
                        <div className='modal__col modal__col_right'>
                            <div class='text'>
                                Этап ввода в эксплуатацию блока АЭС от энергетического пуска до приемки блока АЭС в промышленную эксплуатацию.
                            </div>
                        </div>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.G1}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Г1</span>
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
