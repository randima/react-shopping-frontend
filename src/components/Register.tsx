import { Component } from "react";
import React from "react";
import { Form, Input, Button, Select, message } from 'antd';
import AuthService from "../services/auth.service";
const { Option } = Select;

const regPass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])');
const regMobile = new RegExp('(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)');

const authService = new AuthService();

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const prefixSelector = (
    <Form.Item name="areacode" noStyle>
        <Select style={{ width: 70 }}>
            <Option value="94">+94</Option>
            <Option value="87">+87</Option>
        </Select>
    </Form.Item>
);

interface Props{
    changeTab: (page: string) => void
}

export class Register extends Component<Props> {

     onFinish = async (values: any) => {
        console.log('Success:', values);

        try {
            await authService.signup(values);
            this.props.changeTab("1");
          } catch (error) {
              console.log(error);
            const errorMessage = error.response.data.message;
            message.error(errorMessage);
          }
        
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
                layout="horizontal"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[{ required: true }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[{ required: true }]}
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