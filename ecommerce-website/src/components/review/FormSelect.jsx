import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

export default function FormSelect({value, handleChange, label}){


    return <FormControl fullWidth className={"!my-2"}>
        <InputLabel id="simple-select-label">{label}</InputLabel>
        <Select
            className={"select"}
            required
            variant={"outlined"}
            size={"small"}
            labelId="simple-select-label"
            id="simple-select"
            value={value}
            label={label}
            onChange={handleChange}
        >
            <MenuItem value={1}>Okay</MenuItem>
            <MenuItem value={2}>Fine</MenuItem>
            <MenuItem value={3}>Just Right</MenuItem>
            <MenuItem value={4}>Good To Go</MenuItem>
            <MenuItem value={5}>Excellent</MenuItem>
        </Select>
    </FormControl>
}