import React, {Component} from 'react';
import NewSingle from './NewSingle';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
        };
    }
componentDidMount() {
        const url = 'https://newsapi.org/v2/everything?q=marcelo%bielsa&apiKey=614391732a104d79960523a2f1ec0f2d';

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({
                news: data.articles
            })
        })
        .catch((error) => console.log(error));
}

    renderItems() {
        return this.state.news.map((item) => (
            <NewSingle key={item.url} item={item} />
        ));
    }

    render (){
        return (
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}
export default News;