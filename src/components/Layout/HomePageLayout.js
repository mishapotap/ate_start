import React, { Component } from 'react';
// import cx from 'classnames'
import './Layout.css'
import Layout from './Layout'

class HomePageLayout extends Component {
	render() {
		const {children} = this.props
		return (
			<Layout header={true} footer={false} isHomePage={true} pageClassName="page_homepage">
				{children}
			</Layout>
		)
	}
}

export default HomePageLayout
