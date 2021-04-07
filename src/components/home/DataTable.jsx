import React, { Fragment, useState } from 'react'
import styles from '../../sass/layout/components/home/dataTable.module.scss'
export default function DataTable({ database, setSelectedMobile }) {

    // const mobileRowData = () => {
    //     let tableRows = [];
    //     (Object.values(database).length > 0) && Object.values(database).map(mobileObject => {
    //         (Object.values(mobileObject).length > 0) && Object.values(mobileObject).map(mobileData => {
    //             tableRows.push(
    //                 <Fragment key={mobileData.Model}>
    //                     <tr onClick={() => { setSelectedMobile(mobileData) }}>
    //                         <td>{mobileData.Brand}</td>
    //                         <td>{mobileData.Model}</td>
    //                         <td>{mobileData.ManfactureYear}</td>
    //                     </tr>
    //                 </Fragment>
    //             )
    //         }
    //         )
    //     });

    //     return tableRows;
    // }

    const mobileRowData = () => {

        return database.map(mobileData => {
            return (
                <Fragment key={mobileData.Model}>
                    <tr onClick={() => { setSelectedMobile(mobileData) }}>
                        <td>{mobileData.Brand}</td>
                        <td>{mobileData.Model}</td>
                        <td>{mobileData.ManfactureYear}</td>
                    </tr>
                </Fragment>
            )
        })


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
