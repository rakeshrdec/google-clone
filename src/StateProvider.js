import React , { createContext , useContext, useReducer } from "react";

//preparing Data Layer 
export const StateContext = createContext();

export const StateProvider = ( { reducer , initialState , children }) => (

    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// HOOK WHICH ALLOWS TO PULL INFORMATION FROM DATA LAYER  
export const useStateValue = () => useContext(StateContext);