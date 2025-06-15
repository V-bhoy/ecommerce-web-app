import {FormControl, InputLabel, Select} from "@mui/material";

export default function FormSelect({value, handleChange, label, children}){
    return <FormControl fullWidth className={"!my-2"}>
        <InputLabel id="simple-select-label">{label}</InputLabel>
        <Select
            required
            variant={"outlined"}
            size={"small"}
            labelId="simple-select-label"
            id="simple-select"
            value={value}
            label={label}
            onChange={handleChange}
        >
            {children}
        </Select>
    </FormControl>
}