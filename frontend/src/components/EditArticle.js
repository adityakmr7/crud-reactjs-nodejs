import React, { Component } from "react";
import Axios from 'axios';
import ArticleForm from "./Forms/ArticleForm";
import {Alert} from 'react-bootstrap'

class EditArticle extends Component {
    state = {

        message: ''
    }


    save = (data) => {
        Axios.put('/api/update/'+this.props.match.params.id, [
            {
                propName: 'title',
                value: data.title
            },
            {
                propName:'body',
                value: data.content
            }
        ])
            .then(res => this.setState({message: res.data.message}))
            .catch(err => console.log(err))

    };

    render() {

        const message = (<Alert variant="success">
            {this.state.message}
        </Alert>)

        return (
            <div className="container">
                {this.state.message && message}
                <ArticleForm

                    save={this.save}
                />
            </div>
        );
    }
}

export default EditArticle;
