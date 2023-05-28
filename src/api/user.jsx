import React from "react";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_CRM_BACKEND_URL;

export async function getAllUsers(data){
  return axios.get(`${BASE_URL}/crm/api/v1/users`,{
      headers:{
          'x-access-token':localStorage.getItem("token")
      }
  });
}

export async function updateUser(user){
  return axios.put(`${BASE_URL}/crm/api/v1/users/${user._id}`,user,{
      headers:{
          'x-access-token':localStorage.getItem("token")
      }
  })
}