import React, {Component} from 'react'
import { Button, Modal } from 'antd'
import 'isomorphic-fetch'
import Table from './../../components/table/table.jsx'
import FormModal from './../../components/form-modal/form-modal.jsx'
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
    title: '图片简介',
    dataIndex: 'iContent'
  },
  {
    title: '城市名',
    dataIndex: 'cName'
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
  	title: '图片预览',
  	dataIndex: 'iImage',
  	render: (text) => {
  		return <img className="image-preview" src={`http://suvllian.com/static/images/travel/${text}.jpg`} />
  	}
  } 
]

class ImageList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			imageList: [],
      isEditing: false,
      isAdding: false
		}

    this.addImage = this.addImage.bind(this)
    this.submitImageInfo = this.submitImageInfo.bind(this)
    this.cancelSubmit = this.cancelSubmit.bind(this)
	}
  
  componentDidMount() {
  	fetch('http://127.0.0.1/sadmin/index.php?do=image&concrete=allImage')
  	.then(res => res.json())
  	.then(res => {
      res.map((item, index) => {
        item.iShow = item.iShow ? "是" : "否"
      })
  		this.setState({imageList: res})
  	})
  }

  addImage() {
    this.setState({isAdding: true})
  }

  addFields() {
    return [
      {
        label: "图片名称",
        type: 'input',
        name: 'imageName',
        options: {
          rules: [{
            required: true,
            message: '输入图片名称！'
          }]
        }
      },
      {
        label: "图片简介",
        type: 'input',
        name: 'imageContent',
        options: {
          rules: [{
            required: true,
            message: '输入图片简介！'
          }]
        }
      },
      {
        label: "城市名",
        type: 'input',
        name: 'cityName',
        options: {
          rules: [{
            required: true,
            message: '输入城市名！'
          }]
        }
      },
      {
        label: "发布日期",
        type: 'datetime',
        name: 'publishTime',
        options: {
          rules: [{
            required: true,
            message: '输入发布时间！'
          }]
        }
      },
      {
        label: "是否显示",
        type: 'radioGroup',
        name: 'isShow',
        items: () => {
          let showChoose = [
            {
              key: '0',
              value: '显示'
            },
            {
              key: '1',
              value: '不显示'
            }
          ]
          return showChoose
        },
        options: {
          rules: [{
            required: true,
            message: '请选择！'
          }]
        }
      },
      {
        label: "图片预览",
        type: 'upload',
        name: 'imagePreview',
        options: {
          rules: [{
            required: true,
            message: '输入发布时间！'
          }]
        }
      },
    ]
  }

  submitImageInfo() {
    
  }

  cancelSubmit() {
    console.log("cancel")
    this.setState({isAdding: false})
  }

	render() {
    const { isAdding } = this.state

    return (
    	<div>
        <div>
          <Button type="primary" onClick={this.addImage}>添加</Button>
        </div>
    		<Table 
          data={this.state.imageList}
          title={columns}
    		/>
        <FormModal
          visible={isAdding}
          title="添加图片"
          onOk={this.submitImageInfo}
          onCancel={this.cancelSubmit}
          onText="确定"
          fields={this.addFields()}
        />
    	</div>
    )
	}
}

export default ImageList