import { Component } from "react";
import { Layout } from 'antd';
import { TopBar } from "./TopBar";
import { ProductsList } from "./ProductsList";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
const { Header, Footer, Content } = Layout;

export class MainPage extends Component<RouteComponentProps> {
    render() {
        return (
            <Layout>
                <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                    <TopBar {...this.props}></TopBar>
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