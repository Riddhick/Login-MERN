import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from 'formik';

import styles from '../Styles/Username.module.css';
import avatar from '../Assets/avatar.png';

import {RegistrationValidation} from "../schema/uservalidation";

const initialValues={
    Username:"",
    Email:"",
    Password:""
};


export default function Register(){
  
        const {values,errors,touched,handleChange,handleSubmit} =useFormik({
            initialValues:initialValues,
            validationSchema:RegistrationValidation,
            onSubmit:(values)=>{
                fetch('http://localhost:3001/api/register',{
                    method:'POST',
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(values)
                }).then(
                    console.log(values)
                )
            }
        })
    

    return(
        <div className="container mx-auto">
            <div className="flex justify-center items-center h-screen">
                <div className={styles.glass}>
                    <div className="title flex flex-col items-center">
                        <h3 className="text-5xl font-bold">Hello User</h3>
                        <span className="py-4 text-xl w-2/3 text-center text-grey-400">
                            Explore more by connecting with us
                        </span>
                    </div>
                    <form className="py-1" onSubmit={handleSubmit}>
                        <div className="profile flex justify-center py-4">
                            <img className={styles.profile_img} src={avatar} alt="avatar"></img>
                        </div>

                        <div className="{textbox flex flex-col items-center gap-5">
                            <input className={styles.textbox} values={values.Username} type="text" placeholder="Username" name="Username" onChange={handleChange}/>
                            <input className={styles.textbox} type="email" values={values.Email} placeholder="Email" name="Email" onChange={handleChange}/>
                            <input className={styles.textbox} type="password" values={values.Password} placeholder="Password" name="Password" onChange={handleChange}/>
                            <span className="flex flex-col items-center gap-0">
                            {errors.Username && touched.Username ?(<p className="py-0 text-red-400 text-center">{errors.Username}</p>):null }
                            {errors.Email && touched.Email ?(<p className="py-0 text-red-400 text-center">{errors.Email}</p>):null }
                            {errors.Password && touched.Password ?(<p className="py-0 text-red-400 text-center">{errors.Password}</p>):null }
                            </span>
                            <button className={styles.btn} type="submit">Let's Go</button>
                        </div>
                        
                        <div className="text-center py-4">
                            <span className="text-gray-500">Already a member?<Link className="text-red-500" to="/">Log In</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}