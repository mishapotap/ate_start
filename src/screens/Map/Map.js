import React, {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';
import { Modal } from '../../components/Modal/Modal';
import { QuestionIcon } from '../../components/svg/QuestionIcon';
import * as routes from '../../const/routes';

import './Map.scss'

export const Map = () => {
    const [isS1ModalOpened, setIsS1ModalOpened] = useState(false);
    const [isS2ModalOpened, setIsS2ModalOpened] = useState(false);
    const [isS3ModalOpened, setIsS3ModalOpened] = useState(false);
    const [isS4ModalOpened, setIsS4ModalOpened] = useState(false);
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);

    return (
        <Layout>
            <div className='map'>
                <div className='map__title'>Этапы пусконаладочных работ в структуре АЭС</div>
                <div className='map__stagetitles'>
                    <div className='map__stagetitle'>
                        <div>Предпусковые наладочные работы</div>
                        <span className='stage-button' onClick={() => {setIsS1ModalOpened(true)}}>подробнее</span>
                    </div>
                    <div className='map__stagetitle' style={{left: '46.2%'}}>
                        <div>Физпуск</div>
                        <span className='stage-button' onClick={() => {setIsS2ModalOpened(true)}}>подробнее</span>
                    </div>
                    <div className='map__stagetitle' style={{left: '67.2%'}}>
                        <div>Энергопуск</div>
                        <span className='stage-button' onClick={() => {setIsS3ModalOpened(true)}}>подробнее</span>
                    </div>
                    <div className='map__stagetitle' style={{left: '80.2%'}}>
                        <div>Опытно-промышленная эксплуатация</div>
                        <span className='stage-button' onClick={() => {setIsS4ModalOpened(true)}}>подробнее</span>
                    </div>
                </div>
                <div className='map__line'>
                    <div className='map__stage' style={{left: '-18px'}}>Этап <b>А</b></div>
                    <Link to={routes.A0} className='map__step' style={{}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A0</div>
                        <div className='map__step-desc'>
                            Подготовительный этап
                            <div>
                                Передача из монтажа в ПНР первой системы или оборудования блока
                            </div>
                        </div>
                    </Link>
                    <Link to={routes.A1} className='map__step' style={{left: '9.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A1</div>
                        <div className='map__step-desc map__step-desc_bottom'>
                            Испытания и опробования оборудования
                            <div>
                                Передача из монтажа в ПНР системы дистиллята
                            </div>
                        </div>
                    </Link>
                    <Link to={routes.A2} className='map__step' style={{left: '18.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A2</div>
                        <div className='map__step-desc'>
                            Испытания герметичного ограждения
                        </div>
                    </Link>
                    <Link to={routes.A3} className='map__step' style={{left: '27.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A3</div>
                        <div className='map__step-desc map__step-desc_bottom'>
                            Холодно-горячая обкатка реакторной&nbsp;установки
                        </div>
                    </Link>
                    <Link to={routes.A4} className='map__step' style={{left: '36.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A4</div>
                        <div className='map__step-desc'>
                            Ревизия основного оборудования реакторной&nbsp;установки
                        </div>
                    </Link>

                    <div className='map__stage' style={{left: '46%'}}>Этап <b>Б</b></div>
                    <Link to={routes.B1} className='map__step' style={{left: '47.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>Б1</div>
                        <div className='map__step-desc'>
                            Загрузка реактора ядерным топливом и испытания в подкритическом состоянии
                        </div>
                    </Link>
                    <Link to={routes.B2} className='map__step' style={{left: '54.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>Б2</div>
                        <div className='map__step-desc map__step-desc_bottom'>
                            Достижение критического состояния реактора и выполнение физических экспериментов на МКУ
                        </div>
                    </Link>

                    <div className='map__stage' style={{left: '67%'}}>Этап <b>В</b></div>
                    <Link to={routes.V0} className='map__step' style={{left: '68.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>В1</div>
                        <div className='map__step-desc'>
                            Освоение мощности реактора с уровня мощности физического пуска до включения генератора в сеть
                        </div>
                    </Link>

                    <div className='map__stage' style={{left: '80%'}}>Этап <b>Г</b></div>
                    <Link to={routes.G1} className='map__step' style={{left: '81.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>Г1</div>
                        <div className='map__step-desc'>
                            Освоение мощности блока АС от включения генератора в сеть до 100% номинальной мощности
                        </div>
                    </Link>
                    <Link to={routes.G2} className='map__step' style={{left: '100%'}}>
                        <div className='map__point map__point_final'></div>
                        <div className='map__step-name'>Г2</div>
                        <div className='map__step-desc map__step-desc_bottom  map__step-desc_final'>
                            Комплексное опробование энергоблока АС на номинальной мощности
                            <div>Ввод блока АС в эксплуатацию </div>
                        </div>
                    </Link>
                </div>
            </div>

            <Modal isOpened={isS1ModalOpened} onClose={() => {setIsS1ModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'>Этап <span>А</span> </div>
                    <h3>ПРЕДПУСКОВЫЕ НАЛАДОЧНЫЕ РАБОТЫ</h3>
                    <div class='text'>
                        Этап ввода в эксплуатацию энергоблока АЭС, при котором законченные 
                        строительством и монтажом системы и элементы блока АЭС приводятся 
                        в состояние эксплуатационной готовности с проверкой их соответствия 
                        установленным в проекте критериям и характеристикам и которым завершается 
                        готовность блока АЭС к физическому пуску реактора (разделён на 4 подэтапа).
                    </div>
                </div>
            </Modal>

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
                </div>
            </Footer>

            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <div className='modal__stage-subtitle'><span>А0</span> Подэтап</div>
                    <h3>ПРЕДПУСКОВЫЕ НАЛАДОЧНЫЕ РАБОТЫ</h3>
                    <div class='text'>
                        Этап ввода в эксплуатацию энергоблока АЭС, при котором законченные строительством и монтажом системы и элементы блока АЭС приводятся в состояние эксплуатационной готовности с проверкой их соответствия установленным в проекте критериям и характеристикам и который завершается готовность блока АЭС к физическому пуску реактора (разделён на 4 подэтапа).
                    </div>
                </div>
            </Modal>
        </Layout>
    );
};
