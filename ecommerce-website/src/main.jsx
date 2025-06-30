import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.jsx";
import {Provider} from "react-redux";
import store from "./redux/store.js";
import createAxiosInstance from "./api/axiosInstance.js";
import {ToastContainer} from "react-toastify";

export const axiosInstance = createAxiosInstance({store});
createRoot(document.getElementById('root')).render(
  // <StrictMode>
      <Provider store={store}>
              <App/>
              <ToastContainer/>
      </Provider>
  // </StrictMode>,
)
