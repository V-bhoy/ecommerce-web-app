import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {validateEmail} from "../utils/validate-email.js";
import {validatePassword} from "../utils/validate-password.js";
import {registerUser} from "../redux/features/auth/authThunk.js";

export default function useRegisterData(){
    const  dispatch = useDispatch();
    const {error: authError, isLoading} = useSelector(state => state.auth);
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: ""
    })
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = (event)=>{
        if(errors.firstNameError || errors.lastNameError || errors.emailError || errors.passwordError){
            setErrors({
                firstNameError: "",
                lastNameError: "",
                emailError: "",
                passwordError: ""
            })
        }
        const {name, value} = event.target;
        setUserData((prev)=>({...prev, [name]: value}));
    }

    const handleConfirmPassword = (event)=>{
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = ()=> {
        let isError = false;
        const {firstName, lastName, email, password} = userData;
        if(!firstName || !lastName || !email || !password){
            isError = true;
            if(!firstName){
                setErrors((prev)=>({...prev, firstNameError: "First Name cannot be empty!" }))
            }
            if(!lastName){
                setErrors((prev)=>({...prev, lastNameError: "Last Name cannot be empty!" }))
            }
            if(!email){
                setErrors(prev=>({...prev, emailError: "Email cannot be empty!" }))
            }
            if(!password){
                setErrors(prev=>({...prev, passwordError: "Password cannot be empty!"}))
            }
        }
        if(!validateEmail(email)){
            isError = true;
            setErrors(prevState => ({...prevState, emailError: "Enter a valid email!"}))
        }
        if(firstName.length < 3){
            isError = true;
            setErrors(prevState => ({...prevState, firstNameError: "First name should be at least 3 characters!" }))
        }
        if(lastName.length < 3){
            isError = true;
            setErrors(prevState => ({...prevState, lastNameError: "Last name should be at least 3 characters!" }))
        }
        if(!validatePassword(password)){
            isError = true;
            setErrors(prevState => ({
                ...prevState,
                passwordError: "Password does not meet the required criteria!"
            }))
        }
        if(isError || confirmPassword!==userData?.password){
            return;
        }
        dispatch(registerUser({
            firstName: userData?.firstName?.trim(),
            lastName: userData?.lastName?.trim(),
            email: userData?.email?.trim(),
            password: userData?.password?.trim()
        }));
    }

    return {
        isLoading,
        authError,
        userData,
        confirmPassword,
        handleConfirmPassword,
        handleChange,
        handleSubmit,
        errors
    }
}