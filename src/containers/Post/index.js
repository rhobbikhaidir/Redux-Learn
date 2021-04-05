import React from "react";

export default function index(props) {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="img-tech" />
      </div>
      <div className="content">
        <p
          className="title-content"
          onClick={() => props.goDetail(props.data.id)}
        >
          {props.data.title}
        </p>
        <p className="title-desc">{props.data.body}</p>
        <button onClick={() => props.update(props.data)}>Update</button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
