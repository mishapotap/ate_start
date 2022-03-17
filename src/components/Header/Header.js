import React from 'react'
import './Header.scss';

import Logo from '../../assets/img/logo.png'
import { BurgerMenu } from '../svg/BurgerMenu';

export const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'><img src={Logo} alt='' /></div>
            <div className='header__middle'>Этапы ввода в эксплуатацию АЭС</div>
            <div className='header__menu'>
                <div className='menu-btn'>
                    интерактивные проекты
                    <BurgerMenu />
                </div>
            </div>
        </div>
    );
};
