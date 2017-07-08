import React, {Component} from 'react'
import 'isomorphic-fetch'
import Table from './../../common/table/table.jsx'
import articleColumns from './utils/article-columns.js'
import './index.scss'

class ArticleList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			articleList: []
		}
	}
  
  componentDidMount() {
  	fetch('http://127.0.0.1/sadmin/index.php?do=article&concrete=allArticle')
  	.then(res => res.json())
  	.then(res => {
      res.map((item, index) => {
        item.aShow = item.aShow ? "是" : "否"
      })
  		this.setState({articleList: res})
  	})
  }

	render() {
    return (
    	<div>
    		<Table 
          data={this.state.articleList}
          title={articleColumns}
    		/>
    	</div>
    )
	}
}

export default ArticleList