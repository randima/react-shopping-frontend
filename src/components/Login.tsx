import { Component } from "react";
import React from "react";
import { Form, Input, Button } from 'antd';


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const validateMessages = {
    required: "username or password is required!",
    // ...
};

export class Login extends Component {

    state = {
        errorMessage: null,
      };

    onFinish(values: any) {
        console.log('Success:', values);
    }

    onFinishFailed(errorInfo: any) {
        console.log('Failed:', errorInfo);
    }

    render() {
        const { errorMessage } = this.state;
        
        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    layout="vertical"
                    validateMessages={validateMessages}
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
                        rules={[{ required: true }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Log In
                    </Button>
                    </Form.Item>
                </Form>
                {errorMessage && <div className="error-msg"> msg </div>}
            </div>
        );
    }
}