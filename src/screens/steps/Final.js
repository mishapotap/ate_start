import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';

const video1 = videos.finalIntro
const video2 = videos.finalVideo

export const Final = () => {
    const [isStepModalOpened, setIsStepModalOpened] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);
    const [isIntroEnded, setIsIntroEnded] = useState(false);

    useEffect(() => {
        window.lastStep = routes.FINAL;
    }, []);
    
    const handleEnded = () => {
        setIsIntroEnded(true);
    }

    return (
        <div className='page'>
            <div className='step-wrapper'>
                <div className="step-title">Промышленная эксплуатация</div>
                <div className="step-title1">Финал</div>
            </div>
            <div className="step-title__details" onClick={() => {setIsStepModalOpened(true)}}>Подробнее</div>
            
            <Video video={video1} controls={false} background={true} onEnded={handleEnded} />
            
            <div style={{opacity: isIntroEnded ? 1 : 0}}>
                <Video video={video2} controls={false} background={true} loop={true} />
            </div>
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        <Link to={routes.G2} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                Подэтап Г2
                            </Button>
                        </Link>
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        {/* <Link to={routes.FINAL} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Финал
                                <ArrowIcon />
                            </Button>
                        </Link> */}
                    </div>
                    <div className='footer__right'>
                        <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>ПНР в структуре создания АЭС</Button>
                    </div>
                </div>
            </Footer>
            <Modal isOpened={isStepModalOpened} onClose={() => {setIsStepModalOpened(false)}}>
                <div>
                    <h3>Промышленная эксплуатация</h3>
                    <div className='text'>
                        Промышленная эксплуатация - это эксплуатация блока АЭС, безопасность и соответствие проекту которого подтверждены испытаниями в процессе ввода в эксплуатацию. Осуществляется после выдачи ГК «РОСТАТОМ» Разрешения на ввод в эксплуатацию блока АЭС.
                    </div>
                </div>
            </Modal>

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </div>
    );
};
