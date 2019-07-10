import React from 'react';
import Axios from 'axios';
import {Card} from 'react-bootstrap';



class ArticleDetail extends React.Component {
    state ={
        article: []
    }
    componentDidMount() {
        Axios.get('/api/'+this.props.match.params.id)
            .then(res =>this.setState({article: res.data}));
    }

    render(){
        console.log(this.state.article)
        const {article} = this.state;
        return(
            <Card className="text-center">

                <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>
                        {article.body}
                    </Card.Text>

                </Card.Body>

            </Card>
        )
    }


}

export default  ArticleDetail;
