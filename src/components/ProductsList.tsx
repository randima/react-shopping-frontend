import { FunctionComponent } from "react";
import React from "react";
import { List, Card } from 'antd';
import { ProductItem } from "./ProductItem";
import { Product } from "../models/product.model";
import { PaginationProduct } from "../models/pagination.product.model";

interface Props {
    data: PaginationProduct
}

export const ProductsList: FunctionComponent<Props> = ({ data }) => {
    return (
        <div>

            <List
                grid={{ gutter: 16, column: 4 }}
                dataSource={data.items}
                renderItem={item => (
                    <List.Item>
                        <ProductItem item={item}></ProductItem>
                    </List.Item>
                )}
            />
        </div>
    );

};