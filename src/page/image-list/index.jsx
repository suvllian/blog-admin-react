import React, {Component} from 'react'
import { Button, Modal, message } from 'antd'
import 'isomorphic-fetch'
import Table from './../../common/table/table.jsx'
import FormModal from './../../common/form-modal/form-modal.jsx'
import imageColumns from './utils/image-columns.js'
import addImageFields from './utils/add-image-fields.js'
import editImageFields from './utils/edit-image-fields.js'

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
    this.getImages(1)
  }

  // 分页，获取新数据
  changePage(page) {
    this.getImages(page)
  }

  // 获取图片信息
  getImages(page) {
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
    const { isAdding, isEditing, imageList, isFetching, imageCount, editField } = this.state

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