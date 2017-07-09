import React, {Component} from 'react'
import {Table, Menu, Dropdown, Icon, Tooltip} from 'antd'
import './index.scss'

class TableComponent extends Component {
	constructor(props) {
		super(props);
	}

  changePage(page){
    const { changePage } = this.props 
    changePage(page)
  }

  setColumns() {
    const { title } = this.props 

  }

	render() {
		const { title, data, isFetching, total, actions } = this.props

    const columns = [{
      dataIndex: 'rowIndex',
      title: '序号'
    }, ...title]

    if (actions) {
      columns.push({
        title: '操作',
        render: row => {
          const buttons = actions.map(item => {
            return (
              <Tooltip title={item.name} key={item.key}>
                <a style={{ color: item.color, marginRight: 12, fontSize: 14 }}
                  onClick={e => {
                    e.preventDefault()
                    this.props.onCtrlClick(item.key, row)
                  }}>
                  <Icon type={item.icon} />
                </a>
              </Tooltip>
            )
          })

          return (<span>{buttons}</span>)
        } 
      })
    }
    
    data.map((item, index) => { item.rowIndex = index + 1 })

		return (
      <div className="table">
      	<Table 
          columns={columns}
          dataSource={data}
          loading={isFetching}
          pagination={{
            pageSize: 8,
            total: total,
            onChange: ::this.changePage
          }}
      	/>
      </div>
		)
	}
}

export default TableComponent