import {locations, projects} from "../../const/projects";

export const debounce = (fn, time=500) => {
  let timeout;

  return function() {
    const functionCall = () => fn.apply(this, arguments);

    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  }
}

export const windowHeight = () => {
  const doc = document, body = doc.body, html = doc.documentElement
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
}

export const windowWidth = () => {
  const doc = document, body = doc.body, html = doc.documentElement
  return Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth)
}

export const requestFullScreen = (element) => {
  var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
  if (requestMethod) { // Native full screen.
    requestMethod.call(element)
  }
}

export const cancelFullScreen = (element) => {
	var requestMethod = element.cancelFullScreen||element.webkitCancelFullScreen||element.mozCancelFullScreen||element.exitFullscreen;
  if (requestMethod) {
    requestMethod.call(element)
  }
}

export const toggleFullScreen = ({element = document.body, ...args}) => {
  var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) ||  (document.mozFullScreen || document.webkitIsFullScreen);
  if (isInFullScreen) {
    cancelFullScreen(document)
  } else {
    requestFullScreen(element)
  }
  return false
}

export const isMobile = () => {

  var testExp = new RegExp('Android|webOS|iPhone|iPad|' +
               'BlackBerry|Windows Phone|'  +
               'Opera Mini|IEMobile|Mobile' ,
              'i')

  if (navigator.userAgent.match(/Mobi/)) {
    return true
  }

  if (testExp.test(navigator.userAgent)) {
    return true
  }

  if ('screen' in window && window.screen.width < 1366) {
    return true
  }

  var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection
  if (connection && connection.type === 'cellular') {
    return true
  }

  return false
}

export const isIos = () => {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
  return iOS
}

export const isIE = () => {
  return window.navigator.userAgent.indexOf("Edge") > -1
}

export const numberToHHMMSS = function (number) {
  var sec_num = number
  var hours   = Math.floor(sec_num / 3600)
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60)
  var seconds = Math.round(sec_num - (hours * 3600) - (minutes * 60))


  if (minutes < 10) {minutes = "0"+minutes}
  if (seconds < 10) {seconds = "0"+seconds}
  var str = minutes + ':' + seconds
  if (hours > 0) {
    if (hours < 10) {hours   = "0"+hours}
    str = hours + ':' + str
  }
  return str
}

export const getElementOffset = function (element) {
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offsetTop = elemRect.top - bodyRect.top,
    offsetLeft = elemRect.left - bodyRect.left;

  return { top: offsetTop, left: offsetLeft}
}

export const random = (min, max) => Math.random() * (+max - +min) + +min;

export const getLabelPositionForMapPoint = (positionNumber) => {
  switch (positionNumber) {
    case 1:
      return 'hud-map__point-top-right'

    case 2:
      return 'hud-map__point-bottom-left'

    case 3:
      return 'hud-map__point-bottom-right'

    default:
        return 'hud-map__point-top-left'
  }
}

export const catalog = (products, section) => { //набираем в выбранную категорию товары по 3 шт
  let res = [], gr = [];
  for(let i = 0; i < products.length; i++) {
    if(section === products[i].section) {
      if(gr.length ===3) {
        res.push(gr);
        gr = [];
      }
      gr.push(products[i]);
    }
  }
  if(gr.length) res.push(gr);
  return res;
}

export const loadingLocationData = (locationId) => {
  const thisLocation = locations.find((item) => item.id === locationId);
  const thisProjects = (thisLocation && projects.filter((item) => item.locationId === thisLocation.id)) || null

  return {
    thisLocation,
    thisProjects
  }
}