import React, {Component} from 'react'
import 'isomorphic-fetch'
import Table from './../../common/table/table.jsx'
import bookColumns from './utils/book-columns.js'
import './index.scss'

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
          title={bookColumns}
    		/>
    	</div>
    )
	}
}

export default BookList