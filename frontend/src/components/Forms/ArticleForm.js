import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
class ArticleForm extends Component {
  state = {
    data: {
      title: "",
      content: ""
    }
  };


    onChange = (e) =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSave = (e) => {
      e.preventDefault();
    this.props.save(this.state.data);
  };

  render() {
    const { data } = this.state;
    return (
      <Form onSubmit={this.onSave}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
              name="title"
            required
            type="text"
            placeholder="Title"
            value={data.title}
            onChange={this.onChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
              name="content"
            type="text"
            placeholder="Content"
            value={data.content}
            onChange={this.onChange}
            as="textarea"
            rows="3"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    );
  }
}

ArticleForm.propType = {
  save: PropTypes.func.isRequired
};

export default ArticleForm;
