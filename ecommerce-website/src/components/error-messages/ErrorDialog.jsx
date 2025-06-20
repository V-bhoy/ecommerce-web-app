import {MdError} from "react-icons/md";
import {IoClose} from "react-icons/io5";

export default function ErrorDialog({error, clearError}){
    return error ? <p className={"flex items-center justify-between bg-red-100 text-red-600 rounded-sm text-xs px-2 py-1"}>
        <span className={"flex gap-2 items-center "}><MdError/>{error}</span>
        <IoClose className={"cursor-pointer"} onClick={clearError}/>
    </p> : null
}