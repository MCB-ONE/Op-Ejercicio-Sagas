import { combineReducers } from "redux";
import { userReducer } from "./userReducer";



export const rootReducer = combineReducers(
    {   
        //Añadimos al rootReducer el estado de usuario, por lo tanto le decimos al store que va a ser userReducer quien gestione dicho estado
        userState: userReducer
    }
)