import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { Menu, Icon, Switch, Layout, Breadcrumb } from 'antd'
import ImageList from './../page/image-list/index.jsx'
import BookList from './../page/book-list/index.jsx'
import ArticleList from './../page/article-list/index.jsx'
import EditArticle from './../page/edit-article/index.jsx'
import './index.scss'

const { Header, Footer, Sider, Content } = Layout
const SubMenu = Menu.SubMenu
const BreadItem = Breadcrumb.Item

class Container extends Component {
	constructor(props) {
		super(props);

		this.state = {
			breadMenu: [
        {
        	link: '/index/article',
        	title: '文章管理'
        }
			]
		}
	}

	setBreadMenu(menu) {
    this.setState({
    	breadMenu: menu
    })
	}

  render() {
    return (
      <Layout className="container">
        <Sider>
	        <Menu
	          theme='dark'
	          mode="inline"
	          style={{ width: 200, height: '100vh' }}
	        >
	          <SubMenu key="articl" title={<span><Icon type="folder" /><span>文章管理</span></span>}>
	            <Menu.Item key="1"><Link to="/index/article-list">文章列表</Link></Menu.Item>
	            <Menu.Item key="2">添加文章</Menu.Item>
	          </SubMenu>
	          <SubMenu key="camera" title={<span><Icon type="camera" /><span>图片管理</span></span>}>
	            <Menu.Item key="4"><Link to="/index/image">图片列表</Link></Menu.Item>
	          </SubMenu>
	          <SubMenu key="book" title={<span><Icon type="book" /><span>书籍管理</span></span>}>
	            <Menu.Item key="7"><Link to="/index/book">书籍列表</Link></Menu.Item>
	          </SubMenu>
	        </Menu>
	      </Sider>
        <Layout>
			    <Header style={{ background: '#fff', marginLeft: '16px' }}>
            <Breadcrumb>
					    <BreadItem>首页</BreadItem>
					  </Breadcrumb>
			    </Header>
			    <Content style={{ margin: '24px 16px 0', padding: 24, background: '#fff', minHeight: 360 }}>
			      <Route breadcrumbName="图片管理" path="/index/image" component={ImageList} />
			      <Route breadcrumbName="文章管理" path="/index/article-list" component={ArticleList} />
			      <Route breadcrumbName="修改文章" path="/index/edit-article" component={EditArticle} />
			      <Route breadcrumbName="书籍管理" path="/index/book" component={BookList} />
			    </Content>
			    <Footer style={{ textAlign: 'center' }}>
			      瓦尔登湖畔一棵松 ©2017 All Right Reserved
			    </Footer>
			  </Layout>
      </Layout>
    );
  }
}

export default Container