import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Layout from '../../components/Layout';
import * as routes from '../../const/routes';

import './Map.scss'

export const Map = () => {
    return (
        <Layout>
            <div className='map'>
                <div className='map__title'>Этапы пусконаладочных работ в структуре АЭС</div>
                <div className='map__stagetitles'>
                    <div className='map__stagetitle'>
                        <div>Предпусковые наладочные работы</div>
                        <Link to={routes.HOME} className='stage-button'>подробнее</Link>
                    </div>
                    <div className='map__stagetitle' style={{left: '46.2%'}}>
                        <div>Физпуск</div>
                        <Link to={routes.HOME} className='stage-button'>подробнее</Link>
                    </div>
                    <div className='map__stagetitle' style={{left: '67.2%'}}>
                        <div>Энергопуск</div>
                        <Link to={routes.HOME} className='stage-button'>подробнее</Link>
                    </div>
                    <div className='map__stagetitle' style={{left: '80.2%'}}>
                        <div>Опытно-промышленная эксплуатация</div>
                        <Link to={routes.HOME} className='stage-button'>подробнее</Link>
                    </div>
                </div>
                <div className='map__line'>
                    <div className='map__stage' style={{left: '-18px'}}>Этап <b>А</b></div>
                    <div className='map__step' style={{}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A0</div>
                        <div className='map__step-desc'>
                            Подготовительный этап
                            <div>
                                Передача из монтажа в ПНР первой системы или оборудования блока
                            </div>
                        </div>
                    </div>
                    <div className='map__step' style={{left: '9.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A1</div>
                        <div className='map__step-desc map__step-desc_bottom'>
                            Испытания и опробования оборудования
                            <div>
                                Передача из монтажа в ПНР системы дистиллята
                            </div>
                        </div>
                    </div>
                    <div className='map__step' style={{left: '18.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A2</div>
                        <div className='map__step-desc'>
                            Испытания герметичного ограждения
                        </div>
                    </div>
                    <div className='map__step' style={{left: '27.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A3</div>
                        <div className='map__step-desc map__step-desc_bottom'>
                            Холодно-горячая обкатка реакторной&nbsp;установки
                        </div>
                    </div>
                    <div className='map__step' style={{left: '36.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>A4</div>
                        <div className='map__step-desc'>
                            Ревизия основного оборудования реакторной&nbsp;установки
                        </div>
                    </div>

                    <div className='map__stage' style={{left: '46%'}}>Этап <b>Б</b></div>
                    <div className='map__step' style={{left: '47.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>Б1</div>
                        <div className='map__step-desc'>
                            Загрузка реактора ядерным топливом и испытания в подкритическом состоянии
                        </div>
                    </div>
                    <div className='map__step' style={{left: '54.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>Б2</div>
                        <div className='map__step-desc map__step-desc_bottom'>
                            Достижение критического состояния реактора и выполнение физических экспериментов на МКУ
                        </div>
                    </div>

                    <div className='map__stage' style={{left: '67%'}}>Этап <b>В</b></div>
                    <div className='map__step' style={{left: '68.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>В1</div>
                        <div className='map__step-desc'>
                            Освоение мощности реактора с уровня мощности физического пуска до включения генератора в сеть
                        </div>
                    </div>

                    <div className='map__stage' style={{left: '80%'}}>Этап <b>Г</b></div>
                    <div className='map__step' style={{left: '81.2%'}}>
                        <div className='map__point'></div>
                        <div className='map__step-name'>Г1</div>
                        <div className='map__step-desc'>
                            Освоение мощности блока АС от включения генератора в сеть до 100% номинальной мощности
                        </div>
                    </div>
                    <div className='map__step' style={{left: '100%'}}>
                        <div className='map__point map__point_final'></div>
                        <div className='map__step-name'>Г2</div>
                        <div className='map__step-desc map__step-desc_bottom  map__step-desc_final'>
                            Комплексное опробование энергоблока АС на номинальной мощности
                            <div>Ввод блока АС в эксплуатацию </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer>
                <div className='footer__left'></div>
                <div className='footer__right'>
                    <div className='footer__btn-structure'>
                        <Button size={ButtonSize.m}>Положение АТЭ в структуре АЭС</Button>
                    </div>
                    <div className='footer__btn-steps'>
                        <Link to={routes.MAP}>
                            <Button size={ButtonSize.m}>Этапы пусконаладочных работ в структуре АЭС</Button>
                        </Link>
                    </div>
                </div>
            </Footer>
        </Layout>
    );
};
