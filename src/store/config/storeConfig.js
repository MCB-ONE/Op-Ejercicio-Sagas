import { createStore, applyMiddleware,compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from "../reducers/rootReducer";
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from '../sagas/sagas'


export const createAsyncAppStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        rootReducer, 
        compose( 
            applyMiddleware(sagaMiddleware),
            composeWithDevTools() 
        )
    );

    //Asegurarnos de inicializar el Watcher Saga
    sagaMiddleware.run(watcherSaga);
    
    return store;
} 