import { Component } from "react";
import { Layout } from 'antd';
import { TopBar } from "./TopBar";
import { ProductsList } from "./ProductsList";
import React from "react";
const { Header, Footer, Content } = Layout;

export class MainPage extends Component {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <TopBar></TopBar>
                </Header>
                <Content style={{ padding: '50px 50px', marginTop: 64 }}>
                    <ProductsList></ProductsList>
                </Content>
                <Footer>
                    Footer
                  </Footer>
            </Layout>
        );
    }
}