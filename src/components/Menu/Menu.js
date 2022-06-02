import React from 'react'
import './Menu.css'
import { navimg1, navimg2, navimg3, navimg4, navimg5, navicon1, navicon2, navicon3, navicon4, navicon5 } from '../../assets/img/Nav';
import { Ellipse } from '../svg/Ellipse'

export const Menu = () => {

    const nav = [
        {
            id: "1",
            name: 'Текущие и выполненные проекты АТЭ',
            image: navimg1,
            icon: navicon1,
            pathname: 'https://ate5.avt.promo/',
          },
          {
            id: "2",
            name: 'Филиалы и Представительства АТЭ',
            image: navimg2,
            icon: navicon2,
            pathname: 'https://ate5.avt.promo/',
          },
          {
            id: "3",
            name: 'История АО «Атомтехэнерго»',
            image: navimg3,
            icon: navicon3,
            pathname: 'https://ate4.avt.promo/',
          },
          {
            id: "4",
            name: 'Этапы пусконаладочных работ АЭС',
            image: navimg4,
            icon: navicon4,
            pathname: 'https://ate3.avt.promo/',
          },
          {
            id: "5",
            name: 'Портфель заказов АТЭ',
            image: navimg5,
            icon: navicon5,
            pathname: 'https://ate5.avt.promo/',
          },
    ]
    
    return (
        <div className='menu'>
            <div className='menu__stages'>
                {nav.map((item) => (
                    <a key={item.id} className="menu__stage" href={item.pathname}>
                        <div className='menu__image__wrapper' style={{backgroundImage: `url(${item.image})`}}>
                            <img src={item.icon} alt="Slide icon" />
                        </div>
                        <div className='menu__text'>{item.name}</div>
                        <div className='menu__line'>
                            <Ellipse/>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};
