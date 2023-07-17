import React from "react";
import styles from '../Styles/Username.module.css';
import avatar from '../Assets/avatar.png';


export default function Password(){
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
                <form className="py-1" >
                    <div className="profile flex justify-center py-4">
                        <img className={styles.profile_img} src={avatar} alt="avatar"></img>
                    </div>

                    <div className="{textbox flex flex-col items-center gap-6">
                        <input className={styles.textbox} value="" type="text" placeholder="Email" name="Email" />
                        <input className={styles.textbox} value="" type="password" placeholder="Password" name="Password" />
                        <button className={styles.btn} type="submit">Let's Go</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)
}