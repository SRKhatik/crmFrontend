import React from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_CRM_BACKEND_URL;

export async function userSignUp(data) {
  console.log(BASE_URL)
  return axios.post(`${BASE_URL}/crm/api/v1/auth/signup`, data);
}

export async function userSignIn(data) {
  return axios.post(`${BASE_URL}/crm/api/v1/auth/signIn`, data);
}


