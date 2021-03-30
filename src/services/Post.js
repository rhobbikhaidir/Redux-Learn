import axios from "axios";
import { rootPath } from "./Config";

const Post = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${rootPath}${path}`, data).then(
      (res) => {
        resolve(res);
      },
      (err) => reject(err)
    );
  });

  return promise;
};

export default Post;
