import { Card } from 'antd';
import React from 'react';
import styles from '../../sass/layout/components/home/mobileDetails.module.scss';

export default function MobileDetails({ selectedMobile }) {
    const mobileOptions = () => {
        // this function is responsible for mapping through object of options and return all options of the mobile if its available
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
                        <Card title={`${selectedMobile.brand || 'Not Specified'} - ${selectedMobile.model}`} className={styles.cardContainer}>


                            <div>
                                <p>Year :</p>
                                <p className={styles.option}>{selectedMobile.manfactureYear}</p>
                            </div>


                            {selectedMobile.memory
                                && <div>
                                    <p>Memory :</p>
                                    <p className={styles.option}>{selectedMobile.memory}</p>
                                </div>
                            }

                            {selectedMobile.screen
                                && <div>
                                    <p>Screen :</p>
                                    <p className={styles.option}>{selectedMobile.screen}</p>
                                </div>
                            }

                            {selectedMobile.color
                                && (<div>
                                    <p>Color :</p>
                                    <p className={styles.option}>{selectedMobile.color}</p>
                                </div>)
                            }

                            {selectedMobile.options
                                && <div>
                                    <p>Options :</p>

                                    {mobileOptions()}
                                </div>
                            }

                        </Card>
                    </div>
                ) : null
            }
        </>

    )
}
