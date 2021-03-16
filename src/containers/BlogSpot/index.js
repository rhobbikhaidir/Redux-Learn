import React, { Component } from "react";
import axios from "axios";
import "./index.css";
import Post from "../Post";

export default class index extends Component {
  state = {
    post: [],
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
  };

  getApi = () => {
    axios
      .get("http://localhost:3004/posts?_sort=id&_order=desc")
      .then((res) => {
        console.log(res.data);

        this.setState({
          post: res.data,
        });
      });
  };

  putToApi = () => {
    axios
      .put(
        `http://localhost:3004/posts/${this.state.formBlogPost.id}`,
        this.state.formBlogPost
      )
      .then((res) => {
        console.log(res);
      });
  };

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
    console.log(data);
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getApi();
    });
  };

  handleFormChange = (event) => {
    let formBlogSpotNew = { ...this.state.formBlogPost };
    console.log(event.target.value);
    let timeStamp = new Date().getTime();
    if (!this.state.isUpdate) {
      formBlogSpotNew["id"] = timeStamp;
    }
    formBlogSpotNew[event.target.name] = event.target.value;
    this.setState(
      {
        formBlogPost: formBlogSpotNew,
      },
      () => {
        console.log("perubahan state", this.state.formBlogPost);
      }
    );
  };

  postDataToApi = () => {
    axios
      .post("http://localhost:3004/posts", this.state.formBlogPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putToApi();
    } else {
      this.postDataToApi();
    }
  };

  componentDidMount() {
    this.getApi();
  }
  render() {
    return (
      <div>
        <p className="title-blogspot">BlogSpot</p>
        <div className="form-add-post">
          <label htmlFor="title">TItle</label>
          <input
            type="text"
            placeholder="add title"
            name="title"
            value={this.state.formBlogPost.title}
            onChange={this.handleFormChange}
          />
          <textarea
            onChange={this.handleFormChange}
            name="body"
            id="body"
            value={this.state.formBlogPost.body}
            cols="30"
            rows="10"
            placeholder="add blog content"
          ></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {this.state.post.map((res, index) => {
          return (
            <Post
              data={res}
              remove={this.handleRemove}
              key={res.id}
              update={this.handleUpdate}
            />
          );
        })}
      </div>
    );
  }
}
