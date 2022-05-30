import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { Modal } from '../../components/Modal/Modal';

import ReactorPic from '../../assets/img/Scheme-3.gif'
import { Structure } from '../../components/Structure';

export const B2 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.B2;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                {/* <div className="step-title">Физический пуск</div> */}
                <div className="step-title1">Подэтап Б2</div>
            </div>
            {/* <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div> */}
            <Aes step='b2' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.B1} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап Б1
                            </Button>
                        </Link>
                        <Link to={`${routes.MAP}#3`} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.V0} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Этап В
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
                    <div className='modal__stage-subtitle'><div>Б2</div>подэтап</div>
                    <h3>Вывод реактора на МКУ</h3>
                    <div className='modal__row_block'>
                        <div className='modal__col modal__col_left'>
                            <img src={ReactorPic} alt='' /> 
                        </div>
                        <div className='modal__col modal__col_right'>
                            <div className='text'>
                                <div className='modal__subtext'>Достижение критического состояния реактора и выполнение физических экспериментов на МКУ (мин. контролируемый уровень мощности)</div>
                                <ul>
                                    <li>Первый вывод реактора в критическое состояние (управляемая ядерная реакция);</li>
                                    <li>Проводятся физические испытания и подтверждаются нейтронно-физические характеристики активной зоны</li>
                                    <li>Комплексная проверка АКНП (аппаратура контроля нейтронного потока), СУЗ (система управления и защиты), защит и блокировок, в т.ч. проверка правильного функционирования систем АСУ ТП и систем контроля нейтронной мощности, в том числе тарировка измерителей</li>
                                    <li>Физические эксперименты на мощности до 1% от номинальной.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.V0}>
                            <span>Смотреть далее</span>
                            <span>Подэтап В</span>
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
