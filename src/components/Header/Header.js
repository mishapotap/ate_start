import React from "react";
import "./Header.scss";
import Logo from "../../assets/img/logo.png";

export const Header = () => {
	return (
        <div className="header">
            <div className="header__logo">
                <img src={Logo} alt="" />
            </div>
            <div className="header__menu">
                <div className="menu-btn">интерактивные проекты</div>
            </div>
        </div>
	);
};
