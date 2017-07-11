import React, { PropTypes as T, Component } from 'react'
import { Button, Input, InputNumber, Select,
  DatePicker, Form, Radio, Switch } from 'antd'
import moment from 'moment'

const FormItem = Form.Item 
const RadioGroup = Radio.Group 

class FormBlock extends Component {
	constructor(props) {
		super(props);
		
	}

	getTextField(field) {
		return (
      <span className="ant-form-text">{field.options && field.options.initialValue}</span>
		)
	}

	getInputField(field) {
		return (
      <Input />
		)
	}

	getInputNumberField(field) {
		return (
      <InputNumber
        step={field.options.step}
        formatter={field.options.formatter}
        style={{ width: '100%' }}
      />
		)
	}

	getTextAreaField(field) {
		return (
      <Input type="textarea" rows={field.options.rows || 4} disabled={field.options.disabled} />
		)
	}

	getSelectField(field) {
		return (
      <Select
		    placeholder="请选择"
		    style={{
		      width: '100%',
		    }}
		    disabled={field.disabled}
		    multiple={field.multiple}
		  >
		    {field.items().map(({ key, value }) =>
		      <Select.Option key={key.toString()} value={key.toString()}>{value}</Select.Option>)}
		  </Select>
		)
	}

	getRadioGroupField(field) {
		return (
      <RadioGroup>
		    {field.items().map(({ key, value }) =>
		      <Radio key={key.toString()} value={key}>{value}</Radio>
		    )}
		  </RadioGroup>
		)
	}

	getDateField(field) {
		return (
      <DatePicker
		    showToday={false}
		    placeholder="请选择日期"
		  />
		)
	}

	getDateTimeField(field) {
		return (
      <DatePicker
	      showTime
	      format="YYYY-MM-DD"
	      placeholder="请选择时间"
	      showToday={false}
	      onChange={value => console.log(value._d.toString())}
	    />
		)
	}

	getSwitchField(field) {
		return (
      <Switch
		    checkedChildren={'开'}
		    unCheckedChildren={'关'}
		    disabled={field.options.disabled}
		    defaultChecked={field.options.initialValue}
		  />
		)
	}

	getUploadField(field) {
		return (
      <input
	      type="file"
	      ref={field.options.ref}
	      disabled={field.options.disabled}
	      name="patchFile"
	    />
		)
	}

	generateFormItem({ formItemLayout, label, hasFeedBack, name, options, component }) {
		const { getFieldDecorator } = this.props.form
		return (
      <FormItem
	      {...formItemLayout}
	      key={name}
	      label={label}
	      hasFeedBack={hasFeedBack}
	    >
	      {getFieldDecorator(name, options)(component)}
	    </FormItem>
		)
	}

	onCancel() {
		const { onCancel } = this.props
		onCancel()
	}
  
  generateFormFields(fields) {
    const formItemLayout = this.props.formItemLayout || {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    const components = []

    for (const field of fields) {
    	let component = null 
    	switch (field.type) {
    		case 'input':
    		  component = this.getInputField(field)
    		  break
    		case 'inputNumber':
    		  component = this.getInputNumberField(field)
    		  break
    		case 'select':
    		  component = this.getSelectField(field)
    		  break
    		case 'radioGroup':
    		  component = this.getRadioGroupField(field)
    		  break
    		case 'date':
    		  component = this.getDateField(field)
    		  break
    		case 'datetime':
    		  component = this.getDateTimeField(field)
    		  break
    		case 'switch':
    		  component = this.getSwitchField(field)
    		  break
    		case 'upload':
    		  component = this.getUploadField(field)
    		  break
    		case 'textarea':
    		  component = this.getTextAreaField(field)
    		  break
    		default:
    		  component = this.getTextField(field)
    		  break
    	}

    	component = this.generateFormItem({
        formItemLayout,
        component,
        label: field.label,
        name: field.name,
        options: field.options,
        hasFeedBack: field.type === 'input',
      })
      components.push(component)
    }

    const buttons = (
      <FormItem
        key="control-buttons"
        wrapperCol={{
          span: 14,
          offset: 6,
        }}
      >
        <div className="buttons">
          <Button type="primary" htmlType="submit" style={{marginRight: 15}}>{this.props.okText || '确定'}</Button>
          <Button onClick={::this.onCancel}>取消</Button>
        </div>

      </FormItem>
    )

    components.push(buttons)
    return components
  }

	render() {
		const { fields, onOk } = this.props 

		return (
      <div className="formWrapper">
        <Form onSubmit={e => {
        	e.preventDefault()
        	console.log(e.target)
			    console.log(e.target.imageName.value)
			    console.log(e.target.imageContent.value)
			    console.log(e.target.cityName.value)
			    console.log(e.target.publishTime.value)
        	onOk(e.target)
        }}>
          {this.generateFormFields(fields)}
        </Form>
      </div>
		)
	}
} 

export default Form.create()(FormBlock)