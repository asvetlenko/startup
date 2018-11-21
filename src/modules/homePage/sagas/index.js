import {delay} from 'redux-saga'
import {put, take, takeLatest, select, throttle, fork} from 'redux-saga/effects'


function * someAction ({payload}) {
    return true;
}

function * homePageSaga () {
    yield [
        takeLatest('SOME_ACTION', someAction),
    ]
    // yield [
    //     takeLatest(playerActions.onPlayerPlay, onPlayerPlay),
    //     takeLatest(playerActions.onPlayerPaused, onPlayerPaused),
    //
    //     takeLatest(playerActions.onPlayerChangeCurrentTimestamp, onPlayerChangeCurrentTimestamp),
    //     takeLatest(playerActions.onPlayerChangeVolume, onPlayerChangeVolume),
    //     takeLatest(playerActions.onPlayerAudioMute, onPlayerAudioMute),
    //     takeLatest(playerActions.onPlayerFullScreen, onPlayerFullScreen),
    //
    //     takeLatest(galleryActions.selectGalleryItem, selectGalleryItem),
    // ]
}

export default homePageSaga
