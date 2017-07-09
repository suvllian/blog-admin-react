import React from 'react';

const bookColumns = [
  {
    title: '序号',
    dataIndex: 'rowIndex'
  },
  {
    title: '书籍名称',
    dataIndex: 'iName'
  },
  {
    title: '书籍简介',
    dataIndex: 'iContent',
    width: 300
  },
  {
    title: '分类',
    dataIndex: 'cClass'
  },
  {
    title: '发布日期',
    dataIndex: 'iDate'
  },
  {
    title: '是否显示',
    dataIndex: 'iShow'
  },
  {
    title: '点赞数',
    dataIndex: 'iLike'
  },
  {
    title: '书籍图片',
    dataIndex: 'iImage',
    render: src => {
      return <img className="image-preview" src={src} />;
    }
  },
  {
    title: '背景图片',
    dataIndex: 'iBgLink',
    render: src => {
      return <img className="image-preview" src={src} />;
    }
  }
];

export default bookColumns;
