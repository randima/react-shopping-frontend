import { FunctionComponent } from "react";
import React from "react";
import { Card, Button, Rate } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from "../models/product.model";

interface Props{
    item :Product;
}

const { Meta } = Card;


export const ProductItem: FunctionComponent<Props> = ({item}) => {
    return (
        <div>
            <Card hoverable={true}
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src={item.imgUrl}
                    />
                }
                actions={[
                    <Button type="primary" icon={<ShoppingCartOutlined style={{ fontSize: '20px' }} />} size="large" >Add</Button>
                ]}
            >
                <Meta
                    title={item.name}
                    description={item.price}


                />
                <Rate allowHalf defaultValue={2.5} />
            </Card>
        </div>
    );

};