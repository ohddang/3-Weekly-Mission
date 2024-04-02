import axios from "axios";
import { LINKBRARY_URL } from "./api";

export const loginFn = (data: { email: string; password: string }) => {
  return axios.post(`${LINKBRARY_URL}/auth/sign-in`, data);
};

export const signupFn = (data: { email: string; password: string }) => {
  return axios.post(`${LINKBRARY_URL}/auth/sign-up`, data);
};
