import React, {Component} from 'react'
import {Table, Menu, Dropdown, Icon, Tooltip} from 'antd'
import './index.scss'

class TableComponent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title, data } = this.props
    
    data.map((item, index) => {
    	item.rowIndex = index + 1
    })

		return (
      <div className="table">
      	<Table 
          columns={title}
          dataSource={data}
          pagination={{pageSize: 8}}
      	/>
      </div>
		)
	}
}

export default TableComponent