import { Card } from 'antd'
import React from 'react'
import styles from '../../sass/layout/components/home/mobileDetails.module.scss'
export default function MobileDetails({ selectedMobile }) {
    return (
        <>
            {
                selectedMobile ? (
                    <div className={`container ${styles.mobileDetails}`}>
                        <Card title={`${selectedMobile.Brand} - ${selectedMobile.Model}`} style={{ width: '48%' }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                ) : null
            }
        </>

    )
}
