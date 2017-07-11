import React, {Component} from 'react'
import 'isomorphic-fetch'
import Table from './../../common/table/index.jsx'
import articleColumns from './config/article-columns.js'
import './index.scss'

class ArticleList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      isFetching: false,
			articleList: [],
      articleCount: 0
		}
	}

  changePage(page = 1) {
    this.getArticles(page)
  }

  getArticles(page = 1) {
    this.setState({
      isFetching: true
    })

    fetch(`http://127.0.0.1/sadmin/index.php?do=article&concrete=allArticle&page=${page}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        isFetching: false,
        articleList: res.data,
        articleCount: parseInt(res.count)
      })
    })
  }
  
  componentDidMount() {
  	this.getArticles()
  }

	render() {
    const { isFetching = false, articleList = [], articleCount = 0 } = this.state

    return (
    	<div>
    		<Table 
          data={articleList}
          title={articleColumns}
          isFetching={isFetching}
          total={articleCount}
          changePage={::this.changePage}
    		/>
    	</div>
    )
	}
}

export default ArticleList