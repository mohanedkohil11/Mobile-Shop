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
        console.log('key', keywords);
        let searchResults = []
        database.map(mobile => {


            if (keywords.model && keywords.brand) {
                if ((mobile.model.toLowerCase().includes(keywords.model.toLowerCase()) || keywords.model.toLowerCase().includes(mobile.model.toLowerCase())) && (mobile.brand == keywords.brand)) {
                    console.log('case 1');
                    searchResults.push(mobile)
                }
            } else if (keywords.model) {
                if (mobile.model.toLowerCase().includes(keywords.model.toLowerCase()) || keywords.model.includes(mobile.model.toLowerCase())) {
                    console.log('case 2');
                    searchResults.push(mobile)
                }

            }
            else if (keywords.brand) {
                if (mobile.brand == keywords.brand) {
                    console.log('case 3');
                    searchResults.push(mobile)
                }
            }
            console.log(searchResults);
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
                    <Button type="primary" onClick={() => setSearchResults(null)}>Clear</Button>
                </div>

            </div>
        </Form>

    )
}
