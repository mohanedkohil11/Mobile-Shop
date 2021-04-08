import React, { Fragment, useState } from 'react'
import styles from '../../sass/layout/components/home/dataTable.module.scss'
export default function DataTable({ database, setSelectedMobile }) {

    const mobileRowData = () => {

        return database.length > 0 ? database.map((mobileData, index) => {
            return (
                <Fragment key={index}>
                    <tr key={index} onClick={() => { setSelectedMobile(mobileData) }}>
                        <td>{mobileData.brand}</td>
                        <td>{mobileData.model}</td>
                        <td>{mobileData.manfactureYear}</td>
                    </tr>
                </Fragment>
            )
        }) : <tr ><td colSpan='3' style={{ textAlign: 'center' }}>No Data</td></tr>


    }

    return (
        <div>
            <table className={styles.dataTable}>
                <tbody>

                    <tr>
                        <th>Brand</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                    {mobileRowData()}
                </tbody>
            </table>
        </div>
    )
}
