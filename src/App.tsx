import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/TopBar';
import { Layout } from 'antd';
import { ProductsList } from './components/ProductsList';
import { ProductService } from './services/products.service';
const { Header, Footer, Content } = Layout;



class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}><TopBar></TopBar></Header>
          <Content style={{ padding: '50px 50px', marginTop: 64 }}><ProductsList></ProductsList></Content>
          <Footer>Footer</Footer>
        </Layout>        
      </div>
    );
  }
}
export default App;
