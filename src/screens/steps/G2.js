import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { Modal } from '../../components/Modal/Modal';

import { Structure } from '../../components/Structure';

export const G2 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.G2;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Комплексное опробование блока АЭС на номинальной мощности</div>
                <div className="step-title1">Подэтап Г2</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            <Aes step='g2' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.G1} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап Г1
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.FINAL} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Финал
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
                    <div className='modal__stage-subtitle'><div>Г2</div>подэтап</div>
                    <h3>Комплексное опробование блока АЭС на номинальной мощности</h3>
                    <div className='text'>
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
        </div>
    );
};
