import React from 'react'
import { Button, Input } from 'antd';
import { Select } from 'antd';
const { Option } = Select;
import styles from '../../sass/layout/components/home/searchForm.module.scss'
export default function SearchForm() {
    const brands = ['Sony', 'Samsung', 'Apple', 'Nokia', 'LG'];
    return (
        <div className={styles.searchForm}>

            <div className={styles.leftSection}>

                <div className={styles.inputContainer}>
                    <div>Model :</div>
                    <Input placeholder='Enter Model Name' />
                </div>

                <div className={styles.inputContainer}>

                    <div>Brand : </div>

                    <Select placeholder='Select brand' style={{ width: '70%' }}>
                        {
                            brands.map(brand => {
                                return <Option key={brand} value={brand}>{brand}</Option>
                            })
                        }
                    </Select>

                </div>

            </div>

            <div className={styles.rightSection}><Button type="primary">Search</Button></div>

        </div>
    )
}
