import { Component } from "react";
import React from "react";
import { Form, Input, Button, message } from 'antd';
import AuthService from "../services/auth.service";
import { RouteComponentProps } from "react-router-dom";


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

const authService = new AuthService();

export class Login extends Component<RouteComponentProps> {

    state = {
        errorMessage: null,
    };

    onFinish = async(values: any) => {
        console.log('Success:', values);

        //this.setState({ errorMessage: null });

        try {
            await authService.signin(values);
            this.props.history.push('/');
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
                        label="Email"
                        name="email"
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