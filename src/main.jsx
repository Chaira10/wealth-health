import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistReducer, persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import dataReducer from "./Features/dataReducer.js";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  // L'objet passé à combineReducers spécifie comment les différents morceaux de state sont gérés
  // "data" est la clé associée au reducer dataReducer
  data: dataReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);
// Configuration du magasin Redux
const store = configureStore({
  reducer: persistedReducer, // Le rootReducer contient la combinaison de tous les réducteurs
  devTools: true, // Activation des outils de développement Redux dans le navigateur
});

// export const persistor = persistStore(store);
let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
