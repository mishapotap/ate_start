import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';
import Modal_Image_1 from '../../assets/img/Map/Modals/A3/main/modal-01.jpg';
import Modal_Image_2 from '../../assets/img/Map/Modals/A3/main/modal-02.jpg';
import Modal_Image_3 from '../../assets/img/Map/Modals/A3/main/modal-03.jpg';

export const A3 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.A3;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Холодно-Горячая обкатка реакторной установки</div>
                <div className="step-title1">Подэтап А3</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            <Aes step='a3' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.A2} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап А2
                            </Button>
                        </Link>
                        <Link to={`${routes.MAP}#2`} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.A4} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап А4
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
                    <div className='modal__stage-subtitle'><div>А3</div>подэтап</div>
                    <h3>Холодно-Горячая обкатка реакторной установки</h3>
                    <div className='modal__img__wrapper'>
                        <img src={Modal_Image_1} className='modal__img' alt="" />
                        <img src={Modal_Image_2} className='modal__img' alt="" />
                        <img src={Modal_Image_3} className='modal__img' alt="" />
                    </div>
                    <div className='text'>
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
        </div>
    );
};
