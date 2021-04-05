import React, { useState, useEffect } from "react";
import "./index.css";
import API from "../../../services";
import axios from "axios";
export default function DetailPost(props) {
  const [api, setApi] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    const id = props.match.params.id;
    console.log(id);
    // API.DetailPostAPI(`${id}`).then((res) => console.log(res));
    axios.get(`http://localhost:3004/posts/${id}`).then((res) => {
      const data = res.data;
      setApi({
        title: data.title,
        body: data.body,
      });
    });
  }, []);
  console.log(props.match.params);
  return (
    <div>
      <p>{api.title}</p>
      <p>{api.body}</p>
    </div>
  );
}
