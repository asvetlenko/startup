import {applyMiddleware, compose, createStore} from "redux";
import {routerMiddleware} from "connected-react-router";
import createSagaMiddleware from 'redux-saga'

import rootReducer from "./rootReducer/index";
import rootSaga from './rootSaga'

function createReduxStore (history) {
    const middleware = []
    const enhancers = []

    /* ------------- Saga Middleware ------------- */
    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)

    /* ------------- Router Middleware ------------- */
    const reactRouterMiddleware = routerMiddleware(history)
    middleware.push(reactRouterMiddleware)

    /* ------------- Assemble Middleware ------------- */
    enhancers.push(applyMiddleware(...middleware))

    const store = createStore(rootReducer(history), compose(...enhancers))
    sagaMiddleware.run(rootSaga)

    return store
}

export default createReduxStore;
