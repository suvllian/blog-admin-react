import React, { PropTypes as T, Component } from 'react'
import { Modal } from 'antd'
import FormBlock from './../form/form.jsx'

class FormModal extends Component {
  render() {
  	const { visible, title, fields, onCancel, onOk, okText } = this.props 

  	return (
      <Modal 
        title={title}
        onCancel={onCancel}
        visible={visible}
        onCancel={onCancel}
        footer={null}
      >
        <FormBlock
          fields={fields}
          onOk={onOk}
          onCancel={onCancel}
          okText={okText}
          showCancel={true}
        />
      </Modal>
  	)
  }
}

export default FormModal