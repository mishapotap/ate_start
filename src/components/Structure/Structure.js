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

import { Structure1, Structure2, Structure3  } from '../../assets/img/Structure';
import PartnersSvg from '../../assets/img/partners.svg'
import RotateSvg from '../../assets/img/Rotate.svg'
import { Ellipse } from '../svg/Ellipse'
import Icon1 from "../../assets/img/Map/structure_icon1.png";
import Icon2 from "../../assets/img/Map/structure_icon2.png";
import Icon3 from "../../assets/img/Map/structure_icon3.png";

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

    const setActiveClass = (e) => {
        const slides = document.querySelectorAll(".structure__stage");
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        e.currentTarget.classList.add("active");
    }
    
    return (
        <div className='structure'>
            <div className='structure__title'>Положение АТЭ в структуре создания АЭС</div>
            <div className='structure__stages'>
                <div className="structure__stage active" onClick={setActiveClass}>
                    <div className='structure__image__wrapper' style={{backgroundImage: `url(${Structure1})`}}>
                        <img src={Icon1} alt="Slide icon" />
                    </div>
                    <div className='structure__text'>Строительно-монтажные и электромонтажные работы</div>
                    <div className='structure__line'>
                        <Ellipse/>
                    </div>
                    {/* <div style={{display: "flex", justifyContent: "flex-end"}}> */}
                    {/* </div> */}
                    <div className='structure__logos'>
                        <div><img src={Logo1} alt='' style={{width: '117px'}} /></div>
                        <div><img src={Logo2} alt='' style={{width: '118px'}} /></div>
                        <div className='_text'>и др.</div>
                    </div>
                </div>
                <div className="structure__stage" onClick={setActiveClass}>
                    <div className='structure__image__wrapper' style={{backgroundImage: `url(${Structure2})`}}>
                        <img src={Icon2} alt="Slide icon" />
                    </div>
                    <div className='structure__text'>ПНР и ввод в эксплуатацию</div>
                    <div className='structure__line'>
                        <Ellipse/>
                    </div>
                    <div className='structure__logos'>
                        <div><img src={Logo3} alt='' style={{width: '137px'}} /></div>
                    </div>
                </div>
                <div className="structure__stage" onClick={setActiveClass}>
                    <div className='structure__image__wrapper' style={{backgroundImage: `url(${Structure3})`}}>
                        <img src={Icon3} alt="Slide icon" />
                    </div>
                    <div className='structure__text'>Эксплуатация</div>
                    <div className='structure__line'>
                        <Ellipse/>
                    </div>
                    <div className='structure__logos'>
                        <div><img src={Logo4} alt='' style={{width: '126px'}} /></div>
                        <div className='_text'>Инозаказчик</div>
                    </div>
                </div>
            </div>
            {/* <div className='structure__line'></div> */}
        </div>
    );
};
