import moment from 'moment'

const addImageFields = [
  {
    label: '图片名称',
    type: 'input',
    name: 'imageName',
    options: {
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
      rules: [{
        required: true,
        message: '输入城市名！'
      }]
    }
  },
  {
    label: '发布日期',
    type: 'datetime',
    name: 'publishTime',
    options: {
      initialValue: moment(),
      rules: [{
        required: true,
        message: '输入发布时间！'
      }]
    }
  },
  {
    label: '是否显示',
    type: 'radioGroup',
    name: 'isShow',
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
      initialValue: 1,
      rules: [{
        required: true,
        message: '请选择！'
      }]
    }
  },
  {
    label: '图片预览',
    type: 'upload',
    name: 'imagePreview',
    options: {
      rules: [{
        required: true,
        message: '输入选择图片！'
      }]
    }
  }
];

export default addImageFields;
