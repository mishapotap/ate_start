import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';
import Modal_Image_1 from '../../assets/img/Map/Modals/A0/modal-01.jpg';
import Modal_Image_2 from '../../assets/img/Map/Modals/A0/modal-02.jpg';
import Modal_Image_3 from '../../assets/img/Map/Modals/A0/modal-03.jpg';

export const A0 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.A0;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Подготовительный этап</div>
                <div className="step-title1">Подэтап А0</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            
            
            <Aes step='a0' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.MAP} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                К этапам
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.A1} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап А1
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
                    <div className='modal__stage-subtitle'><div>А0</div>подэтап</div>
                    <h3>Подготовительный этап</h3>
                    <div className='modal__img__wrapper'>
                        <img src={Modal_Image_1} className='modal__img' alt="" />
                        <img src={Modal_Image_2} className='modal__img' alt="" />
                        <img src={Modal_Image_3} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
                        Производится приемка оборудования и систем объектов пускового комплекса блока АЭС, а также оборудования и СКУ реакторного и турбинного отделений из монтажа и выполнение на них ПНР, обеспечивающих проведение этапа А.1.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.A1}>
                            <span>Смотреть далее</span>
                            <span>Подэтап А1</span>
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
