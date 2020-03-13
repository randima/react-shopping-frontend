import { Component } from "react";
import React from "react";
import { Form, Input, Button, Select } from 'antd';
const { Option } = Select;

const regPass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])');
const regMobile = new RegExp('(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)');

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const prefixSelector = (
    <Form.Item name="prefix" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="94">+94</Option>
            <Option value="87">+87</Option>
        </Select>
    </Form.Item>
);

export class Register extends Component {

    onFinish(values: any) {
        console.log('Success:', values);
    }

    onFinishFailed(errorInfo: any) {
        console.log('Failed:', errorInfo);
    }

    render() {
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                layout="vertical"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, type: 'email' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, pattern: regPass, message: 'Passwords must contain at least 1 upper case letter, 1 lower case letter and one number OR special charracter' }]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, pattern:regMobile, message: 'Please input your phone number!' }]}
                >
                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Register
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}