import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import {Provider} from "react-redux";
import store, {persistedStore} from "./redux/store.js";
import createAxiosInstance from "./api/axiosInstance.js";
import {ToastContainer} from "react-toastify";
import {PersistGate} from "redux-persist/integration/react";

export const axiosInstance = createAxiosInstance({store});
createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <Provider store={store}>
          {/*<PersistGate loading={null} persistor={persistedStore}>*/}
              <App/>
              <ToastContainer/>
          {/*</PersistGate>*/}
      </Provider>
  // </StrictMode>,
)
