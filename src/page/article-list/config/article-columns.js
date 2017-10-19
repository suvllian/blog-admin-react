import React from 'react'
import { Icon, Tooltip } from 'antd'
import { Link } from 'react-router-dom'

const articleColumns = [
  {
    title: '文章名称',
    dataIndex: 'aTopic'
  },
  {
    title: '文章简介',
    dataIndex: 'aIntro',
    width: 300
  },
  {
    title: '分类',
    dataIndex: 'aClassName'
  },
  {
    title: '发布日期',
    dataIndex: 'aDate'
  },
  {
    title: '是否显示',
    dataIndex: 'aShow',
    render: text => {
      return text ? '是' : '否'
    }
  },
  {
    title: '访问量',
    dataIndex: 'aVisit'
  },
  {
    title: '首图预览',
    dataIndex: 'aImage',
    render: src => {
      return <img className="image-preview" src={src} />;
    }
  },
  {
    title: '预览/修改',
    dataIndex: 'aId',
    render: id => {
      return <span>
        <Tooltip title='预览'>
          <a target="_blank" rel="noopener noreferrer" href={`http://suvllian.com/article/${id}`} 
            style={{ color: 'green', marginRight: 12, fontSize: 14 }}>
            <Icon type='eye' />
          </a>
        </Tooltip>
        <Tooltip title='修改'>
          <Link to="/index/edit-article">
            <Icon type='edit' style={{ color: 'blue', fontSize: 14 }} />
          </Link>
        </Tooltip>
      </span>
    }
  }
];

export default articleColumns;
