import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from "formik";

import styles from '../Styles/Username.module.css';
import avatar from '../Assets/avatar.png';
import { Uservalidation } from "../schema/uservalidation";
import {username} from "../helper/request";


const initialValues={
    Username:""
};

 const Username=()=>{
    
    const {values,errors,touched,handleChange,handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema:Uservalidation,
        onSubmit:(values)=>{
            username(values)
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

                        <div className="{textbox flex flex-col items-center gap-6">
                            <input className={styles.textbox} value={values.Username} type="text" placeholder="Username" name="Username" onChange={handleChange}/>
                            {errors.Username && touched.Username ?(<p className="py-4 text-red-400 text-center w-2/3">{errors.Username}</p>):null }
                            <button className={styles.btn} type="submit">Let's Go</button>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500">Not a member?<Link className="text-red-500" to="/register">Register Now</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Username