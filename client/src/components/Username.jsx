import React from "react";
import {Link} from "react-router-dom";

import styles from './Styles/Username.module.css';

 const Username=()=>{
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
                    <div className="py-1">
                        <div className="profile flex justify-center py-4">
                            <img src="" alt="avatar"></img>
                        </div>

                        <div className="{textbox flex flex-col items-center gap-6">
                            <input className={styles.textbox} type="text" placeholder="Username" />
                            <button className={styles.btn} type="submit">Let's Go</button>
                        </div>

                        <div className="text-center py-4">
                            <span className="text-gray-500">Not a member?<Link className="text-red-500" to="/register">Register Now</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Username