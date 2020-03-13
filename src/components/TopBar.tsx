import { FunctionComponent } from "react";
import React from "react";
import { Button } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Badge } from 'antd';

import { Row, Col, Divider } from 'antd';

const { Search } = Input;



export const TopBar: FunctionComponent = ({ }) => {
    return (
        <div>
            <Row>
                <Col flex={15}> <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: "100%" }}
                /></Col>
                <Col flex={1}>
                    <Button type="primary" size="large">Sign In</Button>
                    <Button type="primary" size="large">Sign Up</Button>
                    <Badge count={5} offset={[-5, 5]} showZero={false} >
                        <Button type="primary" icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />} size="large" ></Button>
                    </Badge>
                </Col>
            </Row>


        </div>
    );

};