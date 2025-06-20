import {toast} from "react-toastify";

export const notifyErrorToast=(content)=>{
    toast(
        content,{
            className: "text-xs",
            type: "error",
            autoClose: 3000,
            hideProgressBar: true
        }
    )
}

export const notifySuccessToast=(content)=>{
     toast(
        content,{
            type: "success",
            autoClose: 3000,
            hideProgressBar: true
        }
    )
}