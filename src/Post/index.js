import React from "react";

export default function index({ data, remove, update }) {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/200/150/tech" alt="img-tech" />
      </div>
      <div className="content">
        <p className="title-content">{data.title}</p>
        <p className="title-desc">{data.body}</p>
        <button onClick={() => update(data)}>Update</button>
        <button className="remove" onClick={() => remove(data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}
