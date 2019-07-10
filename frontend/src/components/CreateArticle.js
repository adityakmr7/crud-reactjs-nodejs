import React, { Component } from "react";
import axios from 'axios';
import ArticleForm from "./Forms/ArticleForm";
import {Alert} from 'react-bootstrap'

class CreateArticle extends Component {
  state ={
    message: '',
    error: ''
  }
  save = (data) => {
    console.log(data);
    axios.post('api/', {title: data.title, body: data.content})
        .then(res => this.setState({message: res.data.message}))
        .then(() => this.props.history.push('/'))
        .catch(err => this.setState({error: err}))
  };

  render() {
    const MessageDisplay = (<Alert variant="success">
      {this.state.message}
    </Alert>);

    return (
      <div className="container">
        {this.state.message && MessageDisplay}
        <ArticleForm save={this.save} />
      </div>
    );
  }
}

export default CreateArticle;
