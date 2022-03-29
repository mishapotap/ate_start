import React, {Component} from 'react'
import cx from 'classnames'
import './VideoContainer.css'

const VIDEO_WIDTH = 16
const VIDEO_HEIGHT = 9

export default class VideoContainer extends Component {
    state = {
        width: 0,
        height: 0
    }

    componentDidMount() {
        this.setSize()
        window.addEventListener('resize', this.setSize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setSize)
    }

    getRatioTreshold = () => {
        const {videoCoverViewport} = this.props

        return videoCoverViewport ? 0 : 43
    }

    setSize = () => {
        const ratioTreshold = this.getRatioTreshold()
        const windowWidth = window.innerWidth
        // const windowHeight = window.innerHeight - 89
        const windowHeight = window.innerHeight
        let width, height
        let expectedHeight = windowWidth / VIDEO_WIDTH * VIDEO_HEIGHT

        height = windowHeight
        width = windowHeight / VIDEO_HEIGHT * VIDEO_WIDTH

        // if ( expectedHeight < windowHeight ) {

        // if (windowHeight - expectedHeight > windowHeight / (100 / ratioTreshold)) {
        //     height = windowHeight
        //     width = windowHeight / VIDEO_HEIGHT * VIDEO_WIDTH
        // } else {
        //     width = windowWidth
        //     height = expectedHeight
        // }

        this.setState({width: width, height: height})
    }

    render() {
        const {className, children} = this.props
        const {width, height} = this.state

        return (
            <div className={cx("video-container", className && className)}>
                <div className="video-container__inner"
                     style={{width: width, height: height}}
                     ref={(container) => this.container = container}>
                    {children}
                </div>
            </div>
        );
    }
}
