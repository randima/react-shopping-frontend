import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TopBar } from './components/TopBar';
import { Layout } from 'antd';
import { ProductsList } from './components/ProductsList';
import { ProductService } from './services/products.service';
const { Header, Footer, Content } = Layout;

const productService = new ProductService();

class App extends Component {
  state = {
    items: [],
    itemCount: 1,
    totalItems: 1,
    pageCount: 1,
    next: "",
    previous: ""
  };

  componentDidMount() {
    this.fetchTasks();
  }

  async fetchTasks() {
    const result = await productService.getProducts(0);

    if (result) {
      this.setState(result.data);
    }
  }


  render() {
    return (
      <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}><TopBar></TopBar></Header>
          <Content style={{ padding: '50px 50px', marginTop: 64 }}><ProductsList data={this.state}></ProductsList></Content>
          <Footer>Footer</Footer>
        </Layout>        
      </div>
    );
  }
}
export default App;
