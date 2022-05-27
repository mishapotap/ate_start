import cx from 'classnames';
import React, {Component, Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import VideoContainer from '../../components/VideoContainer';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import Layout from '../../components/Layout';
import { ArrowIcon } from '../../components/svg/ArrowIcon';
import { ArrowIcon1 } from '../../components/svg/ArrowIcon1';
import { Modal } from '../../components/Modal/Modal';
import { Structure } from '../../components/Structure';

const video = videos.video11
const video4 = videos.video4

export const Home = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const [isStructureOpened, setIsStructureOpened] = useState(false);
    
    useEffect(() => {
        window.lastStep = routes.HOME
    }, []);

    return (
        <div className='page'>
            <Video video={video} controls={false} background={true} onEnded={() => {setVideoEnded(true)}} />
                        
            <div style={{opacity: videoEnded ? 1 : 0}}>
                <Video video={video4} controls={false} background={true} loop={true} />
            </div>

            {/* <Link to={routes.FINAL} className={cx('arrow-btn arrow-btn_prev', !videoEnded && 'hidden')}>
                <span className='arrow-btn__arrow'>
                    <ArrowIcon1 />
                    <span className='arrow-btn__text'>Назад</span>
                </span>
            </Link> */}
            <Link to={routes.MAP} className={cx('arrow-btn arrow-btn_next', !videoEnded && 'hidden')}>
                <span className='arrow-btn__arrow'>
                    <ArrowIcon1 />
                    <span className='arrow-btn__text'>Вперед</span>
                </span>
            </Link>
            <Footer>
                <div className='footer__btns'>
                     
                </div>
                <div className='footer__content'>
                    <div className='footer__middle'>
                        {/* <Link to={routes.MAP} className='footer__pagebutton _prev'>
                            <Button theme="white" size={ButtonSize.m}>
                                <ArrowIcon />
                                К этапам
                            </Button>
                        </Link> */}
                        <Link to={routes.MAP} className='footer__pagebutton _middle'>
                            <Button size={ButtonSize.m}>
                                Этапы пусконаладочных работ
                            </Button>
                        </Link>
                        {/* <Link to={routes.A1} className='footer__pagebutton _next'>
                            <Button theme="white" size={ButtonSize.m}>
                                Подэтап А1
                                <ArrowIcon />
                            </Button>
                        </Link> */}
                    </div>
                    <div className='footer__right'>
                        <Button size={ButtonSize.m} onClick={() => {setIsStructureOpened(true)}}>ПНР в структуре создания АЭС</Button>
                    </div>
                </div>
            </Footer>

            <Modal isOpened={isStructureOpened} onClose={() => {setIsStructureOpened(false)}} className='modal_large'>
                <Structure />
            </Modal>
        </div>
    );
};
