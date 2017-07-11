const editImageFields = item => {
  return [
    {
      label: '图片名称',
      type: 'input',
      name: 'imageName',
      options: {
        initialValue: item.iTopic,
        rules: [{
          required: true,
          message: '输入图片名称！'
        }]
      }
    },
    {
      label: '图片简介',
      type: 'input',
      name: 'imageContent',
      options: {
        initialValue: item.iContent,
        rules: [{
          required: true,
          message: '输入图片简介！'
        }]
      }
    },
    {
      label: '城市名',
      type: 'input',
      name: 'cityName',
      options: {
        initialValue: item.cName,
        rules: [{
          required: true,
          message: '输入城市名！'
        }]
      }
    },
    {
      label: '发布日期',
      type: 'input',
      name: 'publishTime',
      options: {
        initialValue: item.iDate,
        rules: [{
          required: true,
          message: '输入发布时间！'
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

export default editImageFields;
