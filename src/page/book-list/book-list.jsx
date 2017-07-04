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
  	title: '书籍名称',
  	dataIndex: 'iName'
  },
  {
    title: '书籍简介',
    dataIndex: 'iContent',
    width: 300
  },
  {
    title: '分类',
    dataIndex: 'cClass'
  },
  {
    title: '发布日期',
    dataIndex: 'iDate'
  },
  {
    title: '是否显示',
    dataIndex: 'iShow'
  },
  {
    title: '点赞数',
    dataIndex: 'iLike'
  },
  {
  	title: '书籍图片',
  	dataIndex: 'iImage',
    render: (src) => {
      return <img className="image-preview" src={src} />
    }
  },
  {
    title: '背景图片',
    dataIndex: 'iBgLink',
    render: (src) => {
      return <img className="image-preview" src={src} />
    }
  }
]

class BookList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			bookList: []
		}
	}
  
  componentDidMount() {
  	fetch('http://127.0.0.1/sadmin/index.php?do=book&concrete=allBook')
  	.then(res => res.json())
  	.then(res => {
      res.map((item, index) => {
        item.iShow = item.iShow ? "是" : "否"
      })
  		this.setState({bookList: res})
  	})
  }

	render() {
    return (
    	<div>
    		<Table 
          data={this.state.bookList}
          title={columns}
    		/>
    	</div>
    )
	}
}

export default BookList