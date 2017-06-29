import React, { Component } from 'react'
import { Menu, Icon, Switch, Layout } from 'antd'


const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu

class Container extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <Layout>
        <Sider>
	        <Menu
	          theme='dark'
	          mode="inline"
	          style={{ width: 200, paddingTop: 84 }}
	        >
	          <SubMenu key="articl" title={<span><Icon type="folder" /><span>文章管理</span></span>}>
	            <Menu.Item key="1">文章列表</Menu.Item>
	            <Menu.Item key="2">添加文章</Menu.Item>
	            <Menu.Item key="3">添加分类</Menu.Item>
	          </SubMenu>
	          <SubMenu key="camera" title={<span><Icon type="camera" /><span>图片管理</span></span>}>
	            <Menu.Item key="4">图片列表</Menu.Item>
	            <Menu.Item key="5">添加图片</Menu.Item>
	            <Menu.Item key="6">添加分类</Menu.Item>
	          </SubMenu>
	          <SubMenu key="book" title={<span><Icon type="book" /><span>书籍管理</span></span>}>
	            <Menu.Item key="7">书籍列表</Menu.Item>
	            <Menu.Item key="8">添加书籍</Menu.Item>
	            <Menu.Item key="9">添加分类</Menu.Item>
	          </SubMenu>
	        </Menu>
	      </Sider>
        <Layout>
			    <Header style={{ background: '#fff', marginLeft: '16px', padding: 24 }} />
			    <Content style={{ margin: '24px 16px 0' }}>
			      <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
			        content
			      </div>
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			      瓦尔登湖畔一棵松 ©2017 All Right Reserved
			    </Footer>
			  </Layout>
      </Layout>
    );
  }
}

export default Container;