import React, { Component } from 'react';
import { InputGroup, FormControl, Alert, Button,Card } from 'react-bootstrap';
import Axios from 'axios';
import {Link} from 'react-router-dom';



class ArticleList extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
            articles: [],
            message: ''

        }

    }

    updateSearch(e) {
        this.setState({search: e.target.value.substr(0,20)});
    }

    componentDidMount() {
        Axios.get('/api/').then(res =>
            this.setState({articles: res.data.articles}))
            .catch(err => console.log(err))
    }

    deleteArticle  =(id) => {
        Axios.delete('/api/delete/'+id).then(res => this.setState({
            message: res.data.message
        })).catch(err => console.log(err))

        this.setState({articles: this.state.articles.filter(el => el._id !== id)})
    }



    render() {

        let filterArticle = this.state.articles.filter(
            (article) => {
                return article.title.toLowerCase().indexOf(this.state.search) !== -1;
            }
        );

        const alert = (<Alert variant="primary">
            {this.state.message}
        </Alert>);

        return (
            <div>
                {this.state.message && alert}
                <div>
                    <InputGroup>
                        <FormControl
                            className="m-2"
                            type="text" value={this.state.search} onChange={this.updateSearch.bind(this)}
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                    </InputGroup>
                </div>

                    <div>
                        {filterArticle.map(article => {
                            return (
                                <Card key={article._id}>
                                <Card.Body >
                                    <Card.Title>{article.title}</Card.Title>
                                    <Button variant="outline-primary">
                                        <Link to={"/edit/"+article._id}>Edit</Link>
                                    </Button>
                                    <Button
                                        onClick={() => {this.deleteArticle(article._id)}}
                                        variant="outline-danger">Delete</Button>
                                    <Button variant="outline-primary">
                                        <Link to={"/view/"+article._id}>View Article</Link>
                                    </Button>
                                </Card.Body>
                                </Card>
                            )
                        })}
                    </div>
            </div>
        );
    }
}

export default ArticleList;

