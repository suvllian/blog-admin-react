const editBookFields = item => {
  return [
    {
      label: '书籍名称',
      type: 'input',
      name: 'bookName',
      options: {
        initialValue: item.iName,
        rules: [{
          required: true,
          message: '输入书籍名称！'
        }]
      }
    },
    {
      label: '书籍简介',
      type: 'input',
      name: 'imageContent',
      options: {
        initialValue: item.iContent,
        rules: [{
          required: true,
          message: '输入书籍简介！'
        }]
      }
    },
    {
      label: '书籍分类',
      type: 'input',
      name: 'cClass',
      options: {
        initialValue: item.cClass,
        rules: [{
          required: true,
          message: '输入书籍分类！'
        }]
      }
    },
    {
      label: '是否显示',
      type: 'radioGroup',
      name: 'iShow',
      items: () => {
        let showChoose = [
          {
            key: 1,
            value: '显示'
          },
          {
            key: 0,
            value: '不显示'
          }
        ];
        return showChoose;
      },
      options: {
        initialValue: parseInt(item.iShow),
        rules: [{
          required: true,
          message: '请选择！'
        }]
      }
    },
    
  ]
}

export default editBookFields;
