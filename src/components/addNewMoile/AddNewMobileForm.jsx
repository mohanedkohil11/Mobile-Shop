import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Button, Input, Radio, Form } from 'antd';
import { Select } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import styles from '../../sass/layout/components/addNewMobile/addNewMobileForm.module.scss';

const { Option } = Select;

export default function AddNewMobileForm() {

    let history = useHistory();

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

        var database = JSON.parse(window.localStorage.getItem("database-think-loud")) || [];

        database.push(mobileDataStructured)

        window.localStorage.setItem(
            "database-think-loud",
            JSON.stringify(database)
        );

        history.push('/');

        console.log(database);
    };

    const onCheckBoxChange = (e) => {
        console.log(e.target.value, e.target.checked);
        setMobileData({ ...mobileData, options: { ...mobileData.options, [e.target.value]: e.target.checked } })
    }

    const onClickBackBtn = (e) => {
        e.preventDefault();
        history.push('/');
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
                        name="model"
                        rules={[{ required: true, message: 'Model Required !' }]}
                    >
                        <Input placeholder='Enter Model Name' />
                    </Form.Item>

                    <Form.Item
                        label="Manfacture year"
                        name="manfactureYear"
                        rules={[{ required: true, message: 'Manfacture Year Required !' }]}
                    >
                        <Input type='number' min={1} placeholder='Enter Manfacture Year' />
                    </Form.Item>

                    <Form.Item
                        label="Brand"
                        name="brand"
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

                    <Form.Item
                        label="Memory"
                        name="memory"
                    >
                        <Select placeholder='Select Memory' >
                            {
                                memory.map(brand => {
                                    return <Option key={brand} value={brand}>{brand}</Option>
                                })
                            }
                        </Select>
                    </Form.Item>

                </div>

                <div>
                    <Form.Item
                        label="options"
                    >
                        {
                            checkBoxes.map((item, index) => {
                                return <Checkbox key={index} value={item} onChange={onCheckBoxChange}>{item}</Checkbox>
                            })
                        }
                    </Form.Item>

                    <div>

                        <Form.Item
                            label="Screen"
                            name="screen"

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
                            name="color"

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
                    </div>
                </div>

            </div>

            <div>
                <Form.Item className='test' {...tailLayout}>

                    <Button type="primary" style={{ marginRight: '3rem' }} onClick={onClickBackBtn}>
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
