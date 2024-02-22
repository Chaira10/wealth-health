import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"; // Permet à votre application d'accéder au store Redux
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react"; // Retarde le rendu de l'UI jusqu'à ce que l'état persisté soit récupéré et mis à jour
import storage from "redux-persist/lib/storage"; // Utilise le localStorage comme méthode de stockage par défaut
import dataReducer from "./Features/dataReducer.js"; // Le reducer pour une partie spécifique de l'état de l'application
import { combineReducers } from "redux"; // Combine plusieurs reducers en un

// Configuration de Redux Persist
const persistConfig = {
  key: "root", // Clé de base pour le stockage
  version: 1, // Version du schéma de persist, permet de gérer les migrations
  storage, // Définit où persister l'état (par défaut, localStorage)
};

// Combinaison des reducers en un seul objet pour créer un état global unifié
const reducer = combineReducers({
  data: dataReducer, // Association du reducer dataReducer à la clé 'data
});

// Application de la persistance au reducer combiné
const persistedReducer = persistReducer(persistConfig, reducer);

// Configuration du store Redux avec le reducer persisté
const store = configureStore({
  reducer: persistedReducer, // Le rootReducer contient la combinaison de tous les réducteurs
  devTools: false, // Désactiver les outils de développement pour la production
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Ignorer certaines actions de Redux Persist pour les vérifications de sérialisation
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Création du persistor pour gérer la réhydratation de l'état
let persistor = persistStore(store);

// Rendu de l'application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Fournit le store Redux à l'application */}
      <PersistGate loading={null} persistor={persistor}> {/* Retarde le rendu jusqu'à ce que l'état soit réhydraté */}
        <App /> {/* Le composant racine de l'application */}
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
