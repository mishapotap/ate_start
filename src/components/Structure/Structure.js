import React from 'react'
import './Structure.scss'

import { structure_icon1, structure_icon2, structure_icon3, Structure1, Structure2, Structure3, structure1_icon1, structure1_icon2, structure1_icon3, structure1_icon4, structure1_icon5, structure1_icon6, structure1_icon7, structure2_icon1, structure2_icon2, structure2_icon3, structure2_icon4, structure2_icon5, structure3_icon1, structure3_icon2, structure3_icon3, structure3_icon4, structure3_icon5 } from '../../assets/img/Structure';
import { Ellipse } from '../svg/Ellipse'

export const Structure = () => {

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
                        <img src={structure_icon1} alt="Slide icon" />
                    </div>
                    <div className='structure__text'>Строительно-монтажные и электромонтажные работы</div>
                    <div className='structure__line'>
                        <Ellipse/>
                    </div>
                    <div className='structure__logos'>
                        <img src={structure1_icon1} alt='' />
                        <img src={structure1_icon2} alt='' />
                        <img src={structure1_icon3} alt='' />
                        <img src={structure1_icon4} alt='' />
                        <img src={structure1_icon5} alt='' />
                        <img src={structure1_icon6} alt='' />
                        <img src={structure1_icon7} alt='' />
                    </div>
                </div>
                <div className="structure__stage" onClick={setActiveClass}>
                    <div className='structure__image__wrapper' style={{backgroundImage: `url(${Structure2})`}}>
                        <img src={structure_icon2} alt="Slide icon" />
                    </div>
                    <div className='structure__text'>ПНР и ввод в эксплуатацию</div>
                    <div className='structure__line'>
                        <Ellipse/>
                    </div>
                    <div className='structure__logos'>
                        <img src={structure2_icon1} alt='' />
                        <img src={structure2_icon2} alt='' />
                        <img src={structure2_icon3} alt='' />
                        <img src={structure2_icon4} alt='' />
                        <img src={structure2_icon5} alt='' />
                    </div>
                </div>
                <div className="structure__stage" onClick={setActiveClass}>
                    <div className='structure__image__wrapper' style={{backgroundImage: `url(${Structure3})`}}>
                        <img src={structure_icon3} alt="Slide icon" />
                    </div>
                    <div className='structure__text'>Эксплуатация</div>
                    <div className='structure__line'>
                        <Ellipse/>
                    </div>
                    <div className='structure__logos'>
                        <img src={structure3_icon1} alt='' />
                        <img src={structure3_icon2} alt='' />
                        <img src={structure3_icon3} alt='' />
                        <img src={structure3_icon4} alt='' />
                        <img src={structure3_icon5} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};
