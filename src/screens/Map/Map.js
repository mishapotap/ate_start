import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import * as routes from '../../const/routes';

// Swiper
import { Navigation, HashNavigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { MapArrow } from '../../components/svg/MapArrow';
import { Ellipse } from '../../components/svg/Ellipse';


import Slide1 from "../../assets/img/Map/map_slide_1.jpg";
import Slide2 from "../../assets/img/Map/map_slide_2.jpg";
import Slide3 from "../../assets/img/Map/map_slide_3.jpg";
import Slide4 from "../../assets/img/Map/map_slide_4.jpg";
import Slide5 from "../../assets/img/Map/map_slide_5.jpg";
import Icon1 from "../../assets/img/Map/icon_slide_1.png";
import Icon2 from "../../assets/img/Map/icon_slide_2.png";
import Icon3 from "../../assets/img/Map/icon_slide_3.png";
import Icon4 from "../../assets/img/Map/icon_slide_4.png";
import Icon5 from "../../assets/img/Map/icon_slide_5.png";

import './Map.scss'

export const Map = () => {

    const [isS0ModalOpened, setIsS0ModalOpened] = useState(false);
    const [isS1ModalOpened, setIsS1ModalOpened] = useState(false);
    const [isS2ModalOpened, setIsS2ModalOpened] = useState(false);
    const [isS3ModalOpened, setIsS3ModalOpened] = useState(false);
    const [isS4ModalOpened, setIsS4ModalOpened] = useState(false);
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);
    

    return (
        <div className='page'>
            <div className='map__title'>Этапы пусконаладочных работ в структуре АЭС</div>
            <div className="navigation_prev_arrow swiper-button-prev">
                <MapArrow />
            </div>
            <div className="navigation_next_arrow swiper-button-next">
                <MapArrow />
            </div>
            
            <Swiper
            id='main_swiper_id'
            modules={[Navigation, HashNavigation]}
            navigation={{
                nextEl: ".navigation_next_arrow",
                prevEl: ".navigation_prev_arrow",
            }}
            centeredSlides={true}
            // slidesOffsetBefore={255}
            spaceBetween={140}
            watchSlidesProgress
            slidesPerView={1.4}
            speed={1000}
            loop={true}
            loopedSlides={5}
            hashNavigation={{
                replaceState: true,
                watchState: true
            }}
            // breakpoints={{
            //     1366: {
            //         slidesPerView: 1,
            //     }
            // }}
            // initialSlide={index || 0 }          
            // onSlideChange
            // slideToLoop
            // setWrapperSize
            // onSlideChange={() => console.log('slide change')}
            // slidesPerGroup={1}
            // slideToClickedSlide={true}
            >
                <SwiperSlide data-hash={1}>
                    {({ isActive }) => (
                        <>
                        <div className='map__slide'>
                            <img 
                            src={Slide1} 
                            alt="Подготовительный этап" 
                            className='map__slide__image'
                            style={{
                                width: isActive ? "68vw" : "45vw",
                                height: isActive ? "36vh" : "24vh",
                                opacity: isActive ? 1 : 0.46,
                            }}>
                            </img>
                            {isActive && (<img className='map__slide__icon' src={Icon1} alt="Slide icon" />)}
                            
                        </div>
                        <div className='event'>
                            {isActive && <div className='event__number' style={{color: "#53A9DE"}}>Этап 0</div>}
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                                {isActive && <div className='event__title' onClick={() => {setIsS0ModalOpened(true)}}>Подготовительный этап</div>}
                                {isActive && <div className='event__moreinfo' onClick={() => {setIsS0ModalOpened(true)}}>Подробнее</div>}
                            </div>
                        </div>
                        {isActive && <div className='line' style={{background: "#53A9DE"}}></div>}
                        {isActive && 
                            <>
                                <div className='line__etap' style={{color: "#53A9DE"}}>Этап 0</div>
                                <div className='line__etap__prev' style={{color: "#621F97"}}>Этап Г
                                    <div className='line__etap__prev__before' style={{backgroundColor: "#621F97"}}></div>
                                </div>
                                <div className='line__etap__next' style={{color: "#22952E"}}>Этап А
                                    <div className='line__etap__next__before' style={{backgroundColor: "#22952E"}}></div>
                                </div>
                                <div className='line__event__wrapper'>
                                    <div className='line__event' style={{width: "25%"}}>
                                        <Link className={"a0"} to={routes.A0}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#53A9DE"}}>А0</div>
                                            <div className='line__event__text'>Подготовительный этап</div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                        </>
                    )}
                </SwiperSlide>
                <SwiperSlide data-hash={2}>
                    {({ isActive }) => (
                        <>
                        <div className='map__slide'>
                            <img 
                            src={Slide2} 
                            alt="Предпусковые наладочные работы" 
                            className='map__slide__image'
                            style={{
                                width: isActive ? "68vw" : "45vw",
                                height: isActive ? "36vh" : "24vh",
                                opacity: isActive ? 1 : 0.46,
                            }}>
                            </img>
                            {isActive && (<img className='map__slide__icon' src={Icon2} alt="Slide icon" />)}
                        </div>
                        <div className='event'>
                            {isActive && <div className='event__number' style={{color: "#22952E"}}>Этап А</div>}
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                                {isActive && <div className='event__title' onClick={() => {setIsS1ModalOpened(true)}}>Предпусковые наладочные работы</div>}
                                {isActive && <div className='event__moreinfo' onClick={() => {setIsS1ModalOpened(true)}}>Подробнее</div>}
                            </div>
                        </div>
                        {isActive && <div className='line' style={{background: "linear-gradient(270deg, #22952E 0%, #7FDA88 100.3%)"}}></div>}
                        {isActive && 
                            <>
                                <div className='line__etap' style={{color: "#22952E"}}>Этап А</div>
                                <div className='line__etap__prev' style={{color: "#4EA4D9"}}>Этап 0
                                    <div className='line__etap__prev__before' style={{backgroundColor: "#4EA4D9"}}></div>
                                </div>
                                <div className='line__etap__next' style={{color: "#3667AF"}}>Этап Б
                                    <div className='line__etap__next__before' style={{backgroundColor: "#3667AF"}}></div></div>
                                <div className='line__event__wrapper'>
                                    <div className='line__event' style={{width: "25%"}}>
                                        <Link className={"a"} to={routes.A1}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#22952E"}}>А1</div>
                                            <div className='line__event__text'>Испытания и опробования борудования</div>
                                        </Link>
                                    </div>
                                    <div className='line__event' style={{width: "25%"}}>
                                        <Link className={"a"} to={routes.A2}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#22952E"}}>А2</div>
                                            <div className='line__event__text'>Испытания герметичного ограждения</div>
                                        </Link>
                                    </div>
                                    <div className='line__event' style={{width: "25%"}}>
                                        <Link className={"a"} to={routes.A3}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#22952E"}}>А3</div>
                                            <div className='line__event__text'>Холодно-горячая обкатка реакторной установки</div>
                                        </Link>
                                    </div>
                                    <div className='line__event' style={{width: "25%"}}>
                                        <Link className={"a"} to={routes.A4}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#22952E"}}>А4</div>
                                            <div className='line__event__text'>Ревизия основного оборудования реакторной установки</div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                        </>
                    )}
                </SwiperSlide>  
                <SwiperSlide data-hash={3}>
                    {({ isActive }) => (
                        <>
                        <div className='map__slide'>
                            <img 
                            src={Slide3} 
                            alt="Подготовительный этап" 
                            className='map__slide__image'
                            style={{
                                width: isActive ? "68vw" : "45vw",
                                height: isActive ? "36vh" : "24vh",
                                opacity: isActive ? 1 : 0.46,
                            }}>
                            </img>
                            {isActive && (<img className='map__slide__icon' src={Icon3} alt="Slide icon" />)}
                        </div>
                        <div className='event'>
                            {isActive && <div className='event__number' style={{color: "#3667AF"}}>Этап Б</div>}
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                                {isActive && <div className='event__title' onClick={() => {setIsS2ModalOpened(true)}}>Физпуск</div>}
                                {isActive && <div className='event__moreinfo' onClick={() => {setIsS2ModalOpened(true)}}>Подробнее</div>}
                            </div>
                        </div>
                        {isActive && <div className='line' style={{background: "linear-gradient(270deg, #3667AF 0%, #70A1E9 100%)"}}></div>}
                        {isActive && 
                            <>
                                <div className='line__etap' style={{color: "#3667AF"}}>Этап Б</div>
                                <div className='line__etap__prev' style={{color: "#22952E"}}>Этап А
                                    <div className='line__etap__prev__before' style={{backgroundColor: "#22952E"}}></div>
                                </div>
                                <div className='line__etap__next' style={{color: "#263973"}}>Этап В
                                    <div className='line__etap__next__before' style={{backgroundColor: "#263973"}}></div></div>
                                <div className='line__event__wrapper'>
                                    <div className='line__event' style={{width: "50%"}}>
                                        <Link className={"b"} to={routes.B1}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#3667AF"}}>Б1</div>
                                            <div className='line__event__text'>Загрузка реактора ядерным топливом и испытания <br/>в подкритическом состоянии</div>
                                        </Link>
                                    </div>
                                    <div className='line__event' style={{width: "50%"}}>
                                        <Link className={"b"} to={routes.B2}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#3667AF"}}>Б2</div>
                                            <div className='line__event__text'>Достижение критического состояния реактора и выполнение <br/>физических экспериментов на МКУ</div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                        </>
                    )}
                </SwiperSlide>  
                <SwiperSlide data-hash={4}>
                    {({ isActive }) => (
                        <>
                        <div className='map__slide'>
                            <img 
                            src={Slide4} 
                            alt="Подготовительный этап" 
                            className='map__slide__image'
                            style={{
                                width: isActive ? "68vw" : "45vw",
                                height: isActive ? "36vh" : "24vh",
                                opacity: isActive ? 1 : 0.46,
                            }}>
                            </img>
                            {isActive && (<img className='map__slide__icon' src={Icon4} alt="Slide icon" />)}
                        </div>
                        <div className='event'>
                            {isActive && <div className='event__number' style={{color: "#263973"}}>Этап В</div>}
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                                {isActive && <div className='event__title' onClick={() => {setIsS3ModalOpened(true)}}>Энергопуск</div>}
                                {isActive && <div className='event__moreinfo' onClick={() => {setIsS3ModalOpened(true)}}>Подробнее</div>}
                            </div>
                        </div>
                        {isActive && <div className='line' style={{background: "linear-gradient(90deg, #5874C8 0%, #263973 100%)"}}></div>}
                        {isActive && 
                            <>
                                <div className='line__etap' style={{color: "#263973"}}>Этап В</div>
                                <div className='line__etap__prev' style={{color: "#3667AF"}}>Этап Б
                                    <div className='line__etap__prev__before' style={{backgroundColor: "#3667AF"}}></div>
                                </div>
                                <div className='line__etap__next' style={{color: "#621F97"}}>Этап Г
                                    <div className='line__etap__next__before' style={{backgroundColor: "#621F97"}}></div></div>
                                <div className='line__event__wrapper'>
                                    <div className='line__event' style={{width: "35%"}}>
                                        <Link className={"v"} to={routes.V0}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#263973"}}>В1</div>
                                            <div className='line__event__text'>Освоение мощности реактора с уровня мощности физического пуска до включения генератора в сеть</div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                        </>
                    )}
                </SwiperSlide>  
                <SwiperSlide data-hash={5}>
                    {({ isActive }) => (
                        <>
                        <div className='map__slide'>
                            <img 
                            src={Slide5} 
                            alt="Подготовительный этап" 
                            className='map__slide__image'
                            style={{
                                width: isActive ? "68vw" : "45vw",
                                height: isActive ? "36vh" : "24vh",
                                opacity: isActive ? 1 : 0.46,
                            }}>
                            </img>
                            {isActive && (<img className='map__slide__icon' src={Icon5} alt="Slide icon" />)}
                        </div>
                        <div className='event'>
                            {isActive && <div className='event__number' style={{color: "#621F97"}}>Этап Г</div>}
                            <div style={{display: 'flex', flexDirection: 'column', justifyContent: "space-between"}}>
                                {isActive && <div className='event__title' onClick={() => {setIsS4ModalOpened(true)}}>Опытно-промышленная эксплуатация</div>}
                                {isActive && <div className='event__moreinfo' onClick={() => {setIsS4ModalOpened(true)}}>Подробнее</div>}
                            </div>
                        </div>
                        {isActive && <div className='line' style={{background: "linear-gradient(90deg, #B671ED 0%, #621F97 100%)"}}></div>}
                        {isActive && 
                            <>
                                <div className='line__etap' style={{color: "#621F97"}}>Этап Г</div>
                                <div className='line__etap__prev' style={{color: "#263973"}}>Этап В
                                    <div className='line__etap__prev__before' style={{backgroundColor: "#263973"}}></div>
                                </div>
                                <div className='line__etap__next' style={{color: "#4EA4D9"}}>Этап 0
                                    <div className='line__etap__next__before' style={{backgroundColor: "#4EA4D9"}}></div></div>
                                <div className='line__event__wrapper'>
                                    <div className='line__event' style={{width: "50%"}}>
                                        <Link className={"g"} to={routes.G1}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#621F97"}}>Г1</div>
                                            <div className='line__event__text'>Освоение мощности блока АС от включения генератора в сеть до <br/> 100% номинальной мощности</div>
                                        </Link>
                                    </div>
                                    <div className='line__event' style={{width: "50%"}}>
                                        <Link className={"g"} to={routes.G2}>
                                            <Ellipse/>
                                            <div className='line__event__name' style={{color: "#621F97"}}>Г2</div>
                                            <div className='line__event__text'>Комплексное опробование энергоблока АС на номинальной мощности.<br/>Ввод блока АС в эксплуатацию </div>
                                        </Link>
                                    </div>
                                </div>
                            </>
                        }
                        </>
                    )}
                </SwiperSlide>            
            </Swiper>

            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.HOME} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                На главную
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button disabled={true} size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.A0} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап А0
                                <ArrowIcon />
                            </Button>
                        </Link>
                    </div>
                    <div className='footer__right'>
                        <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>ПНР в структуре создания АЭС</Button>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isS0ModalOpened} onClose={() => {setIsS0ModalOpened(false)}}>
                 <div>
                     <div className='modal__stage-subtitle'><div>0</div>этап</div>
                     <h3>Подготовительный этап</h3>
                     <div className='text'>
                     Производится приемка оборудования и систем объектов пускового комплекса блока АЭС, а также оборудования и СКУ реакторного и турбинного отделений из монтажа и выполнение на них ПНР, обеспечивающих проведение этапа А.1.
                     </div>
                 </div>
            </Modal>
            <Modal isOpened={isS1ModalOpened} onClose={() => {setIsS1ModalOpened(false)}}>
                 <div>
                     <div className='modal__stage-subtitle'><div>А</div>этап</div>
                     <h3>Предпусковые наладочные работы</h3>
                     <div className='text'>
                         Этап ввода в эксплуатацию энергоблока АЭС, при котором законченные 
                         строительством и монтажом системы и элементы блока АЭС приводятся 
                         в состояние эксплуатационной готовности с проверкой их соответствия 
                         установленным в проекте критериям и характеристикам и которым завершается 
                         готовность блока АЭС к физическому пуску реактора (разделён на 4 подэтапа).
                     </div>
                 </div>
            </Modal>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                 <div>
                     <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                     <h3>ПРЕДПУСКОВЫЕ НАЛАДОЧНЫЕ РАБОТЫ</h3>
                     <div className='text'>
                         Этап ввода в эксплуатацию энергоблока АЭС, при котором законченные строительством и монтажом системы и элементы блока АЭС приводятся в состояние эксплуатационной готовности с проверкой их соответствия установленным в проекте критериям и характеристикам и который завершается готовность блока АЭС к физическому пуску реактора (разделён на 4 подэтапа).
                     </div>
                 </div>
             </Modal>
             <Modal isOpened={isS2ModalOpened} onClose={() => {setIsS2ModalOpened(false)}}>
                 <div>
                     <div className='modal__stage-subtitle'><div>Б</div>этап</div>
                     <h3>Физпуск</h3>
                     <div className='text'>
                         Этап ввода блока АЭС в эксплуатацию, включающий загрузку реактора ядерным топливом, достижение критического состояния реактора и выполнение необходимых физических экспериментов на уровне мощности, при котором теплоотвод от реак4тора осуществляется за счет естественных теплопотерь.
                     </div>
                 </div>
             </Modal>
             <Modal isOpened={isS3ModalOpened} onClose={() => {setIsS3ModalOpened(false)}}>
                 <div>
                     <div className='modal__stage-subtitle'><div>В</div>этап</div>
                     <h3>Энергопуск</h3>
                     <div className='text'>
                         Ввод АЭС в эксплуатацию от завершения физического пуска реактора до начала выработки электроэнергии.
                     </div>
                 </div>
             </Modal>
             <Modal isOpened={isS4ModalOpened} onClose={() => {setIsS4ModalOpened(false)}}>
                 <div>
                     <div className='modal__stage-subtitle'><div>Г</div>этап</div>
                     <h3>Опытно-промышленная эксплуатация</h3>
                     <div className='text'>
                         Этап ввода в эксплуатацию блока АЭС от энергетического пуска до приемки блока АЭС в промышленную эксплуатацию.
                     </div>
                 </div>
             </Modal>
             <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                 <Structure />
             </Modal>
        </div>
    );
};
