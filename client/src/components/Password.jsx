import React from "react";
import styles from '../Styles/Username.module.css';
import avatar from '../Assets/avatar.png';
import { useFormik } from "formik";
import {useLocation} from 'react-router-dom';
import { LoginValidation } from "../schema/uservalidation";
import {login} from "../helper/request";

const initialValues={
    Email:"",
    Password:""
};


export default function Password(){
    const location=useLocation()
    
    const {values,errors,touched,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:LoginValidation,
        onSubmit:async values=>{
           const status=await login(values)
            console.log(status)
        }
    })

    return(
        <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen">
            <div className={styles.glass}>
                <div className="title flex flex-col items-center">
                    <h3 className="text-5xl font-bold">Hello {location.state.Username}</h3>
                    <span className="py-4 text-xl w-2/3 text-center text-grey-400">
                       Enter Email & Password For Login
                    </span>
                </div>
                <form className="py-1" onSubmit={handleSubmit}>
                    <div className="profile flex justify-center py-4">
                        <img className={styles.profile_img} src={location.state.Profile||avatar} alt="avatar"></img>
                    </div>

                    <div className="{textbox flex flex-col items-center gap-6">
                        <input className={styles.textbox} value={values.Email} type="text" placeholder="Email" name="Email" onChange={handleChange}/>
                        <input className={styles.textbox} value={values.Password} type="password" placeholder="Password" name="Password" onChange={handleChange}/>
                        <button className={styles.btn} type="submit">Let's Go</button>
                        {errors.Email && touched.Email ?(<p className="py-0 text-red-400 text-center">{errors.Email}</p>):null }
                        {errors.Password && touched.Password ?(<p className="py-0 text-red-400 text-center">{errors.Password}</p>):null }
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}