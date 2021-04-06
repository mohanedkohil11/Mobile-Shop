import React from 'react'
import { Link } from "react-router-dom";
import styles from "../sass/layout/reusable/header.module.scss"
export default function Header() {
    return (
        <div className={styles.header}>
            <div className='container'>
                <div className={styles.headerContainer}>

                    <Link to='/'>Mobile Shop Application</Link>
                    <Link to="/add-new-mobile">Add New Mobile</Link>

                </div>
            </div>
        </div>
    )
}
