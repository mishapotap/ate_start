import React, {Component} from 'react'
import Player from '@vimeo/player'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import './Video.css'
import VideoContainer from '../../components/VideoContainer'
import VideoControls from '../../components/VideoControls'
import VideoProgressBar from '../../components/VideoProgressBar'
import Throbber from '../../components/Throbber'
import PlayBtn from '../../components/PlayBtn'
import Volume from '../../components/Volume'
import '../../assets/scss/transitions.scss'
import * as videos from "../../const/videos";

export default class VimeoPlayer extends Component {
    state = {
        loaded: true,
        showThrobber: true,
        initialPlay: false,
        showTitle: false,
        showPlayBtn: false,
        paused: false,
        volume: 0.5,
    }

    timeupdateCounter = 0

    componentDidMount() {
        this.initPlayer()
    }

    componentDidUpdate() {
        const {vimeoId} = this.props
        if (vimeoId !== this.vimeoId) {
            // this.vimeoId = vimeoId
            // this.player.loadVideo(vimeoId).then((id) => {
            // 	this.hookEvents()
            // }).catch((error) => {
            // 	console.log('loadVideo error', error)
            // })
        }
    }

    componentWillUnmount() {
        const {ui, background} = this.props
        this.player.off('timeupdate')
        this.player.off('ended')
        this.player.off('loaded')
        this.player.off('bufferend')
        this.player.off('bufferstart')
        this.player.off('play')

        clearInterval(this.watchInterval)
        clearInterval(this.watchDurationInterval)

        // if (!ui.isBackAudioMutedByUser && !background) ui.playBackAudio()
    }

    initPlayer = () => {
        const {vimeoId} = this.props
        this.vimeoId = vimeoId
        this.player = new Player(this.videoEl)
        this.hookEvents()
        this.hookVimeoTimeUpdate()
    }

    hookEvents = () => {
        this.player.on('ended', this.handleEnded)
        this.player.on('loaded', this.handleLoaded)
        this.player.on('bufferend', this.handleBufferend)
        this.player.on('bufferstart', this.handleBufferstart)
        this.player.on('play', this.handlePlay)
        // this.player.on('timeupdate', this.handleTimeupdate)
    }

    handleLoaded = (data) => {
        this.play()
        setTimeout(() => {
            this.hideThrobber()
            this.hideTitle()
        }, 3000)
        setTimeout(() => {
            // if (!this.timeupdateCounter < 2 && isMobile() && !isIos()) this.showPlayBtn()
            // if (!this.timeupdateCounter < 2 && isMobile()) this.showPlayBtn()
        }, 4500)
    }

    handlePlay = (data) => {
        this.setState({initialPlay: true})
        this.ended = false
    }

    hookVimeoTimeUpdate = () => {
        this.watchInterval = setInterval(() => {
            this.player.getCurrentTime().then((seconds) => {
                const duration = this.duration
                if (seconds > 0.1 && !this.ended) {
                    this.hideThrobber()
                    if (this.props.onTimeUpdate) {
                        this.props.onTimeUpdate(seconds, duration)
                    }
                }
                if (seconds > duration - 0.2 && !this.ended) {
                    this.ended = true
                    // this.handleEnded()
                    this.player.setCurrentTime(duration - 0.01).then(
                        this.player.pause().then(this.handleEnded())
                    )
                }
            })
        }, 30)
        this.watchDurationInterval = setInterval(() => {
            this.player.getDuration().then((duration) => {
                if (duration !== this.duration) {
                    this.duration = duration
                    this.ended = false
                    // if (this.props.hasProgressbar) this.setState({progressbar: true})
                }
            })
        }, 30)
    }

    handleBufferstart = () => {
        const {initialPlay} = this.state
        if (initialPlay) this.showThrobber()
    }

    handleBufferend = () => {
        this.hideThrobber()
    }

    hideThrobber = () => {
        const {showThrobber} = this.state
        if (showThrobber) {
            this.setState({showThrobber: false})
        }
    }

    showThrobber = () => {
        const {showThrobber} = this.state
        if (!showThrobber) this.setState({showThrobber: true})
    }

