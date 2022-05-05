import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const iframePlayer = new Player(iframe);
const KEY = 'videoplayer-current-time';

iframePlayer.setCurrentTime(onCurrentTime());

iframePlayer.on('timeupdate', throttle(onTimeUpdate, 1000));

function onTimeUpdate(e) {
  localStorage.setItem(KEY, JSON.stringify(e.seconds));
}

function onCurrentTime() {
  const savedData = localStorage.getItem(KEY);
  const parsedData = JSON.parse(savedData);
  return parsedData;
}

