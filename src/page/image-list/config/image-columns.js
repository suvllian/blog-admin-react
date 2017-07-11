import React from 'react';
import { Icon, Tooltip } from 'antd'

const imageColumns = [
  {
    title: '图片名称',
    dataIndex: 'iTopic'
  },
  {
    title: '图片简介',
    dataIndex: 'iContent'
  },
  {
    title: '城市名',
    dataIndex: 'cName'
  },
  {
    title: '发布日期',
    dataIndex: 'iDate'
  },
  {
    title: '是否显示',
    dataIndex: 'iShow',
    render: text => {
      return text ? '是' : '否'
    }
  },
  {
    title: '点赞数',
    dataIndex: 'iLike'
  },
  {
    title: '图片预览',
    dataIndex: 'iImage',
    render: text => {
      return <img className="image-preview" src={`http:\/\/suvllian.com/static/images/travel/${text}.jpg`} />;
    }
  }
]

export default imageColumns;
