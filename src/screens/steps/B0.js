import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Aes } from '../../components/Aes';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';

export const B0 = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);

    useEffect(() => {
        window.lastStep = routes.B0;
    }, []);

    return (
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Физический пуск</div>
                <div className="step-title1">Этап Б</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            <Aes step='b0' />
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.A4} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап А4
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        <Link to={routes.B1} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап Б1
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
                    <div className='modal__stage-subtitle'><div>Б</div>этап</div>
                    <h3>Физический пуск</h3>
                    <div className='text'>
                        Этап ввода блока АЭС в эксплуатацию, включающий загрузку реактора ядерным топливом, достижение критического состояния реактора и выполнение необходимых физических экспериментов на уровне мощности, при котором теплоотвод от реак4тора осуществляется за счет естественных теплопотерь.
                    </div>
                    <div className='modal__link'>
                        <Link to={routes.B1}>
                            <span>Смотреть далее</span>
                            <span>Подэтап Б1</span>
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
