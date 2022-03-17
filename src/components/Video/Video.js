import React, {Component} from 'react'
import './Video.css'
import VideoPlayer from './VideoPlayer'
import VimeoPlayer from './VimeoPlayer'
import appConfig from '../../const/config';

export default class Video extends Component {

    render() {
        const {
            video,
            autoshow = false,
            onEnded = false,
            isMapPlaying = false,
            onTimeUpdate,
            background,
            loop,
            controls = true,
            volumeSwiper = true,
            navContent
        } = this.props
        const {file, vimeo_id, vimeo} = video
        
        if (vimeo_id && vimeo_id.length) {
            return (
                <VimeoPlayer vimeoId={vimeo_id} volumeSwiper={volumeSwiper} {...this.props} />
            )
        } else if (vimeo && vimeo[appConfig.locale] && vimeo[appConfig.locale].length) {
            return (
                <VimeoPlayer vimeoId={vimeo[appConfig.locale]} volumeSwiper={volumeSwiper} {...this.props} />
            )
        } else {
            return (
                <VideoPlayer
                    video={file}
                    autoshow={autoshow}
                    onEnded={onEnded}
                    title={video.title}
                    isMapPlaying={isMapPlaying}
                    background={background}
                    loop={loop}
                    onTimeUpdate={onTimeUpdate}
                    controls={controls}
                    volumeSwiper={volumeSwiper}
                    navContent={navContent}
                />
            )
        }
    }
}
