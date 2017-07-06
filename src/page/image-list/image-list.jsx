import React, {Component} from 'react'
import { Button, Modal } from 'antd'
import 'isomorphic-fetch'
import Table from './../../components/table/table.jsx'
import FormModal from './../../components/form-modal/form-modal.jsx'
import imageColumns from './utils/image-columns.js'
import addImageFields from './utils/add-image-fields.js'
import './index.scss'

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

  submitImageInfo() {
    
  }

  cancelSubmit() {
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
          title={imageColumns}
    		/>
        <FormModal
          visible={isAdding}
          title="添加图片"
          onOk={this.submitImageInfo}
          onCancel={this.cancelSubmit}
          onText="确定"
          fields={addImageFields}
        />
    	</div>
    )
	}
}

export default ImageList