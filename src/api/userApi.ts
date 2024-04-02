import axios from "axios";
import { LINKBRARY_URL } from "./api";

export const checkEmailFn = async (data: { email: string }) => {
  const response = axios
    .post(`${LINKBRARY_URL}/users/check-email`, data)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
      return error.response.data;
    });
  return response;
};
