import React, {Component} from 'react'
import { Button, Modal, message } from 'antd'
import 'isomorphic-fetch'
import Table from './../../common/table/index.jsx'
import FormModal from './../../common/form-modal/index.jsx'
import bookColumns from './config/book-columns.js'
import editBookFields from './config/edit-book-fields.js'
import './index.scss'

const confirm = Modal.confirm

class BookList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			bookList: [],
      bookCount: 0,
      isFetching: false,
      isEditing: false,
      isAdding: false,
      editField: []
		}
	}
  
  componentDidMount() {
  	this.getBooks()
  }

  getBooks(page = 1) {
    this.setState({
      isFetching: true
    })

    fetch(`http://127.0.0.1/sadmin/index.php?do=book&concrete=allBook&page=${page}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        isFetching: false,
        bookList: res.data,
        bookCount: parseInt(res.count)
      })
    })
  }

  tableAction(actionKey, item) {
    if (actionKey === 'edit') {
      this.setState({
        isEditing: true,
        editField: editBookFields(item)
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

  cancelAdd() {
    this.setState({
      isAdding: false
    })
  }

  submitImageInfo(value) {
    
  }

  cancelEdit() {
    this.setState({
      isEditing: false
    })
  }

  changePage(page) {
    this.getBooks(page)
  }

	render() {
    const { isAdding = false, isEditing = false, isFetching = false, bookList, bookCount, editField } = this.state

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
    		<Table 
          data={bookList}
          title={bookColumns}
          isFetching={isFetching}
          total={bookCount}
          changePage={::this.changePage}
          actions={actions}
          onCtrlClick={::this.tableAction}
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

export default BookList