import { Card } from 'antd';
import React from 'react';
import styles from '../../sass/layout/components/home/mobileDetails.module.scss';

export default function MobileDetails({ selectedMobile }) {
    const mobileOptions = () => {
        let options = []
        for (const option in selectedMobile.options) {
            if (selectedMobile.options[option]) {
                options.push(
                    <p className={styles.option} key={option}>{option}</p>
                )
            }
        }
        return options;
    }
    return (
        <>
            {
                selectedMobile ? (
                    <div className={` ${styles.mobileDetails}`}>
                        <Card title={`${selectedMobile.brand} - ${selectedMobile.model}`} className={styles.cardContainer}>

                            <div>
                                <p>Year :</p>
                                <p className={styles.option}>{selectedMobile.manfactureYear}</p>
                            </div>

                            <div>
                                <p>Memory :</p>
                                <p className={styles.option}>{selectedMobile.memory}</p>
                            </div>

                            <div>
                                <p>Screen :</p>
                                <p className={styles.option}>{selectedMobile.screen}</p>
                            </div>

                            <div>
                                <p>Color :</p>
                                <p className={styles.option}>{selectedMobile.color}</p>
                            </div>

                            <div>
                                <p>Options :</p>

                                {mobileOptions()}
                            </div>

                        </Card>
                    </div>
                ) : null
            }
        </>

    )
}
