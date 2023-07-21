import React from "react";
import styles from '../Styles/Username.module.css';
import avatar from '../Assets/avatar.png';
import { useFormik } from "formik";
import {useNavigate,useLocation,Link} from 'react-router-dom';
import { LoginValidation } from "../schema/uservalidation";
import {login} from "../helper/request";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialValues={
    Email:"",
    Password:""
};


export default function Password(){
    const location=useLocation()
    const navigate=useNavigate()

    function changePage(){
        navigate("/profile",{state:location.state})
    }
    
    const {values,errors,touched,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:LoginValidation,
        onSubmit:async values=>{
           const status=await login(values)
            if(status===201){
                changePage()
            }
            else{
                toast.error('Wrong Password', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
    })

    return(
        <div className="container mx-auto">
        <ToastContainer />
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
                <div className="text-center py-4">
                            <span className="text-gray-500">Forgot Password?<Link className="text-red-500" to="/">Go Back </Link></span>
                </div>
            </div>
        </div>
    </div>
)
}