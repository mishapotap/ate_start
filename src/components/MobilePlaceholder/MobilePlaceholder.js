import React, { Component } from 'react'
// import cx from 'classnames'
import './MobilePlaceholder.css'
import Languages from '../../const/languages';

export default class MobilePlaceholder extends Component {
	state = {
		show: false
	}
	componentDidMount() {
        this.setSize()
		window.addEventListener('resize', this.setSize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize)
	}
	setSize = () => {
        const windowWidth = window.innerWidth
        const screenWidth = window.screen.width
		if (windowWidth < 1900 || screenWidth < 1900) {
			this.setState({show: true})
		} else {
			this.setState({show: false})
		}
	}

	render(){
		const { show } = this.state
		return(
			<div className={`mobile-placeholder ${show && "active"}`}>
				<div className="mobile-placeholder__inner">
					<div className="mobile-placeholder__text">
						{Languages.resolutionWarning}
					</div>
				</div>
			</div>
		)
	}
}