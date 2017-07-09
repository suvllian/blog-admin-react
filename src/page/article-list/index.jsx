import React, {Component} from 'react'
import 'isomorphic-fetch'
import Table from './../../common/table/table.jsx'
import articleColumns from './utils/article-columns.js'

class ArticleList extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
      isFetching: false,
			articleList: [],
      articleCount: 0
		}
	}

  changePage(page) {
    this.getArticles(page)
  }

  getArticles(page) {
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
  	this.getArticles(1)
  }

	render() {
    const { isFetching, articleList, articleCount } = this.state

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