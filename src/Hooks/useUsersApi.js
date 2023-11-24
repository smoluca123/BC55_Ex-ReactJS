import React, { useState, useRef } from 'react';
import axios from 'axios';

export default function useUsersApi() {
  const baseApi = useRef(
    'https://650f9b0d54d18aabfe9a203b.mockapi.io/api/v1/users_form_react'
  );
  const addUser = async (user) => {
    const response = await axios.post(baseApi.current, user);
    return response.data;
  };
  const fetchUsers = async () => {
    const response = await axios.get(baseApi.current);
    return response.data;
  };
  const fetchUserById = async (id) => {
    const response = await axios.get(`${baseApi.current}/${id}`);
    return response.data;
  };
  const updateUser = async (id, user) => {
    const response = await axios.put(`${baseApi.current}/${id}`, user);
    return response.data;
  };
  const deleteUser = async (id) => {
    const response = await axios.delete(`${baseApi.current}/${id}`);
    return response.data;
  };

  return { fetchUsers, fetchUserById, deleteUser, addUser, updateUser };
}
