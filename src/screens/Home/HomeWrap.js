import React from 'react'
import BackVideo from '../../components/BackVideo'

import Bg from '../../assets/img/bg1.jpg'

import CenterDecor from '../../components/svg/center-decor'
import SideDecor1 from '../../components/svg/side-decor-1'
import SideDecor3 from '../../components/svg/side-decor-3'
import SideLines from '../../components/svg/side-lines'
import TopLines from '../../components/svg/top-lines'

import LogoSm from '../../components/svg/logo-sm'
import BodyDecor4 from '../../components/svg/body-decor-4'
import BodyDecor1 from '../../components/svg/body-decor-1'
import BodyDecor2 from '../../components/svg/body-decor-2'
import BodyDecor5 from '../../components/svg/body-decor-5'
import BodyDecor6 from '../../components/svg/body-decor-6'
import BodyDecor7 from '../../components/svg/body-decor-7'

export default ({children, navContent, ...props}) => (
	<div className="hud hud-main">
		<div className="hud__container-decor">
			<div className="hud__bg">
				<div className="hud__bg__video" style={{backgroundImage: "url("+Bg+")"}}><BackVideo /></div>
				<div className="hud__bg__decor-top"/>
				<div className="hud__bg__decor-bottom"/>
			</div>

			<div className="hud__header animated slideInDown delay-1s">
				<div className="hud__header__decor__container">
					<div className="hud__header__decor__row-1 hud__header__decor__row-center">
						<div className="hud__header__decor__item">
							<TopLines />
						</div>
					</div>
					<div className="hud__header__decor__row-2 hud__header__decor__row-space-between">
						<div className="hud__header__decor__item">
							<SideLines />
						</div>
						<div className="hud__header__decor__item hud__header__decor__item-reverse">
							<SideLines />
						</div>
					</div>
					<div className="hud__header__decor__row-3 hud__header__decor__row-space-between">
						<div className="hud__header__decor__item">
							<SideDecor1 />
						</div>
						<div className="hud__header__decor__item hud__header__decor__item-reverse">
							<SideDecor1 />
						</div>
					</div>
					<div className="hud__header__decor__row-4 hud__header__decor__row-space-between">
						<div className="hud__header__decor__item">
							<SideDecor3 />
						</div>
						<div className="hud__header__decor__item hud__header__decor__item-reverse">
							<SideDecor3 />
						</div>
					</div>
					<div className="hud__header__decor__row-5 hud__header__decor__row-center">
						<div className="hud__header__decor__item-9">
							<CenterDecor />
						</div>
					</div>
				</div>
			</div>

			<div className={`hud__sidebar hud__sidebar-left animated slow ${!navContent ? 'fadeInLeft' : 'fadeOutLeft'}`}>
				<div className="hud__sidebar-left__decor hud__sidebar-left__decor-1">
					<LogoSm/>
				</div>
			</div>

			<div className="hud__sidebar hud__sidebar-right animated fadeInRight slow delay-1s">
				<div className="hud__sidebar-right__decor hud__sidebar-right__decor-1">
					<BodyDecor1 />
				</div>

				<div className="hud__sidebar-right__decor hud__sidebar-right__decor-2">
					<BodyDecor2 />
				</div>

				<div className="hud__sidebar-right__decor hud__sidebar-right__decor-3">
					<BodyDecor4 />
				</div>

				<div className="hud__sidebar-right__decor hud__sidebar-right__decor-4">
					<BodyDecor5 />
				</div>

				<div className="hud__sidebar-right__decor hud__sidebar-right__decor-5">
					<BodyDecor7 />
				</div>

				<div className="hud__sidebar-right__decor hud__sidebar-right__decor-6">
					<BodyDecor6 />
				</div>
			</div>

			<div className="hud__footer" style={{height: '50px'}}>
				<div className="hud__footer__decor__container animated slideInDown delay-1s">
					<div className="hud__footer__decor__row-1 hud__footer__decor__row-center">
						<div className="hud__footer__decor__item">
							<TopLines />
						</div>
					</div>
					<div className="hud__footer__decor__row-2 hud__footer__decor__row-space-between">
						<div className="hud__footer__decor__item">
							<SideLines />
						</div>
						<div className="hud__footer__decor__item hud__footer__decor__item-reverse">
							<SideLines />
						</div>
					</div>
				</div>
			</div>
		</div>

		{children}
	</div>
)
