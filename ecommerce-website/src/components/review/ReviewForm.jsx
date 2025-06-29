import {Button, Rating, TextField} from "@mui/material";
import FormSelect from "./FormSelect.jsx";
import {useState} from "react";
import ErrorDialog from "../error-messages/ErrorDialog.jsx";


export default function ReviewForm({handleReview, productId}){
    const [review, setReview] = useState("");
    const [rating, setRating] = useState(0);
    const [fit, setFit] = useState("");
    const [length, setLength] = useState("");
    const [transparency, setTransparency] = useState("");
    const [error, setError] = useState("");

    const handleFit = (e)=>{
       setFit(e.target.value);
    }
    const handleLength = (e)=>{
        setLength(e.target.value);
    }
    const handleTransparency = (e)=>{
        setTransparency(e.target.value);
    }

    const resetValues = ()=>{
        setReview("");
        setRating(0);
        setFit("");
        setLength("");
        setTransparency("");
    }



    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!review || !rating || !fit || !length || !transparency){
            setError("All fields are required!");
            return;
        }
        handleReview({
            productId,
            review,
            rating,
            fit,
            length,
            transparency
        });
        resetValues();
    }

    return <form className={"p-6 flex flex-col gap-4 border border-gray-200 rounded-sm !mx-4"}>
        {error && <ErrorDialog error={error} clearError={()=>setError("")}/>}
        <TextField
            value={review}
            onChange={(e)=>setReview(e.target.value)}
            required
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={5}
        />
        <div className={"flex gap-3 items-center"}>
            <p className={"text-[14px] font-[400] px-2"}>Rating: </p>
            <Rating value={rating} onChange={(e, value)=>setRating(value)} required/>
        </div>
        <FormSelect value={fit} label={"Fit"} handleChange={handleFit}/>
        <FormSelect value={length} label={"Length"} handleChange={handleLength}/>
        <FormSelect value={transparency} label={"Transparency"} handleChange={handleTransparency}/>
        <div className={"flex justify-end"}>
            <Button onClick={handleSubmit} size={"small"} className={"!w-[10rem] !capitalize !bg-primary"} variant={"contained"}>Submit Review</Button>
        </div>
    </form>
}