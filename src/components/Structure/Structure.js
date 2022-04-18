import cx from 'classnames';
import React, {Component, Fragment, useRef, useState} from 'react'
import { Link } from 'react-router-dom';
import { Button, ButtonSize } from '../Button/Button';
import { Footer } from '../Footer';
import Video from '../Video/Video';
import VideoContainer from '../VideoContainer';
import * as videos from '../../const/videos';
import * as routes from '../../const/routes';
import Layout from '../Layout';
import { ArrowIcon1 } from '../svg/ArrowIcon1';
import './Structure.scss'

import Logo1 from '../../assets/img/s-logo1.png'
import Logo2 from '../../assets/img/s-logo2.png'
import Logo3 from '../../assets/img/s-logo3.png'
import Logo4 from '../../assets/img/s-logo4.png'
import PartnersSvg from '../../assets/img/partners.svg'
import RotateSvg from '../../assets/img/Rotate.svg'

export const Structure = () => {
    const [videoEnded, setVideoEnded] = useState(false);
    const [scroll, setScroll] = useState(0);
    const logosRef = useRef(null);
    const logosInnerRef = useRef(null);
    const logosImgRef = useRef(null);

    const handleNext = () => {
        const width = logosRef.current.offsetWidth;
        const imgWidth = logosImgRef.current.offsetWidth;
        setScroll(width - imgWidth);
    }

    const handlePrev = () => {
        setScroll(0);
    }

    return (
        <div className='structure'>
            <div className='structure__title'>Положение АТЭ в структуре создания АЭС</div>
            <div className='structure__stages'>
                <div className='structure__stage'>
                    Строительно-монтажные <br />
                    и электромонтажные работы
                    <div className='structure__logos'>
                        <div><img src={Logo1} alt='' style={{width: '117px'}} /></div>
                        <div><img src={Logo2} alt='' style={{width: '118px'}} /></div>
                        <div className='_text'>и др.</div>
                    </div>
                </div>
                <div className='structure__stage'>
                    <div className="structure__mid">
                        <img src={RotateSvg} alt='' />
                        <i></i>
                    </div>
                </div>
                <div className='structure__stage'>
                    ПНР и ввод <br />
                    в эксплуатацию
                    <div className='structure__logos'>
                        <div><img src={Logo3} alt='' style={{width: '137px'}} /></div>
                    </div>
                </div>
                <div className='structure__stage'>
                    <div className="structure__mid">
                        <img src={RotateSvg} alt='' />
                        <i></i>
                    </div>
                </div>
                <div className='structure__stage structure__stage_3'>
                    Эксплуатация 
                    <div className='structure__logos'>
                        <div><img src={Logo4} alt='' style={{width: '126px'}} /></div>
                        <div className='_text'>Инозаказчик</div>
                    </div>
                </div>
            </div>
            <div className='structure__partners' ref={logosRef}>
                <div className='structure__arrow prev' onClick={handlePrev}><ArrowIcon1 /></div>
                <div className='structure__arrow next' onClick={handleNext}><ArrowIcon1 /></div>
                <div className='structure__partners-inner' ref={logosInnerRef} style={{left: `${scroll}px`}}>
                    <img src={PartnersSvg} alt='' ref={logosImgRef} />
                </div>
            </div>
        </div>
    );
};
