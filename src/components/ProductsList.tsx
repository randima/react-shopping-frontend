import { Component } from "react";
import React from "react";
import { List } from 'antd';
import { ProductItem } from "./ProductItem";
import { PaginationProduct } from "../models/pagination.product.model";
import { Pagination } from 'antd';
import { ProductService } from "../services/products.service";
import { PaginationConfig } from "antd/lib/pagination";


interface Props {
    data: PaginationProduct
    loadPage: (page: number) => void
}

const productService = new ProductService();



export class ProductsList extends Component {
    state = {
        data: {
            items: [],
            itemCount: 1,
            totalItems: 1,
            pageCount: 1,
            next: "",
            previous: ""
        },
        current: 1
    };



    componentDidMount() {
        this.fetchTasks(1);
    }

    private async fetchTasks(page: number) {
        const result = await productService.getProducts(page);

        if (result) {
            this.setState({ data: result.data });
        }
    }


    private onChange = (page: number) => {
        console.log(page);
        this.fetchTasks(page);
        this.setState({
            current: page,
        });
    };

    render() {
        return (
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 4
                }}

                pagination={{
                    position: "bottom",
                    current: this.state.current,
                    onChange: this.onChange,
                    total: this.state.data.totalItems,
                    pageSize: 8,
                    style: { textAlign: "center" }
                }}

                dataSource={this.state.data.items}
                renderItem={item => (
                    <List.Item>
                        <ProductItem item={item}></ProductItem>
                    </List.Item>
                )}
            />
            // {/* <Pagination current={this.state.current} onChange={this.onChange} total={this.state.data.totalItems} pageSize={8} />; */}
        );
    }
};