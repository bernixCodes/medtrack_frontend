import { API_ENDPOINT } from "../config";

export const fetchDrugs = async () => {
  const response = await fetch(`${API_ENDPOINT}/drugs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bernice",
    },
  });
  return response;
};

export const addDrug = async (data) => {
  const response = await fetch(`${API_ENDPOINT}/drugs`, {
    method: "POST",
    headers: {
      Authorization: "bernice",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const fetchDrugOptions = async () => {
  const response = await fetch(`${API_ENDPOINT}/drugs/options`, {
    method: "GET",
    headers: {
      Authorization: "bernice",
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const addDrugOption = async (data) => {
  const response = await fetch(`${API_ENDPOINT}/drugs/options`, {
    method: "POST",
    headers: {
      Authorization: "bernice",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const editDrug = async (id, data) => {
  const response = await fetch(`${API_ENDPOINT}/drugs/${id}`, {
    method: "PUT",
    headers: {
      Authorization: "bernice",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
};

export const fetchDrug = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/drugs/${id}`, {
    method: "GET",
    headers: {
      Authorization: "bernice",
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const deleteDrug = async (id) => {
  const response = await fetch(`${API_ENDPOINT}/drugs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bernice",
    },
  });
  return response;
};
