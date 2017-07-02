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
  	title: '图片名称',
  	dataIndex: 'iTopic'
  },
  {
  	title: '图片预览',
  	dataIndex: 'iImage',
  	render: (text) => {
  		return <img className="image-preview" src={`http://suvllian.com/static/images/travel/${text}.jpg`} />
  	}
  },
  {
  	title: '图片简介',
  	dataIndex: 'iContent'
  },
  {
  	title: '点赞数',
  	dataIndex: 'iLike'
  },
  {
  	title: '发布日期',
  	dataIndex: 'iDate'
  },
  {
  	title: '城市名',
  	dataIndex: 'cName'
  },
  {
  	title: '是否显示',
  	dataIndex: 'iShow'
  }
]

class ImageList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			imageList: []
		}
	}
  
  componentDidMount() {
  	fetch('http://127.0.0.1/sadmin/index.php?do=image&concrete=allImage')
  	.then(res => res.json())
  	.then(res => {
  		this.setState({imageList: res})
  	})
  }

	render() {
    return (
    	<div>
    		<Table 
          data={this.state.imageList}
          title={columns}
    		/>
    	</div>
    )
	}
}

export default ImageList