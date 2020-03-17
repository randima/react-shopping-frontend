import { FunctionComponent, Component } from "react";
import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Badge } from 'antd';
import '../css/topbar.css';

import { Row, Col, Divider } from 'antd';
import { RouteComponentProps } from "react-router-dom";

const { Search } = Input;



export class TopBar extends Component<RouteComponentProps>  {

    loadToken(): string | null {
        const token = localStorage.getItem('accessToken');
        return token;
    }

    removeToken() :void {
        localStorage.removeItem('accessToken');
    }

    loadSignin = () => {
        this.props.history.push('/signin')
    }

    render() {
        return (
            <div>
                <Row>
                    <Col flex={14}> <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: "100%" }}
                    /></Col>
                    <Col flex={2}>
                        <div className="user-name">Hello, User Name</div>
                    </Col>
                    <Col flex={1}>
                        <Button type="primary" size="large" onClick={this.loadSignin}>Sign In</Button>
                        <Badge count={5} offset={[-5, 5]} showZero={false} >
                            <Button type="primary" icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />} size="large" ></Button>
                        </Badge>
                    </Col>
                </Row>


            </div>
        );
    }

};