import React from 'react';
import { Button, Input, Radio, Form } from 'antd';
import { Select } from 'antd';
import styles from '../../sass/layout/components/home/searchForm.module.scss';
const { Option } = Select;

export default function SearchForm({ database, setSearchResults }) {
    const brands = ['Sony', 'Samsung', 'Apple', 'Nokia', 'LG'];
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const search = (keywords) => {
        // this function is responsible for seaching inside database by mapping through its all items and comparing it by the keywords entered by user
        let searchResults = []
        database.map(mobile => {

            if (keywords.model && keywords.brand) {
                // case 1 : if user searches by model and brand 
                if ((mobile.model.toLowerCase().includes(keywords.model.toLowerCase()) || keywords.model.toLowerCase().includes(mobile.model.toLowerCase())) && (mobile.brand == keywords.brand)) {
                    // Checking if the model and brand is included in database
                    searchResults.push(mobile)
                }
            } else if (keywords.model) {
                // case 2 : if user searches by only MODEL
                if (mobile.model.toLowerCase().includes(keywords.model.toLowerCase()) || keywords.model.includes(mobile.model.toLowerCase())) {
                    // checking if model (string) included in side any model in  database
                    searchResults.push(mobile)
                }

            }
            else if (keywords.brand) {
                // case 3 : if user searches by only BRAND
                if (mobile.brand == keywords.brand) {
                    // checking if brand equal to brand in database in this case function will return all mobiles from this brand
                    searchResults.push(mobile)
                }
            }
            setSearchResults([...searchResults])

        })
    }

    return (
        <Form
            {...layout}
            onFinish={search}
        >
            <div className={styles.searchForm}>

                <div className={styles.leftSection}>


                    <Form.Item
                        label="Model"
                        name="model"
                    >
                        <Input placeholder='Enter Model Name' />
                    </Form.Item>

                    <Form.Item
                        label="Brand"
                        name="brand"
                    >
                        <Select placeholder='Select brand' >
                            <Option key='all' value={null}>All</Option>
                            {
                                brands.map(brand => {
                                    return <Option key={brand} value={brand}>{brand}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                </div>

                <div className={styles.rightSection}>
                    <Button type="primary" htmlType='submit' style={{ marginRight: '1rem' }}>Search</Button>
                    <Button type="danger" onClick={() => setSearchResults(null)}>Clear</Button>
                </div>

            </div>
        </Form>

    )
}
