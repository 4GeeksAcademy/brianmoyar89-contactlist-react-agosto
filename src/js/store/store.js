import { configureStore } from "@reduxjs/toolkit";
import { listaDeContactos } from "./slice/contactosSlice";

const store = configureStore({
    reducer: {
        contactos: listaDeContactos.reducer
    }
});

export default store;