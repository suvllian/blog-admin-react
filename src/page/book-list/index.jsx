import React, {Component} from 'react'
import 'isomorphic-fetch'
import Table from './../../common/table/table.jsx'
import FormModal from './../../common/form-modal/form-modal.jsx'
import { Button, Modal, message } from 'antd'
import bookColumns from './utils/book-columns.js'
import editBookFields from './utils/edit-book-fields.js'

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
  	this.getBooks(1)
  }

  getBooks(page) {
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
    const { isAdding, isEditing, bookList, bookCount, isFetching, editField } = this.state

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