    hideTitle = () => {
        const {showTitle} = this.state
        if (showTitle) this.setState({showTitle: false})
    }

    showPlayBtn = () => {
        const {showPlayBtn} = this.state
        if (!showPlayBtn) {
            this.setState({showPlayBtn: true})
        }
    }

    hidePlayBtn = () => {
        const {showPlayBtn} = this.state
        if (showPlayBtn) {
            this.setState({showPlayBtn: false})
        }
    }

    play = () => {
        const {ui, background} = this.props
        let playPromise = this.player.play()
        if (playPromise !== 'undefined') {
            playPromise.then((e) => {
                this.hidePlayBtn()
                this.setState({paused: false})
                // if (!background) ui.pauseBackAudio()
            })
                .catch(error => {
                    this.showPlayBtn()
                    console.warn('Video error', error)
                })
        }
    }

    handleEnded = () => {
        const {showNavigationOnEnded = false, ui, onEnded, background} = this.props
        // if (showNavigationOnEnded && !ui.navExpanded) ui.toggleNav()
        // if (!ui.isBackAudioMutedByUser && !background) ui.playBackAudio()
        if (onEnded) onEnded()
    }

    pause = () => {
        const player = this.player
        this.setState({paused: true, showPlayBtn: true})
        player.pause()
    }

    togglePlay = () => {
        const player = this.player
        player.getPaused().then((paused) => {
            paused ? this.play() : this.pause()
        });
        // this.hideThrobber()
    }

    handleVolumeChange = (volume) => {
        const {player} = this
        // if (video) video.volume = volume
        if (player) player.setVolume(volume);
        this.setState({volume: volume})
    }

    toggleVolume = () => {
        const {player} = this
        // if (video) {
        // 	video.volume > 0 ? video.volume = 0 : video.volume = 0.5
        // }
        if (player) {
            player.getVolume().then((volume) => {
                if (volume > 0.01) {
                    player.setVolume(0)
                    this.setState({volume: 0})
                } else {
                    player.setVolume(0.5)
                    this.setState({volume: 0.5})
                }
            })
        }
    }

    render() {
        const {showThrobber, showTitle, showPlayBtn, paused, volume} = this.state
        const {
            vimeoId,
            video,
            background,
            volumeSwiper
        } = this.props
        const {title} = video
        // const muted = isIos() ? true : false
        const muted = false

        return (
            <div className="video">
                <TransitionGroup>
                    {title && showTitle &&
                    <CSSTransition timeout={500} classNames="fade">
                        <div className="video-title">{title}</div>
                    </CSSTransition>
                    }
                </TransitionGroup>

                <VideoContainer id="vimeo-player">
                    <iframe className="vimeo-player"
                            src={"https://player.vimeo.com/video/" + vimeoId + "?background=1&autoplay=1" + (!muted ? "&muted=0" : "") + "&loop=0&quality=2k&playsinline=1"}
                            width="1920" height="1080"
                            frameBorder="0" allow="autoplay; fullscreen"
                            ref={(videoEl) => this.videoEl = videoEl}
                            title={title}
                    />
                    <div className="vimeo-player-overlay" onClick={this.togglePlay}/>
                </VideoContainer>

                {<VideoControls player={this.player} isVimeo={true}/>}

                {!background &&
                <VideoProgressBar player={this.player} onPauseBtnClick={this.togglePlay} paused={paused}/>
                }

                <TransitionGroup>
                    {showThrobber &&
                    <CSSTransition timeout={500} classNames="fade">
                        <Throbber video={true}/>
                    </CSSTransition>
                    }
                </TransitionGroup>

                <TransitionGroup>
                    {showPlayBtn &&
                    <CSSTransition timeout={500} classNames="fade">
                        <PlayBtn onClick={this.play}/>
                    </CSSTransition>
                    }
                </TransitionGroup>

                {/* { volumeSwiper && 
                    <Volume onVolumeChange={this.handleVolumeChange} onToggleVolume={this.toggleVolume} volume={volume} /> 
                } */}
            </div>
        );
    }
}

