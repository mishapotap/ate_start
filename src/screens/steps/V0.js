import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
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
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Энергетический пуск</div>
                <div className="step-title1">Этап В</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            <Aes step='v0' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.B2} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап Б2
                            </Button>
                        </Link>
                        <Link to={`${routes.MAP}#4`} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.G0} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Этап Г
                                <ArrowIcon />
                            </Button>
                        </Link>
                    </div>
                    <div className='footer__right'>
                        <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>ПНР в структуре создания АЭС</Button>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}} className='modal_large'>
                <div>
                    <div className='modal__stage-subtitle'><div>В</div>этап</div>
                    <h3>Энергетический пуск</h3>
                    <img src={ReactorPic} style={{width: "100%"}} alt='' /> 
                    <div className='text'>
                        <div className='modal__subtext'>Ввод АЭС в эксплуатацию от завершения физического пуска реактора до начала выработки электроэнергии.</div>
                        <ul>
                            <li>Поэтапный подъем мощности реактора до 30% со сбросом пара в конденсатор через БРУ-К;</li>
                            <li>Толчок турбины и вывод на холостые обороты (балансировка при необходимости);</li>
                            <li>Синхронизация турбогенератора с сетью;</li>
                            <li>Сдача блока в опытно-промышленную эксплуатацию.</li>
                        </ul>
                    </div>
                    <div className='text' style={{marginTop: '60px'}}>
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
        </div>
    );
};
