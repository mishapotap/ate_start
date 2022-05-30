import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';

export const A1 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.A1;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Испытания и опробование оборудования</div>
                <div className="step-title1">Подэтап А1</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            <Aes step='a1' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.A0} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап А0
                            </Button>
                        </Link>
                        <Link to={`${routes.MAP}#2`} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.A2} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап А2
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
                    <div className='modal__stage-subtitle'><div>А1</div>подэтап</div>
                    <h3>Испытания и опробование оборудования</h3>
                    <div className='text'>
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

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </div>
    );
};
