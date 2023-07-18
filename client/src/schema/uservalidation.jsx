import * as Yup from 'yup';

export const Uservalidation=Yup.object({
    Username:Yup.string().min(2).max(20).required("Name can't be Empty")
})

export const RegistrationValidation=Yup.object({
    Username:Yup.string().min(2).max(20).required("Name can't be Empty"),
    Email:Yup.string().email().required("Email can't be Empty"),
    Password:Yup.string().min(4,"Minimum 4 characters").required("Password can't be Empty")
})

export const LoginValidation=Yup.object({
    Email:Yup.string().email().required("Email can't be Empty"),
    Password:Yup.string().min(4,"Minimum 4 characters").required("Password can't be Empty")
})