import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../../components/Button/Button';
import { Footer } from '../../components/Footer';
import Video from '../../components/Video/Video';
import VideoContainer from '../../components/VideoContainer';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import Layout from '../../components/Layout';

const video = videos.video11

export const Home = () => {
    return (
        <Layout>
            <VideoContainer>
                <Video video={video} controls={false} background={true} />
            </VideoContainer>
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
