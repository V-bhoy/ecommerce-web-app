import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storageSession from 'redux-persist/lib/storage/session';
import authReducer from "./features/auth/authSlice.js";
import productsReducer from "./features/products/productSlice.js";
import cartReducer from "./features/cart/cartSlice.js";
import checkoutReducer from "./features/checkout/checkoutSlice.js";
import {persistReducer, persistStore} from "redux-persist";
import {FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE} from "redux-persist/es/constants";

const rootReducer = combineReducers({
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    checkout: checkoutReducer
})

// const productFilter = createWhitelistFilter("products", ["filters", "categories", "subCategories"]);

const persistConfig = {
    key: "root",
    storage: storageSession,
    blacklist: ["products"],
   // transforms: [productFilter]
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore redux-persist action types
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: true
});

export const persistedStore = persistStore(store);
export default store;