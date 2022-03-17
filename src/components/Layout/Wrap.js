import React from 'react'
import CenterDecor from '../Svg/center-decor'
import SideDecor1 from '../Svg/side-decor-1'
import SideDecor2 from '../Svg/side-decor-2'
import SideLines from '../Svg/side-lines'
import TopLines from '../Svg/top-lines'

export default ({children, ...props}) => (
  <div className="hud-main">
	  <div className="hud-main__bg">
	    <div className="hud-main__bg__video">Фоновое видео</div>
	    <div className="hud-main__bg__decor-top"/>
	    <div className="hud-main__bg__decor-bottom"/>
	  </div>

	  <div className="hud-main__header">
	    <div className="hud-main__header__decor__container">
	      <div className="hud-main__header__decor__row-1 hud-main__header__decor__row-center">
	        <div className="hud-main__header__decor__item">
	          <TopLines />
	        </div>
	      </div>
	      <div className="hud-main__header__decor__row-2 hud-main__header__decor__row-space-between">
	        <div className="hud-main__header__decor__item">
	          <SideLines />
	        </div>
	        <div className="hud-main__header__decor__item hud-main__header__decor__item-reverse">
	          <SideLines />
	        </div>
	      </div>
	      <div className="hud-main__header__decor__row-3 hud-main__header__decor__row-space-between">
	        <div className="hud-main__header__decor__item">
	          <SideDecor1 />
	        </div>
	        <div className="hud-main__header__decor__item hud-main__header__decor__item-reverse">
	          <SideDecor1 />
	        </div>
	      </div>
	      <div className="hud-main__header__decor__row-4 hud-main__header__decor__row-space-between">
	        <div className="hud-main__header__decor__item">
	          <SideDecor2 />
	        </div>
	        <div className="hud-main__header__decor__item hud-main__header__decor__item-reverse">
	          <SideDecor2 />
	        </div>
	      </div>
	      <div className="hud-main__header__decor__row-5 hud-main__header__decor__row-center">
	        <div className="hud-main__header__decor__item-9">
	          <CenterDecor />
	        </div>
	      </div>
	    </div>
	  </div>

	  {children}

	  <div className="hud-main__footer">
	    <div className="hud-main__footer__decor__container">
	      <div className="hud-main__footer__decor__row-1 hud-main__footer__decor__row-center">
	        <div className="hud-main__footer__decor__item">
	          <TopLines />
	        </div>
	      </div>
	      <div className="hud-main__footer__decor__row-2 hud-main__footer__decor__row-space-between">
	        <div className="hud-main__footer__decor__item">
	          <SideLines />
	        </div>
	        <div className="hud-main__footer__decor__item hud-main__footer__decor__item-reverse">
	          <SideLines />
	        </div>
	      </div>
	    </div>
	  </div>
	</div>
)
