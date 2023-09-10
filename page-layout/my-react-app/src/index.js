import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/reset.css'; // Import the Ant Design CSS
 // Import Ant Design CSS
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


ReactDOM.render(
  <Layout style={{ minHeight: '100vh' }}>
    <Sider width={200} style={{ background: '#fff' }}>
      {/* Sidebar Content */}
      Sidebar
    </Sider>
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        {/* Header Content */}
        Header
      </Header>
      <Content style={{ margin: '16px' }}>
        {/* Content Section */}
        Content
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        {/* Footer Content */}
        Footer
      </Footer>
    </Layout>
  </Layout>,
  document.getElementById('root')
);
