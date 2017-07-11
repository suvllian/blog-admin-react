import React, {Component} from 'react'
import { Button, Modal, message } from 'antd'
import 'isomorphic-fetch'
import Table from './../../common/table/index.jsx'
import FormModal from './../../common/form-modal/index.jsx'
import imageColumns from './config/image-columns.js'
import addImageFields from './config/add-image-fields.js'
import editImageFields from './config/edit-image-fields.js'
import './index.scss'

const confirm = Modal.confirm

class ImageList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			imageList: [],
      imageCount: 0,
      isFetching: false,
      isEditing: false,
      isAdding: false,
      editField: []
		}
	}

  componentDidMount() {
    this.getImages()
  }

  // 分页，获取新数据
  changePage(page = 1) {
    this.getImages(page)
  }

  // 获取图片信息
  getImages(page = 1) {
    this.setState({
      isFetching: true
    })

    fetch(`http://127.0.0.1/sadmin/index.php?do=image&concrete=allImage&page=${page}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        imageList: res.data,
        imageCount: parseInt(res.count),
        isFetching: false
      })
    })
  }

  tableAction(actionKey, item) {
    if (actionKey === 'edit') {
      this.setState({
        isEditing: true,
        editField: editImageFields(item)
      })
    }

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

  addImage() {
    this.setState({
      isAdding: true
    })
  }

  submitImageInfo(value) {
    
  }

  cancelAdd() {
    this.setState({
      isAdding: false
    })
  }

  cancelEdit() {
    this.setState({
      isEditing: false
    })
  }

	render() {
    const { isAdding = false, isEditing = false, isFetching = false, imageList, imageCount, editField } = this.state

    const actions = [
      {
        key: 'edit',
        name: '修改',
        color: 'blue',
        icon: 'edit'
      },
      {
        key: 'delete',
        name: '删除',
        color: 'red',
        icon: 'delete'
      }
    ]

    return (
    	<div>
        <div>
          <Button type="primary" onClick={::this.addImage}>添加</Button>
        </div>
    		<Table 
          onCtrlClick={::this.tableAction}
          data={imageList}
          title={imageColumns}
          isFetching={isFetching}
          total={imageCount}
          changePage={::this.changePage}
          actions={actions}
    		/>
        <FormModal
          visible={isAdding}
          title="添加图片"
          onOk={::this.submitImageInfo}
          onCancel={::this.cancelAdd}
          onText="确定"
          fields={addImageFields}
        />
        <FormModal
          visible={isEditing}
          title="修改图片"
          onOk={::this.submitImageInfo}
          onCancel={::this.cancelEdit}
          onText="确定"
          fields={editField}
        />
    	</div>
    )
	}
}

export default ImageList