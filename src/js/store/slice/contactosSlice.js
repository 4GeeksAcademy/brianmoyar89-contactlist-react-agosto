import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const listaDeContactos = createSlice({
    name: 'lista',
    initialState,
    reducers: {
        
        agregarContacto: (state, argument) => {
            state.push(argument.payload);
        },

        borrarContacto: (state, argument) => {
            state.splice(argument.payload, 1);
        },
    },
});

export const {agregarContacto, modificarContacto, borrarContacto} = listaDeContactos.actions;