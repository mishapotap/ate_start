import React, {Component, Fragment} from 'react'
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import VideoContainer from '../../components/VideoContainer';
import * as videos from '../../const/videos'

const video = videos.video11

export const Home = () => {
    return (
        <Fragment>
            <VideoContainer>
                <Video video={video} />
            </VideoContainer>
            <Footer>
                <div className='footer__left'></div>
                <div className='footer__right'>
                    <Button size={ButtonSize.m} className='footer__btn-structure'>Положение АТЭ в структуре АЭС</Button>
                    <Button size={ButtonSize.m} className='footer__btn-steps'>Этапы пусконаладочных работ в структуре АЭС</Button>
                </div>
            </Footer>
        </Fragment>
    );
};
