import axios from "axios";
import { rootPath } from "./Config";

const Put = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${rootPath}${path}`, data).then(
      (res) => {
        resolve(res);
      },
      (err) => reject(err)
    );
  });

  return promise;
};

export default Put;
