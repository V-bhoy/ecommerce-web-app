import {Button, Rating, Select, TextField} from "@mui/material";
import FormSelect from "./FormSelect.jsx";
import MenuItem from "@mui/material/MenuItem";

export default function ReviewForm(){
    return <form className={"p-6 flex flex-col gap-4 border border-gray-200 rounded-sm !mx-4"}>
        <TextField
            required
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={5}
            defaultValue="Default Value"
        />
        <div className={"flex gap-3 items-center"}>
            <p className={"text-[14px] font-[400] px-2"}>Rating: </p>
            <Rating required/>
        </div>
        <FormSelect value={1} label={"Fit"} handleChange={()=>null}>
            <MenuItem value={1}>Okay</MenuItem>
            <MenuItem value={2}>Fine</MenuItem>
            <MenuItem value={3}>Just Right</MenuItem>
            <MenuItem value={4}>Good To Go</MenuItem>
            <MenuItem value={5}>Excellent</MenuItem>
        </FormSelect>
        <FormSelect value={1} label={"Length"} handleChange={()=>null}>
            <MenuItem value={1}>Okay</MenuItem>
            <MenuItem value={2}>Fine</MenuItem>
            <MenuItem value={3}>Just Right</MenuItem>
            <MenuItem value={4}>Good To Go</MenuItem>
            <MenuItem value={5}>Excellent</MenuItem>
        </FormSelect>
        <FormSelect value={1} label={"Transparency"} handleChange={()=>null}>
            <MenuItem value={1}>Okay</MenuItem>
            <MenuItem value={2}>Fine</MenuItem>
            <MenuItem value={3}>Just Right</MenuItem>
            <MenuItem value={4}>Good To Go</MenuItem>
            <MenuItem value={5}>Excellent</MenuItem>
        </FormSelect>
        <div className={"flex justify-end"}>
            <Button size={"small"} className={"!w-[10rem] !capitalize !bg-primary"} variant={"contained"}>Submit Review</Button>
        </div>
    </form>
}