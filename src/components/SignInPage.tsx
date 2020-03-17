import { Component } from "react";
import React from "react";
import '../css/signin.css';
import { Tabs } from 'antd';
import { Login } from "./Login";
import { Register } from "./Register";
import { RouteComponentProps } from "react-router-dom";

const { TabPane } = Tabs;




export class SignInPage extends Component<RouteComponentProps> {
    state = {
        key: '1'
    };

    onTabChange = (key: string, type: any) => {
        console.log(key, type);
        this.setState({ [type]: key });
    };

    changeTab = (key: string) => {
        this.setState({ key: key });
    }

    callback(key: string) {
        this.changeTab(key);
        console.log(key);
    }



    render() {
        return (
            <div className="fullscreen-wrapper">
                <div className="login-container">
                    <Tabs
                        onChange={this.callback.bind(this)} activeKey={this.state.key}
                    >
                        <TabPane tab="Login" key="1">
                            <Login {...this.props}/>
                        </TabPane>
                        <TabPane tab="Register" key="2">
                            <Register changeTab={this.changeTab} />
                        </TabPane>
                    </Tabs>
                </div>

            </div>

        );
    }
}