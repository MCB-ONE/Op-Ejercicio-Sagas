//Async Action Types:Tipos de acciones asincronas que tenemos disponibles
export const API_CALL_REQUEST = 'API_CALL_REQUEST'; //acción que es escuchada continuamente por SAGA WATCHER y el WORKER SAGA despachara una de las siguientes acciones:
//Acciones despachadas por el WORKER SAGA
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; //Aciión que se emitirá cuando haya una petición exitosa 
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; //Aciión que se emitirá cuando alguna petición fallida

//Petición http específica de login
export const login = (email, password) => {
    return{
        type: API_CALL_REQUEST,
        //en el payload mandamos la configuración de la petición axios que queremos hacer
        payload: { 
            request: {
                method: 'post',
                url: 'https://reqres.in/api/login',
                data: {
                    email: email,
                    password: password
                }
            },
            //Acciones que ha de despachar el SAGA WATCHER según el resultado
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    } 
} 

/**
 * Despachador de acción para petición http genérica 
 * */
export const httpRequest = (method, url, data) => {
    return{
        type: API_CALL_REQUEST,
        //en el payload mandamos la configuración de la petición axios que queremos hacer
        payload: { 
            request: {
                method: method,
                url: url,
                data: data,
            },
            //Acciones que ha de despachar el SAGA WATCHER según el resultado
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    } 
}

