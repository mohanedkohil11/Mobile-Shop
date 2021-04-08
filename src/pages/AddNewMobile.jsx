import React from 'react'
import AddNewMobileForm from '../components/addNewMoile/AddNewMobileForm'
import styles from '../sass/layout/components/addNewMobile/addNewMobileForm.module.scss'

export default function AddNewMobile() {
    return (
        <div className={`container ${styles.addNewMobileCont}`}>
            <AddNewMobileForm />
        </div>
    )
}
