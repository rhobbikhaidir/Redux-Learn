import Delete from "./Delete";
import Get from "./Get";
import Post from "./Post";
import Put from "./Put";

const getNewsBlog = () => Get("posts?_sort=id&_order=desc");
const postNewsBlog = (data) => Post("posts", data);
const updateNewsBlog = (data, id) => Put(`posts/${id}`, data);
const DeleteNewsBlog = (data) => Delete(`posts/${data}`);
const DetailPostAPI = (id) => Get(`posts/${id}`, true);
const API = {
  getNewsBlog,
  postNewsBlog,
  updateNewsBlog,
  DeleteNewsBlog,
  DetailPostAPI,
};

export default API;
