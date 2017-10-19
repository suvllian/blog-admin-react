import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { Button, Modal, message } from 'antd'
import 'isomorphic-fetch'
import Table from './../../common/table/index.jsx'
import articleColumns from './config/article-columns.js'
import './index.scss'

const confirm = Modal.confirm

class ArticleList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      isFetching: false,
			articleList: [],
      articleCount: 0
		}
  }
  
  componentDidMount() {
  	this.getArticles()
  }

  changePage(page = 1) {
    this.getArticles(page)
  }

  getArticles(page = 1) {
    this.setState({
      isFetching: true
    })

    fetch(`http://127.0.0.1/sadmin/index.php?do=article&concrete=allArticle&page=${page}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        isFetching: false,
        articleList: res.data,
        articleCount: parseInt(res.count)
      })
    })
  }

  tableAction(actionKey, item) {
    if (actionKey === 'delete') {
      confirm({
        title: '提示',
        content: '确认删除？',
        onOk: () => {
          message.success('删除成功')
        }
      })
    }
  }

	render() {
    const { isFetching = false, articleList = [], articleCount = 0 } = this.state

    const actions = [
      {
        key: 'delete',
        name: '删除',
        color: 'red',
        icon: 'delete'
      }
    ]

    return (
    	<div>
    		<Table 
          dataSource={articleList}
          title={articleColumns}
          isFetching={isFetching}
          actions={actions}
          total={articleCount}
          changePage={::this.changePage}
          onCtrlClick={::this.tableAction}
    		/>
    	</div>
    )
	}
}

export default ArticleList