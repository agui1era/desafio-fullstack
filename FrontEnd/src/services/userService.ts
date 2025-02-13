import axios from "axios";
import { User } from "../types";

const API_URL = "/api/usuarios";

export const getUsers = async () => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    return [];
  }
};

export const createUser = async (user: User) => {
  const newUser = { ...user };
  delete newUser.id; // Asegurar que no tenga ID al crear un usuario nuevo
  const response = await axios.post<User>(API_URL, newUser);
  return response.data;
};

export const updateUser = async (id: number, user: User) => {
  const response = await axios.put<User>(`${API_URL}/${id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};
