import React from "react";
import "./YoutubeComp.css";

export default function YoutubeComp() {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img
          src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDF0yuD_ntjcyW46BiPDkjd2v68dw"
          alt=""
        />
        <p className="time">7.12</p>
      </div>
      <p className="title">title here</p>
      <p className="desc">desc here</p>
    </div>
  );
}
