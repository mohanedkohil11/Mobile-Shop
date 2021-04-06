import React, { useState } from 'react'
import { Button, Input, Radio, Form } from 'antd';
import { Select } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
const { Option } = Select;
import styles from '../../sass/layout/components/addNewMobile/addNewMobileForm.module.scss'
export default function AddNewMobileForm() {
    const [mobileData, setMobileData] = useState({});
    const brands = ['Sony', 'Samsung', 'Apple', 'Nokia', 'LG'];
    const memory = ['16GB', '32GB', '64GB', '128GB'];
    const checkBoxes = ['Dual SIM', 'NFC', '4G'];

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 13, span: 16 },
    };

    const onFinish = (values) => {


        let mobileDataStructured = {
            ...values, ...mobileData
        }

        var database = JSON.parse(window.localStorage.getItem("database-think-loud")) || {};

        if (database.hasOwnProperty(values.Brand)) {
            database.[values.Brand].[values.Model] = mobileDataStructured;
        }
        else {
            database.[values.Brand] = { [values.Model]: mobileDataStructured }
        }

        window.localStorage.setItem(
            "database-think-loud",
            JSON.stringify(database)
        );

        console.log(database);
    };

    const onCheckBoxChange = (e) => {
        console.log(e.target.value, e.target.checked);
        setMobileData({ ...mobileData, options: { ...mobileData.options, [e.target.value]: e.target.checked } })
    }


    return (
        <Form
            {...layout}
            onFinish={onFinish}
        >

            <div className={styles.addNewMobile}>

                <div >

                    <Form.Item
                        label="Model"
                        name="Model"
                        rules={[{ required: true, message: 'Model Required !' }]}
                    >
                        <Input placeholder='Enter Model Name' />
                    </Form.Item>

                    {/* <div className={styles.inputContainer}>
                        <div>Model :</div>
                        <Input placeholder='Enter Model Name' />
                    </div> */}

                    <Form.Item
                        label="Manfacture year"
                        name="Manfacture year"
                        rules={[{ required: true, message: 'Manfacture Year Required !' }]}
                    >
                        <Input type='number' min={1} placeholder='Enter Manfacture Year' />
                    </Form.Item>

                    {/* <div className={styles.inputContainer}>
                        <div> Manfacture year :</div>
                        <Input type='number' min={1} placeholder='Enter Model Name' required />
                    </div> */}

                    <Form.Item
                        label="Brand"
                        name="Brand"
                        rules={[{ required: true, message: 'Brand Required !' }]}
                    >
                        <Select placeholder='Select brand' >
                            {
                                brands.map(brand => {
                                    return <Option key={brand} value={brand}>{brand}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                    {/* 
                    <div className={styles.inputContainer}>
                        <div>Brand : </div>

                        <Select placeholder='Select Brand' style={{ width: '70%' }}>
                            {
                                brands.map(brand => {
                                    return <Option key={brand} value={brand}>{brand}</Option>
                                })
                            }
                        </Select>
                    </div> */}

                    <Form.Item
                        label="Memory"
                        name="Memory"
                    >
                        <Select placeholder='Select Memory' >
                            {
                                memory.map(brand => {
                                    return <Option key={brand} value={brand}>{brand}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                    {/* <div className={styles.inputContainer}>
                        <div>Memory : </div>

                        <Select placeholder='Select brand' style={{ width: '70%' }}>
                            {
                                memory.map(brand => {
                                    return <Option key={brand} value={brand}>{brand}</Option>
                                })
                            }
                        </Select>
                    </div> */}

                </div>

                <div>
                    <Form.Item
                        label="Options"
                    >
                        {
                            checkBoxes.map((item, index) => {
                                return <Checkbox key={index} value={item} onChange={onCheckBoxChange}>{item}</Checkbox>
                            })
                        }
                    </Form.Item>

                    {/* <div>

                        {
                            checkBoxes.map((item, index) => {
                                return <Checkbox key={index}>{item}</Checkbox>
                            })
                        }

                    </div> */}
                    <div>
                        {/* <div>Screen :</div>
                        <Radio.Group >
                            <Radio value={1}>
                                Option A
                            </Radio>
                            <Radio value={2}>
                                Option B
                            </Radio>
                            <Radio value={3}>
                                Option C
                            </Radio>

                        </Radio.Group> */}

                        <Form.Item
                            label="Screen"
                            name="Screen"

                        >
                            <Radio.Group >

                                <Radio value={'4"'}>
                                    4"
                                </Radio>

                                <Radio value={'5"'}>
                                    5"
                                </Radio>

                                <Radio value={'6"'}>
                                    6"
                                </Radio>

                            </Radio.Group>
                        </Form.Item>
                    </div>
                    <div>
                        <Form.Item
                            label="Color"
                            name="Color"

                        >
                            <Radio.Group >

                                <Radio value={'White'}>
                                    White
                                </Radio>

                                <Radio value={'Black'}>
                                    Black
                                </Radio>

                                <Radio value={'Gold'}>
                                    Gold
                                </Radio>

                            </Radio.Group>
                        </Form.Item>
                        {/* <div>Color :</div>
                        <Radio.Group >
                            <Radio value={1}>
                                Option A
                            </Radio>
                            <Radio value={2}>
                                Option B
                            </Radio>
                            <Radio value={3}>
                                Option C
                            </Radio>

                        </Radio.Group> */}
                    </div>
                </div>

            </div>

            <div>
                <Form.Item className='test' {...tailLayout}>

                    <Button type="primary" style={{ marginRight: '3rem' }}>
                        Back
                    </Button>
                    <Button type="primary" htmlType="submit" >
                        Save
                    </Button>

                </Form.Item>
            </div>






        </Form >
    )
}
