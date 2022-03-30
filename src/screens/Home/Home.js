import cx from 'classnames';
import React, {Component, Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import VideoContainer from '../../components/VideoContainer';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import Layout from '../../components/Layout';
import { ArrowIcon1 } from '../../components/svg/ArrowIcon1';

const video = videos.video11

export const Home = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    return (
        <Layout>
            <Video video={video} controls={false} background={true} onEnded={() => {setVideoEnded(true)}} />
            <Link to={routes.FINAL} className={cx('arrow-btn arrow-btn_prev', !videoEnded && 'hidden')}>
                <span className='arrow-btn__arrow'>
                    <ArrowIcon1 />
                    <span className='arrow-btn__text'>Назад</span>
                </span>
            </Link>
            <Link to={routes.A0} className={cx('arrow-btn arrow-btn_next', !videoEnded && 'hidden')}>
                <span className='arrow-btn__arrow'>
                    <ArrowIcon1 />
                    <span className='arrow-btn__text'>Вперед</span>
                </span>
            </Link>
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
