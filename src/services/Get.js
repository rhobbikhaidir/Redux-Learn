import axios from "axios";

import { rootPath } from "./Config";

const Get = (path, id, bool) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${rootPath}${path}${bool ? id : null}`).then(
      (res) => {
        resolve(res.data);
      },
      (err) => reject(err)
    );
  });
  return promise;
};

export default Get;
