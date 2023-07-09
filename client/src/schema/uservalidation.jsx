import * as Yup from 'yup';

export const Uservalidation=Yup.object({
    Username:Yup.string().min(2).max(20).required("Name can't be Empty")
})