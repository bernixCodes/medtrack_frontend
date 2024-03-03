import { API_ENDPOINT } from "../config";

export const fetchLabs = async () => {
  const response = await fetch(`${API_ENDPOINT}/labs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "authorized",
    },
  });
  return response;
};

export const addLab = async (data) => {
  const response = await fetch(`${API_ENDPOINT}/labs`, {
    method: "POST",
    headers: {
      Authorization: "authorized",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const editLab = async (id, data) => {
  const response = await fetch(`${API_ENDPOINT}/labs/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "authorized",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const fetchLab = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/labs/${id}`, {
    method: "GET",
    headers: {
      Authorization: "authorized",
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const deleteLab = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/labs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "authorized",
    },
  });
  return response;
};
