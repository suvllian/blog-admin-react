import React, {Component} from 'react'
import 'isomorphic-fetch'
import Table from './../../components/table/table.jsx'
import './index.scss'

const columns = [
  {
  	title: '序号',
  	dataIndex: 'rowIndex'
  },
  {
  	title: '文章名称',
  	dataIndex: 'aTopic'
  },
  {
    title: '文章简介',
    dataIndex: 'aIntro',
    width: 300
  },
  {
    title: '分类',
    dataIndex: 'aClassName'
  },
  {
    title: '发布日期',
    dataIndex: 'aDate'
  },
  {
    title: '是否显示',
    dataIndex: 'aShow'
  },
  {
    title: '访问量',
    dataIndex: 'aVisit'
  },
  {
    title: '首图预览',
    dataIndex: 'aImage',
    render: (src) => {
      return <img className="image-preview" src={src} />
    }
  },
  {
  	title: '文章预览',
  	dataIndex: 'aId',
    render: (id) => {
      return <a target="_blank" href={`http://suvllian.com/article?id=${id}`}>点击预览</a>
    }
  }
]

class ArticleList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			articleList: []
		}
	}
  
  componentDidMount() {
  	fetch('http://127.0.0.1/sadmin/index.php?do=article&concrete=allArticle')
  	.then(res => res.json())
  	.then(res => {
      res.map((item, index) => {
        item.aShow = item.aShow ? "是" : "否"
      })
  		this.setState({articleList: res})
  	})
  }

	render() {
    return (
    	<div>
    		<Table 
          data={this.state.articleList}
          title={columns}
    		/>
    	</div>
    )
	}
}

export default ArticleList