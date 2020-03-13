import { Component } from "react";
import React from "react";
import '../css/signin.css';
import { Tabs } from 'antd';
import { Login } from "./Login";
import { Register } from "./Register";

const { TabPane } = Tabs;




export class SignInPage extends Component {
    state = {
        key: 'signin'
    };

    onTabChange = (key: string, type: any) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    callback(key: string) {
        console.log(key);
    }

  

    render() {
        return (
            <div className="fullscreen-wrapper">
                <div className="login-container">
                    <Tabs defaultActiveKey="1"
                        onChange={this.callback}
                    >
                        <TabPane tab="Login" key="1">
                            <Login/>
                        </TabPane>
                        <TabPane tab="Register" key="2">
                           <Register/>
                    </TabPane>
                    </Tabs>
                </div>

            </div>

        );
    }
}