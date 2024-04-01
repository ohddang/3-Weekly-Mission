import axios from "axios";
import { API_URL, LINKBRARY_URL } from "./api";
import { useMutation } from "@tanstack/react-query";

export const postUserLogin = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/api/sign-in`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (res.status === 400) return null;
      else if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
  return response;
};

export const postUserSignup = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/api/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .catch((error) => {
      console.error("Error:", error);
      return null;
    });
  return response;
};

export const loginFn = (data: { email: string; password: string }) => {
  return axios.post(`${LINKBRARY_URL}/auth/sign-in`, data);
};

export const postUserLoginMutation = async (email: string, password: string) => {
  const mutation = useMutation({
    mutationFn: loginFn,
  });

  mutation.mutate({ email, password });
  // return { status, data };
  console.log(mutation);

  return mutation;
};
