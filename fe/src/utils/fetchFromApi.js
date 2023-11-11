import axios from "axios";
import { LocalService } from "../services/localservices";
export const BASE_URL = "http://localhost:8080";

const user = LocalService.getItem("USER_LOGIN");

const option = {
  headers: {
    token: user && user.token,
  },
};

export const https = axios.create({
  baseURL: BASE_URL,
});

export const postComment = async (model) => {
  const { data } = await axios.post(
    `${BASE_URL}/comment/post-comment/`,
    model,
    option
  );
  return data;
};

export const saveImg = async (model) => {
  const { data } = await axios.post(`${BASE_URL}/img/saveImg/`, model, option);
  return data;
};

export const editUserInfo = async(model) => { 
  const { data } = await axios.put(`${BASE_URL}/user/user-updateInfo/`, model, option);
  return data;
 }