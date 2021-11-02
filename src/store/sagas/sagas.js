import { takeLatest, call, put } from 'redux-saga/effects';
import { axios } from 'axios';
import { API_CALL_REQUEST } from '../actions/asyncActions';




/**
 *  Watcher Saga
 *  Listens the API_CALL_REQUEST actions (Creando el Watcher Saga que va a escuchar continuamente las acciones API_CALL_REQUEST)
 */
export function* watcherSaga(){
    //Escucha la acción e inicializa un worker Saga
    yield takeLatest(API_CALL_REQUEST, workerSaga)
}

/**
 * Worker Saga
 * Es llamado desde el Worker Saga, hace el login y despacha una acción
 */
export function* workerSaga(action){
    try{
        const response = yield call(fetchHttp(action.payload.request))
        // Cundo se tenga la respuesta obtenemos un token
        const token = response.data.token; 
        yield put({//put espera una action
            type: action.payload.okAction, //Es igual API_CALL_SUCCESS
            payload: {
                token: token
            }
        });
    }
    catch(error){
        //en caso de error emitimos un fail action
        yield put({//put espera una action
            type: action.payload.failAction, //Es igual API_CALL_FAILURE
            payload: {
                error: error
            }
        });
    }
}

/**
 * Función que recibe la request
 * Retorna la ejecucción de una función que a su vez retorna una petición axios que es asincrona
 */

function fetchHttp(request){
    return function(){
        return (axios(request))
    }
}